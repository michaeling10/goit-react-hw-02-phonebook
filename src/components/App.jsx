import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(contactsData => [...contactsData, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};
