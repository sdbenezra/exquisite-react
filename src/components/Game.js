import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: '',
      submissions: [],
      playerNumber: 1,
      isSubmitted: false,
    }
  }

  onPlayerSubmit = (submission) => {
    const newState = this.state;
    newState.recentSubmission = submission
    newState.submissions.push(submission);
    newState.playerNumber += 1
    this.setState(newState);
  }

  revealPoem = () => {
    console.log("Game Message - player has clicked reveal button");
    const newState = {}
    newState.isSubmitted = true;
    newState.recentSubmission = '';
    this.setState(newState);
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission recentSubmission={this.state.recentSubmission} submission={this.state.recentSubmission}/>

        <PlayerSubmissionForm playerNumber={this.state.playerNumber} onPlayerSubmit={this.onPlayerSubmit} isSubmitted={this.state.isSubmitted}/>


        <FinalPoem submissions={this.state.submissions} onRevealClick={this.revealPoem} isSubmitted={this.state.isSubmitted}/>


      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
