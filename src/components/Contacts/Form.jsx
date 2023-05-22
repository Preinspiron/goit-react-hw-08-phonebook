import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNamesDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const payload = {
      name,
      number,
    };
    isNamesDublicated
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(payload));

    form.reset();
  };
  return (
    <form action="" onSubmit={onFormSubmit}>
      <div className="add-form">
        <TextField
          required
          id="outlined-required"
          name="name"
          placeholder="Enter contact name..."
        />
        <TextField
          id="number"
          name="number"
          placeholder="Enter contact phone number..."
          required
        />
        <Button variant="outlined" type="submit">
          Add contact
        </Button>
      </div>
    </form>
  );
}
