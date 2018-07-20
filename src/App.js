import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./character.json"; 
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

class App extends Component {
  
  state = {
    character
  };

  render() {
    return (
     
      <Wrapper>
        <ScoreBoard/>
        <Title>Flag Clicky Game</Title>

        {this.state.character.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
