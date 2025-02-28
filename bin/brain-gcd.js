import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/brain-gcd.js';

runGame(generateRound, gameDescription);
