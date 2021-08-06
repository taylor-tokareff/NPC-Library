/* eslint-disable max-len */
import React, { useState, handleInputChange } from 'react';
import PropTypes from 'prop-types';



const CharacterForm = () => {
  const [character, setCharacter] = useState({
    name: props.character ? props.character.name : '',
    strength: props.character ? props.character.strength : '',
    dexterity: props.character ? props.character.dexterity : '',
    constitution: props.character ? props.character.constitution : '',
    intelligence: props.character ? props.character.intelligence : '',
    wisdom: props.character ? props.character.wisdom : '',
    charisma: props.character ? props.character.charisma : '',
    race: props.character ? props.character.race : '',
    description: props.character ? props.character.description : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, strength, constitution, dexterity, intelligence, wisdom, charisma, race, description } = character;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, strength, constitution, dexterity, intelligence, wisdom, charisma, race, description];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const character = {
        name,
        strength,
        constitution,
        dexterity,
        intelligence,
        wisdom,
        charisma,
        race,
        description
      };
      props.handleOnSubmit(character);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };



  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">

          <Form.Label>Character Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name of character"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="strength">
          <Form.Label>Strength</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="strength"
            value={strength}
            placeholder="Strength"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="dexterity">
          <Form.Label>Dexterity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="dexterity"
            value={dexterity}
            placeholder="Dexterity"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="intelligence">
          <Form.Label>Intelligence</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="intelligence"
            value={intelligence}
            placeholder="Intelligence"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="wisdom">
          <Form.Label>Wisdom</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="wisdom"
            value={wisdom}
            placeholder="Wisdom"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="charisma">
          <Form.Label>Charisma</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="charisma"
            value={charisma}
            placeholder="Charisma"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="race">
          <Form.Label>Race</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="race"
            value={race}
            placeholder="Race"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="description"
            value={description}
            placeholder="Description"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );

};

CharacterForm.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
};


export default CharacterForm;
