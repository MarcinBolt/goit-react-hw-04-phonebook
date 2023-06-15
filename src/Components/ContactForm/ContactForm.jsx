import { nanoid } from 'nanoid';
import { usePhonebookContext } from '../PhonebookContext/PhonebookContext';
import capitalizeEachWord from '../../utils/capitalizeEachWord';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const { contacts, addContactToLocalStorage } = usePhonebookContext();

  const handleSubmit = e => {
    e.preventDefault();

    const newContactId = nanoid();
    const formDOM = e.currentTarget;
    const newContactName = capitalizeEachWord(formDOM.elements.name.value);
    const newContactNumber = formDOM.elements.number.value;

    const newContact = {
      id: newContactId,
      name: newContactName,
      number: newContactNumber,
    };

    contacts.find(c => c.name.toLowerCase() === newContact.name.toLowerCase())
      ? window.alert(`${newContact.name} is already in contacts.`)
      : addContactToLocalStorage(newContact);

    formDOM.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label className={css.contactForm__label}>
        <p className={css.contactForm__labelDescription}>Name</p>
        <input
          className={css.contactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactForm__label}>
        <p className={css.contactForm__labelDescription}>Number</p>
        <input
          className={css.contactForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.contactForm__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  addContactToState: PropTypes.func,
};
