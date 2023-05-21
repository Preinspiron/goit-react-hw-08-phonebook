import { Form, Filter, List } from 'components';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
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
