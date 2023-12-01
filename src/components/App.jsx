import { Component } from "react"
import shortid from "shortid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
 

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  
  getContacts = (data) => {
    const newContact = {
      ...data, id: shortid.generate(),
    };
    const isDublicate = this.state.contacts.find(el => el.name === data.name);
    if (isDublicate) return alert(`The contact "${data.name}" is in the contact list`)
    else this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }
  
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(el => el.id !== id)
    }))
  }
  
  render() {
    return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm getContacts={this.getContacts}/>
      <ContactList 
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
      />
  
    </div>
  );
  }
  
};


