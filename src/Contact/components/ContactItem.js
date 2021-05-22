import React from "react";
import cancelImg from "../assets/icons/cancel.svg";
import editImg from "../assets/icons/edit.svg";
import classes from "../contact.module.css";

export default function ContactItem(props) {
  const { contact, index, removeContact, handleEditClick } = props;

  return (
    <div className={classes.inf}>
      <li key={index}>
        <p>
          Full Name:
          <hr />
          <br />
          {contact.title}
        </p>
        <p>
          Phone Number:
          <hr />
          <br />
          {contact.title2}
        </p>
        <p>
          Email:
          <hr />
          <br />
          {contact.title3}
        </p>
        <img
          className={classes.cancelIcon}
          src={cancelImg}
          onClick={() => removeContact(index)}
          alt="cancel-img"
        />
        <img
          onClick={() => handleEditClick(index)}
          className={classes.editIcon}
          src={editImg}
          alt="edit-img"
        />
      </li>
      <hr style={{ marginBottom: "30px" }} />
    </div>
  );
}
