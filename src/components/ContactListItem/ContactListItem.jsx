

export const ContactListItem = ({contacts, deleteContact}) => {
  return <>
    <li>{contacts.name}: {contacts.number}</li>
    <button
      onClick={()=>deleteContact(contacts.id)}
      type="button">
      Delete
    </button>
  </>
  
  
  
}
