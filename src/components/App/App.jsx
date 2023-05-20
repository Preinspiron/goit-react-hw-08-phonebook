import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container } from './App.styled.js';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

import Phonebook, { Filter, Contacts } from '../Phonebook';
// import { INIT } from '../Phonebook/index';
import { selectContacts, selectFilter } from '../../redux/selectors.js';
// import { addCon, delCon } from '../../redux/contactsSlice.js';
// import { getFilter } from '../../redux/filterSlice.js';
import { getFilter } from 'redux/contactsSlice.js';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const contactsRedux = useSelector(selectContacts);

  const filterSelect = useSelector(selectFilter);

  const dispatch = useDispatch();
  // let DEF_STATE = localStorage.getItem('contacts');
  // let DEF_PARSED = JSON.parse(DEF_STATE);

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(getFilter(value));
  };

  const addContact1 = value => {
    if (dublicateCheck(value.name)) return alert(`${value.name} exist`);
    dispatch(addContact(value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = query => {
    return contactsRedux.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const dublicateCheck = name => {
    return contactsRedux.some(item => item.name === name);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook
        // handleFormData={handleFormData}
        addContact={addContact1}
        handleChange={handleChange}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filterSelect}
        handleFilter={handleFilter}
        handleChange={handleChange}
      />
      <Contacts
        filter={filterSelect}
        handleDelete={handleDelete}
        handleFilter={handleFilter}
      />
      <Toaster />
    </Container>
  );
};
