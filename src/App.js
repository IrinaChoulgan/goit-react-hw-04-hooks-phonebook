import { useState, useEffect } from 'react';
import ContactList from './components/Contacts/ContactList';
import Filter from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import styles from './components/ContactForm/ContactForm.module.css';
// import userEvent from '@testing-library/user-event';
import contactsArray from './components/contacts.json';

export default function App() {
  const useLS = contactsArray => {
    const [contacts, setContacts] = useState(
      () =>
        JSON.parse(window.localStorage.getItem('contacts')) ?? contactsArray,
    );
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
    return [contacts, setContacts];
  };

  const [contacts, setContacts] = useLS(contactsArray);
  const [filter, setFilter] = useState('');

  const addNewContact = obj => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
      )
    ) {
      alert(`${obj.name} is already in contacts`);
    } else
      setContacts(contacts => {
        return {
          contacts: [...contacts, obj],
        };
      });
  };
  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>

      <Filter contacts={filter} onChange={onChangeFilter} />
      {contacts.length === 0 ? (
        <p>Your phone book is empty. Add contacts.</p>
      ) : (
        <ContactList contacts={visibleContacts} onClick={deleteContact} />
      )}
    </div>
  );
}
// export default class App extends Component {
// state = {
// contacts: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//   filter: '',
// };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     // console.log(contacts);
//     // console.log(parsedContacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   addNewContact = obj => {
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
//       )
//     ) {
//       alert(`${obj.name} is already in contacts`);
//     } else
//       this.setState(prevState => {
//         return {
//           contacts: [...prevState.contacts, obj],
//         };
//       });
//   };
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   onChangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//     return (
//       <div className={styles.container}>
//         <h1 className={styles.title}>Phonebook</h1>
//         <ContactForm addNewContact={this.addNewContact} />
//         <h2>Contacts</h2>

//         <Filter contacts={this.state.filter} onChange={this.onChangeFilter} />
//         {this.state.contacts.length === 0 ? (
//           <p>Your phone book is empty. Add contacts.</p>
//         ) : (
//           <ContactList
//             contacts={visibleContacts}
//             onClick={this.deleteContact}
//           />
//         )}
//       </div>
//     );
//   }
// }
