import React from 'react';

const FilterGenre = (props) => {

	const handleChange = props.handleChange;
	const inputValue = props.inputValue;

	return (
      <input
        onChange={handleChange}
        value={inputValue}
        className="form-control"
        placeholder="search by genre"
      />
	);
};

export default FilterGenre;
