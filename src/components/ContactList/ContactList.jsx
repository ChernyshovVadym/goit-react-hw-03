import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  //   console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
