import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './Phonebook.styled';
import './style.scss';
import { selectIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Contacts = ({ handleFilter, handleDelete, filter }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Contact>
      {isLoading
        ? 'Loading'
        : handleFilter(filter).map(({ name, phone, id }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {phone}
                </p>
                <button className="btn" onClick={() => handleDelete(id)}>
                  delete
                </button>
              </li>
            );
          })}
    </Contact>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
  handleFilter: PropTypes.func,
};
