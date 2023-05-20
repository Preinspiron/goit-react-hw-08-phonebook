import PropTypes from 'prop-types';
import { Input } from './Phonebook.styled';
export const Filter = ({ handleChange, filter }) => {
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Find contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
