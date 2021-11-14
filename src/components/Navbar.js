import React from "react";
import "react-router-dom";
import logo from "../assets/image/logo.png";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

export default function Nav() {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBRow>
                <MDBCol className="d-flex align-items-center justify-content-center">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "#3b5998" }}
                  >
                    <MDBIcon fas icon="cog" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "#55acee" }}
                  >
                    <MDBIcon fas icon="bell" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "#dd4b39" }}
                  >
                    <MDBIcon fas icon="envelope" size="lg" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol className=" d-flex align-items-center justify-content-center">
                  <img src={logo} alt="" className="logo img-fluid" />
                </MDBCol>
                <MDBCol className="d-flex align-items-center justify-content-center">
                  <p className="nav-personName m-2">Thishan</p>
                  <img
                    src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg"
                    alt=""
                    className="img-fluid nav-personImage rounded-circle img-thumbnail"
                  />
                </MDBCol>
              </MDBRow>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
