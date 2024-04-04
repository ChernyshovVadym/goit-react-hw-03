const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
