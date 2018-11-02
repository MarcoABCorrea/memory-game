import { Card } from "./card.model";
import * as _ from 'lodash';

const CARD_NAMES = [
	'1up',
	'coin',
	'goomba',
	'luigi',
	'mario',
	'mushroom',
	'peach',
	'star'
  ];

export const CARDS: Array<Card> = CARD_NAMES.map(card => ({
	name: card,
	flipped: false,
	url: `/assets/${card}.png`,
	captured: false
}))

export const CARD_BACK: Card = {
	name: 'question',
	flipped: true,
	url: `/assets/question.gif`
}

export function getGameCards() {
	const array = CARDS.concat(CARDS).map(c => ({
		randomValue: Math.random(),
	  name: c.name,
	  flipped: c.flipped,
		url: c.url,
		captured: c.captured
	}));

	return _.shuffle(array);
}