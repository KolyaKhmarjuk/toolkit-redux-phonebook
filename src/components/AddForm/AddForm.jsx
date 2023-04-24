import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsAction';

export default function AddForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsState = useSelector(state => state.contacts.item);
  const dispatch = useDispatch();

  const handelChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const nameCheck = contactsState.some(contact =>
      contact.name.includes(name)
    );

    if (nameCheck) {
      alert(`${number} is readly in contacts!`);
      return;
    }

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handelChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="input"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handelChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className="input"
          />
        </label>
        <button className="buttonAdd" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
