import classes from "../contact.module.css";
import React, { useState } from "react";

export default function ContactEdit(props) {
  const {
    currentTitle,
    currentTitle2,
    currentTitle3,
    contactList,
    setContactList,
    index,
    setEditingContact,
  } = props;

  const [title, setTitle] = useState(currentTitle);
  const [title2, setTitle2] = useState(currentTitle2);
  const [title3, setTitle3] = useState(currentTitle3);

  const handleEdit = (e) => {
    e.preventDefault();
    setContactList(
      contactList.map((contact, i) =>
        i === index ? { ...contact, title, title2, title3 } : contact
      )
    );
    setEditingContact(null);
  };

  return (
    <li className={classes.editingTodo}>
      <form onSubmit={handleEdit}>
        <h1 className={classes.editing_h1}>Editing</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          required
          value={title}
        />
        <input
          onChange={(e) => setTitle2(e.target.value)}
          type="number"
          name="title"
          required
          value={title2}
        />{" "}
        <input
          onChange={(e) => setTitle3(e.target.value)}
          type="email"
          name="title"
          required
          value={title3}
        />
        <button>Edit</button>
      </form>
    </li>
  );
}
