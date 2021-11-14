import React, { useEffect, useState } from "react";
import axios from "axios";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Contact() {
  const [contacts, setProducts] = useState([]);

  const getContact = async () => {
    await axios
      .request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
      })
      .then((response) => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <MDBRow size="12" className="p-2">
        <MDBCol>
          <h3 className="contact-heading">Contacts</h3>
        </MDBCol>
      </MDBRow>
      {contacts.map((contact, key) => (
        <MDBRow className="p-2 d-flex justify-content-center" key={contact.id}>
          <MDBCol size="4" className="col-example ">
            <img
              src="https://res.cloudinary.com/mediadevs/image/fetch/c_fill,w_128,h_128/v1/https://cdn.sanity.io/images/5ad74sb4/production/5eadf06f02778c3b1dec1ed67c504241fd4d1f9a-432x432.png"
              alt=""
              className="img-fluid contact-image  rounded-circle img-thumbnail"
            />
          </MDBCol>
          <MDBCol size="8" className="d-flex flex-column ">
            <h6 className="contact-username">{contact.username}</h6>
            <p className="contact-email">{contact.email}</p>
            <p className="contact-phone">{contact.phone}</p>
          </MDBCol>
        </MDBRow>
      ))}
    </div>
  );
}
