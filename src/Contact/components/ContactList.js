import React, { useState } from "react";
import classes from "../contact.module.css";
import ContactEdit from "./ContactEdit";
import ContactItem from "./ContactItem";

export default function ContactList(props) {
  const { contactList, setContactList } = props;

  const [editingContact, setEditingContact] = useState(null);

  const removeContact = (index) => {
    setContactList(contactList.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setEditingContact(index);
  };

  return (
    <ul className={classes.todoList}>
      {contactList.map((contact, index) =>
        index === editingContact ? (
          <ContactEdit
            currentTitle={contact.title}
            currentTitle2={contact.title2}
            currentTitle3={contact.title3}
            contactList={contactList}
            setContactList={setContactList}
            index={index}
            setEditingContact={setEditingContact}
          />
        ) : (
          <ContactItem
            contact={contact}
            index={index}
            removeContact={removeContact}
            handleEditClick={handleEditClick}
          />
        )
      )}
    </ul>
  );
}
