import React, { useState } from "react";
import classes from "../contact.module.css";
import notebook from "../assets/icons/notebook.png";

export default function Form(props) {
  const { contactList, setContactList } = props;

  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList([...contactList, { title, title2, title3 }]);
    setTitle("");
    setTitle2("");
    setTitle3("");
  };

  return (
    <div className={classes.formWrapper}>
      <div>
        <h3>
          Contact Book
          <img src={notebook} />
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Full Name"
          name="title"
          type="text"
          required
          value={title}
        />
        <input
          onChange={(e) => setTitle2(e.target.value)}
          placeholder="Phone Number"
          name="title"
          type="number"
          required
          value={title2}
        />
        <input
          onChange={(e) => setTitle3(e.target.value)}
          placeholder="Email"
          name="title"
          type="email"
          required
          value={title3}
        />
        <button>Create</button>
      </form>
    </div>
  );
}
