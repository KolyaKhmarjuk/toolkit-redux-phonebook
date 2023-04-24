import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsAction';

export default function ContactsBook() {
  const [filteredList, setFilteredList] = useState([]);

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.item);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );

    setFilteredList(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul>
      {filteredList.map(contact => (
        <li className="contactItem" key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className="deleteBtn"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
