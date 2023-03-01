import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" onChange={onFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
}