import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <main>
      <h1 className={css.phonebookHeader}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contactsHeader}>Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
};

export default App;
