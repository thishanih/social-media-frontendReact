import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../assets/style.css";

import Contacts from "../components/Contact";
import Lorem from "../components/Lorem";
import AddPost from "../components/Addpost";

export default function Home() {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="mar-4">
          <MDBCol lg="3" size="12" className="col-example">
            <Contacts />
          </MDBCol>
          <MDBCol lg="6" size="12" className="col-example">
            <AddPost />
          </MDBCol>
          <MDBCol lg="3" size="12" className="col-example">
            <Lorem />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
