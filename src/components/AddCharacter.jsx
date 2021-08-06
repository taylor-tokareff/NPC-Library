import React from 'react';
import CharacterForm from './CharacterForm';

const AddCharacter = () => {
  const handleOnSubmit = (character) => {
    console.log(character);
  };

  return (
    <>
      <CharacterForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddCharacter;
