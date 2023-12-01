import { ContactListItem } from "components/ContactListItem/ContactListItem"


export const ContactList = ({contacts, deleteContact}) => {
  return (
      <>
          <h2>List</h2>
          <ul>
        {contacts.map(contact =>
          <ContactListItem
            contacts={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />)}
        </ul>
          </>
          )
}

