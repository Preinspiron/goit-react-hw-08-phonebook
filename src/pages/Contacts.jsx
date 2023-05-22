import { Form, Filter, List } from 'components';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
// import { contactsApi } from 'redux/contactsApi';
import { useGetAllQuery } from 'redux/contacts/contactsApi';
import { selectToken } from 'redux/auth/auth';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  const error = useSelector(selectError);
  const { data } = useGetAllQuery();
  console.log(data);
  console.log(token);

  useEffect(() => {
    dispatch(fetchContacts());
    // dispatch(contactsApi());
  }, [dispatch]);

  return (
    <>
      <h1>Personal contacts</h1>
      <Form />
      <h2>Contacts list:</h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}

      <List />
    </>
  );
}
