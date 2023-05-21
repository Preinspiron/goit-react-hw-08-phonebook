// import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  // const handleUpdate = e => {
  //   e.preventDefault();
  //   // console.log(e.currentTarget.elements.edit);
  //   e.currentTarget.elements.name.toggleAtribute('readOnly', true);
  // };

  return (
    <ul className="form-list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className="">
            <p>Name: {name}</p>

            <p>Number: {number}</p>
          </div>
          <div className="">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
