import { useId } from "react";

const SearchBox = ({ filter, onChangeFilter }) => {
  const inputId = useId();
  const handleChange = (e) => {
    onChangeFilter(e.target.value.trim());
  };
  return (
    <div>
      <label htmlFor={inputId}>Find contact by name</label>
      <input id={inputId} type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
