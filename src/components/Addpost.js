import React, { useState, useEffect } from "react";
import axios from "axios";
import New from "./News";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";

export default function Addpost() {
  const [news, setnews] = useState([]);

  const [postTitle, setPostTitle] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const [like, setlike] = useState();
  const [dislike, setDislike] = useState();

  // Title
  const onTitle = (e) => {
    setPostTitle(e.target.value);
  };

  // Message
  const onMessage = (e) => {
    setPostMessage(e.target.value);
  };

  // Image
  const onImage = (e) => {
    setPostImage(e.target.files[0]);
  };

  //  Display post

  const getnews = async () => {
    await axios
      .request({
        method: "get",
        url: "http://localhost:5000/news",
      })
      .then((response) => {
        setnews(response.data);
      });
  };

  //  Add post

  const onSubmit = async () => {
    let formData = new FormData(); //formdata object

    formData.append("title", postTitle); //append the values with key, value pair
    formData.append("message", postMessage);
    formData.append("image", postImage);

    await axios
      .post("http://localhost:5000/news/addNews", formData)
      .then((response) => {
        setPostTitle("");
        setPostMessage("");
        setPostImage("");
        getnews();
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertMessage(error.response.data);
      });
  };

  //  Delect post
  const deleteFunc = async (id) => {
    await axios.delete("http://localhost:5000/news/delectNews/" + id);
    let newProducts = news.filter((news) => news._id !== id);
    setnews(newProducts);
  };

  // Update like

  const likeFunc = async (id) => {
    const productid = news.find((obj) => obj._id === id);
    setlike(productid.like + 1);

    await axios
      .put("http://localhost:5000/news/updateLike/" + id, {
        like: like,
      })
      .then((response) => {
        getnews();
      });
  };

  // Update Dislike

  const dislikeFunc = async (id) => {
    const productid = news.find((obj) => obj._id === id);
    setDislike(productid.dislike + 1);

    await axios
      .put("http://localhost:5000/news/updatedisLike/" + id, {
        dislike: dislike,
      })
      .then((response) => {
        getnews();
      });
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <div>
      <MDBRow>
        <MDBCol size="12" className="p-2 d-flex justify-content-center">
          <h4 className="lorem-heading">New Post</h4>
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-2 d-flex justify-content-center">
        <MDBCol lg="8" col="12" className="col-example p-3">
          <MDBInput
            value={postTitle}
            label="Title"
            id="form1"
            type="text"
            onChange={onTitle}
          />
        </MDBCol>
        <MDBCol lg="8" col="10" className="col-example p-3">
          <MDBInput
            value={postMessage}
            label="Message"
            id="textAreaExample"
            textarea
            rows={4}
            onChange={onMessage}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-2 d-flex justify-content-center">
        <MDBCol lg="5" size="6">
          <input
            type="file"
            className="form-control"
            id="customFile"
            onChange={onImage}
          />
        </MDBCol>

        <MDBCol lg="3" size="6" className="d-flex justify-content-end">
          <MDBBtn style={{ backgroundColor: "#5C7AEA" }} onClick={onSubmit}>
            <MDBIcon className="me-2" fas icon="paper-plane" /> Post
          </MDBBtn>
        </MDBCol>

        <MDBCol size="8">
          {showAlert ? (
            <MDBBadge className="mx-2" color="danger">
              {alertMessage}
            </MDBBadge>
          ) : null}
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol className="News-space">
          <h4 className="News-heading">My Posts</h4>
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-2 d-flex justify-content-center">
        {news.map((post, key) => (
          <MDBCol lg="8" size="12" key={post._id}>
            <New
              key={post._id}
              post={post}
              onDelect={() => deleteFunc(post._id)}
              onLike={() => likeFunc(post._id)}
              onDisLike={() => dislikeFunc(post._id)}
            />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
