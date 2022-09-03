import React from "react";
import user from "../images/Robo.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ marginTop: "10px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon right floated"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
