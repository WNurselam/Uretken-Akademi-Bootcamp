import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Envelope, Phone } from "@phosphor-icons/react";

const Users = ({ user }) => {
  return (
    <div className="text-center">
      <Card
        body
        className="my-2"
        style={{
          width: "25rem",
          backgroundColor: "rgb(1, 22, 39)",
          color: "white",
        }}
      >
        <CardTitle tag="h5">{user.username}</CardTitle>
        <CardSubtitle className="border-bottom pb-2 border-primary">
          {user.name}
        </CardSubtitle>
        <CardBody>
          <div className="d-flex  align-items-start  flex-column">
            <div>
              <Phone className="hover" size={36} color="#AE2983" />
              <span className="m-lg-2">{user.phone}</span>
            </div>
            <div>
              <Envelope size={36} color="#AE2983" />
              <span className="m-lg-2">{user.email}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Users;
