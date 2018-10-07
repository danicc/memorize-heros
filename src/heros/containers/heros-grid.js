import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeroView from '../components/hero';
import Grid from '../../widgets/grid';

import * as actions from '../../actions';

class HerosGrid extends Component {
  refreshSelections = () => {
    this.props.pickFirst();
    this.props.pickSecond();
  }

  onClick = (selectedHero) => {
    const { firstPick, } = this.props;
    if (this.checkSelected(selectedHero.index)) return;

    if (firstPick.id) {
      this.props.pickSecond(selectedHero);

      if (firstPick.id === selectedHero.id ||
        firstPick.thumbnail.path === selectedHero.thumbnail.path) {
        this.props.unmaskHero(firstPick.index, selectedHero.index);
      }
    } else {
      this.props.pickFirst(selectedHero);
      setTimeout(this.refreshSelections, 1500);
    }
  }

  checkSelected = (heroIndex) => {
    const { firstPick, secondPick, unmaskedHeros } = this.props;
    return (firstPick.index === heroIndex ||
      secondPick.index === heroIndex ||
      unmaskedHeros.includes(heroIndex));
  }

  render() {
    return (
      <Grid>
        {
          this.props.heros.map((hero) => {
            const isHeroUnmasked = this.checkSelected(hero.index);
            return (
              <HeroView
                key={hero.index}
                hero={hero}
                isHeroUnmasked={isHeroUnmasked}
                onClick={this.onClick}
              />
            )
          })
        }
      </Grid>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    // heros: state.data.heros,
    firstPick: state.game.firstPick,
    secondPick: state.game.secondPick,
    unmaskedHeros: state.game.unmaskedHeros
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HerosGrid);