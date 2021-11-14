import React from "react";

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";
export default function News(props) {
  return (
    <div>
      <MDBCard className="News-space">
        <MDBCardImage src={props.post.image} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardTitle className="News-Title">{props.post.title}</MDBCardTitle>
          <MDBCardText className="News-Message">
            {props.post.message}
          </MDBCardText>
          <MDBRow>
            <MDBCol size="2">
              <MDBBtn className="" color="danger" onClick={props.onDelect}>
                Delect
              </MDBBtn>
            </MDBCol>
            <MDBCol size="10" className="d-flex justify-content-end">
              <MDBBtn
                style={{ backgroundColor: "#3b5998" }}
                onClick={props.onLike}
              >
                Like
                <MDBBadge color="danger" className="ms-2">
                  {props.post.like}
                </MDBBadge>
              </MDBBtn>

              <MDBBtn
                className="mx-1"
                style={{ backgroundColor: "#3b5998" }}
                onClick={props.onDisLike}
              >
                DisLike
                <MDBBadge color="danger" className="ms-2">
                  {props.post.dislike}
                </MDBBadge>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
