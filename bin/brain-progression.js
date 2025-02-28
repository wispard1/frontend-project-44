import runGame from '../src/index.js';
import {
  generateRound,
  gameDescription,
} from '../src/games/brain-progression.js';

runGame(generateRound, gameDescription);
