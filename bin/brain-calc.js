import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/brain-calc.js'

runGame(generateRound, gameDescription);
