import jsonfile from 'jsonfile';
import { Beeper } from '../models/beeper.js';

const DB_FILE_PATH = process.env.DB_FILE_PATH || '';


export const writeUserToJsonFile = async (beeper: Beeper): Promise<void> => {
  const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH);
  beepers.push(beeper);
  await jsonfile.writeFile(DB_FILE_PATH, beepers);
};

export const readFromJsonFile = async (): Promise<Beeper[]> => {
  return await jsonfile.readFile(DB_FILE_PATH);
};
