import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardOverlay,
} from "mdb-react-ui-kit";

export default function Lorem() {
  const [lorems, setlorem] = useState([]);

  const getlorem = async () => {
    await axios
      .request({
        method: "get",
        url: "https://picsum.photos/v2/list?page=1&limit=10",
      })
      .then((response) => {
        setlorem(response.data);
      });
  };

  useEffect(() => {
    getlorem();
  }, []);

  return (
    <MDBRow className="">
      <MDBCol size="12" className="p-2 d-flex justify-content-center">
        <h4 className="lorem-heading">
          Lorem <br /> Picsum Post
        </h4>
      </MDBCol>

      {lorems.map((lorem, key) => (
        <MDBCol
          size="12"
          className="p-2 d-flex justify-content-center"
          key={lorem.id}
        >
          <MDBCard background="dark" className="text-white ">
            <MDBCardImage
              overlay
              src={lorem.download_url}
              alt="..."
              className="img-fluid lorem-image"
            />
            <MDBCardOverlay className="d-flex align-items-end justify-content-left">
              <MDBCardTitle className="lorem-author">
                {lorem.author}
              </MDBCardTitle>
            </MDBCardOverlay>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
