import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import localStore from '../../utils/localStore';

const PhonebookContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePhonebookContext = () => useContext(PhonebookContext);

export const PhonebookProvider = ({ children }) => {
  const [contacts, setContacts] = useState(
    localStore.load('contacts') ? localStore.load('contacts') : localStore.save('contacts', [])
  );
  const [filter, setFilter] = useState('');

  const handleFiltering = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const addContactToLocalStorage = newContact =>
    setContacts(prevContacts => [...prevContacts, newContact]);

  const deleteContactFromLocalStorage = e => {
    e.preventDefault();
    const { id } = e.target;
    setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
  };

  useEffect(() => {
    localStore.save('contacts', contacts);
  }, [contacts]);

  return (
    <PhonebookContext.Provider
      value={{
        contacts,
        filter,
        handleFiltering,
        addContactToLocalStorage,
        deleteContactFromLocalStorage,
      }}
    >
      {children}
    </PhonebookContext.Provider>
  );
};

PhonebookProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
