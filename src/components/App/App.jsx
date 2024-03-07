import { ContactList } from '../ContactList/ContactList'
import { SearchBox } from '../SearchBox/SearchBox'
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'

export const App = () => {
 
  

  const initialContacts  = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const savedContacts = JSON.parse(localStorage.getItem('contacts')) || initialContacts;
 
  const [contacts, setContacts] = useState(savedContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (searchQuery) => {
    const filteredContacts = initialContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };
  
  return (
    <>
     <h1>Phonebook</h1>
     <ContactForm addContact={addContact} />
     <SearchBox handleSearch={handleSearch} />
     <ContactList  contacts={contacts} onDelete={deleteContact}/>
    </>
  )
}


