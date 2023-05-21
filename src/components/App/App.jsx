import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { Container } from './App.styled.js';
// import { fetchContacts, addContact, deleteContact } from 'redux/operations';

// import Phonebook, { Filter, Contacts } from '../Phonebook';
// import { INIT } from '../Phonebook/index';
// import { selectContacts, selectFilter } from '../../redux/selectors.js';
// import { addCon, delCon } from '../../redux/contactsSlice.js';
// import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/contactsSlice.js';
// import { Toaster } from 'react-hot-toast';
import { selectIsLoading, refreshCurrentUser } from 'redux/auth';

import { Shared, Register, Login, Private, Public } from 'components';
import { Home, Contacts } from 'pages';
// import { LocalHospital } from '@mui/icons-material';

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Shared />}>
          {!isCurrentLoading && (
            <>
              <Route index element={<Home />} />
              <Route
                path="register"
                element={
                  <Public restricted>
                    <Register />
                  </Public>
                }
              />
              <Route
                path="login"
                element={
                  <Public restricted>
                    <Login />
                  </Public>
                }
              />
              <Route
                path="contacts"
                element={
                  <Private>
                    <Contacts />
                  </Private>
                }
              ></Route>
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
};

// <Container>
//   <h1>Phonebook</h1>
//   <Phonebook
//     // handleFormData={handleFormData}
//     addContact={addContact1}
//     handleChange={handleChange}
//   />
//   <h2>Contacts</h2>
//   <Filter
//     filter={filterSelect}
//     handleFilter={handleFilter}
//     handleChange={handleChange}
//   />
//   <Contacts
//     filter={filterSelect}
//     handleDelete={handleDelete}
//     handleFilter={handleFilter}
//   />
//   <Toaster />
// </Container>
