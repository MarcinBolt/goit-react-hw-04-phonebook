import { usePhonebookContext } from '../../phonebookContext';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const { filter, handleFiltering } = usePhonebookContext();

  return (
    <label className={css.filter__label}>
      <p className={css.filter__labelDescription}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFiltering}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
