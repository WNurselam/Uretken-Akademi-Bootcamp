import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const Users = ({ user }) => {
  return (
    <div className="text-center">
      <Card
        body
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardTitle tag="h5">{user.username}</CardTitle>
        <CardText>{user.name}</CardText>
        <CardBody>{user.phone}</CardBody>
      </Card>
    </div>
  );
};

export default Users;
