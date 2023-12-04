import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Submit } from './SearchForm.styled';

const SearchForm = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    handleSubmit(value);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        <Submit type="submit" value="" />
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
