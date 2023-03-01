import React from "react";
import PropTypes from 'prop-types';
import {ContactsList, ContactsListItem, ContactBtn} from './ContactList.styled'


export const ContactList = ({ contacts, onDelete }) => {

return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <ContactBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </ContactBtn>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ),
    onDelete: PropTypes.func.isRequired,
};
