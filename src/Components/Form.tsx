import React, { useState } from "react";

export interface ISearch {
  searched: string;
}

interface FormProps {
  onSearch: (searchTerm: string) => void;
}

const Form: React.FC<FormProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<ISearch>({ searched: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch({ searched: value });
    onSearch(value);  
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search Term:", search);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="searched"
          placeholder="Enter country name"
          value={search.searched}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
