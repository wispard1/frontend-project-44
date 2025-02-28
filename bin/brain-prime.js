import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/brain-prime.js';

runGame(generateRound, gameDescription);
