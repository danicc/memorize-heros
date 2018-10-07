import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';
import * as actions from '../../actions';
import HerosGrid from '../../heros/containers/heros-grid';

class App extends Component {

  restartGame = () => {
    this.props.getHerosAsync(10);
    this.props.restartGame();
  }

  render() {
    const { heros, unmaskedHeros } = this.props;
    const isGameOver = heros.length > 0 && unmaskedHeros.length === heros.length;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memorize your heros</h1>
          <button className="Start-button" onClick={this.restartGame}>
            <a>Start a new Game</a>
          </button>
        </header>
        {
          isGameOver &&
          <h2>You have an incredible memory</h2>
        }
        {
          heros && <HerosGrid heros={heros} />
        }
      </div>
    );
  }
}

const mapStateToProps = (({ data, game }) => {
  return {
    heros: data.heros,
    unmaskedHeros: game.unmaskedHeros
  }
})

const mapDispatchToProps = ((dispatch) => {
  return bindActionCreators(actions, dispatch);
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
