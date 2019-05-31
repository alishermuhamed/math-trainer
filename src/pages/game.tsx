import * as React from 'react';
import { Link } from 'react-router-dom';

interface State {
  firstNumber: number;
  operation: string;
  secondNumber: number;
  answer: number;
  userInput: string;
}

class GamePage extends React.Component<{}, State> {
  state = {
    firstNumber: 0,
    operation: '+',
    secondNumber: 0,
    answer: 0,
    userInput: '',
  };

  componentDidMount = (): void => this.generateNewExercise();

  generateNewExercise = (): void => {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const answer = eval(`${firstNumber} ${this.state.operation} ${secondNumber}`);
    this.setState({
      firstNumber,
      secondNumber,
      answer,
    });
  };

  handleUserInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    if (parseInt(value) === this.state.answer) {
      this.generateNewExercise();
      this.setState({ userInput: '' });
    } else this.setState({ userInput: value });
  };

  render(): JSX.Element {
    const { firstNumber, operation, secondNumber, userInput } = this.state;
    return (
      <React.Fragment>
        <Link to="/" className="link">
          STOP
        </Link>
        <span className="large-text">{`${firstNumber} ${operation} ${secondNumber}`}</span>
        <input
          type="number"
          pattern="\d*"
          className="user-input"
          autoFocus={true}
          value={userInput}
          onChange={this.handleUserInputChange}
        />
      </React.Fragment>
    );
  }
}

export default GamePage;
