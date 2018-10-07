import {
  PICK_FIRST,
  PICK_SECOND,
  UNMASK_HERO,
  RESTART_GAME,
  GET_HEROS
} from "../action-types";
import { shuffle } from "../utils";
import { API_KEY } from "../config";

export function pickFirst(hero = {}) {
  return {
    type: PICK_FIRST,
    payload: {
      hero
    }
  };
}

export function pickSecond(hero = {}) {
  return {
    type: PICK_SECOND,
    payload: {
      hero
    }
  };
}

export function unmaskHero(firstPickIndex, secondPickIndex) {
  return {
    type: UNMASK_HERO,
    payload: {
      firstPickIndex,
      secondPickIndex
    }
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME
  };
}

export function getHerosAsync(limit) {
  return dispatch => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=077cc78a45e062705ab4461efded61c1&limit=${limit}`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const baseHeros = jsonResponse.data.results;
        const otherHeros = JSON.parse(JSON.stringify(baseHeros));
        const heros = [...baseHeros, ...otherHeros].map((hero, index) => {
          hero.index = index;
          return hero;
        });
        const asdf = shuffle(heros);
        dispatch(getHeros(asdf));
      });
  };
}

export function getHeros(heros) {
  return {
    type: GET_HEROS,
    payload: {
      heros
    }
  };
}
