import { usePhonebookContext } from '../PhonebookContext/PhonebookContext';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter, deleteContactFromLocalStorage } = usePhonebookContext();

  return (
    <ul className={css.contactList__list}>
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <li className={css.contactList__item} key={id}>
              <p className={css.contactList__paragraph}>
                {name}: {number}
                <button type="button" name="delete" id={id} onClick={deleteContactFromLocalStorage}>
                  Delete
                </button>
              </p>
            </li>
          )
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
