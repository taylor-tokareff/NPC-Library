import React from 'react';
import CharacterForm from './CharacterForm';

const AddCharacter = () => {
  const handleOnSubmit = (character) => {
    console.log(character);
  };

  return (
    <React.Fragment>
      <CharacterForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCharacter;
