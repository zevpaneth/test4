import jsonfile from 'jsonfile';
import { Beeper } from '../models/beeper.js';
import dotenv from 'dotenv';




dotenv.config();

const DB_FILE_PATH = process.env.DB_FILE_PATH || "";


export const writeBeeperToJsonFile = async (beeper: Beeper): Promise<void> => {
  const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH);
  beepers.push(beeper);
  await jsonfile.writeFile(DB_FILE_PATH, beepers);
};

export const readFromJsonFile = async (): Promise<Beeper[]> => {
  return await jsonfile.readFile(DB_FILE_PATH);
};

export const updateBeepersToJsonFile = async (beeper: Beeper): Promise<void> => {
  const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH)
  const updateBeepers = await beepers.filter(b => b.id !== beeper.id);
  updateBeepers.push(beeper);
  await jsonfile.writeFile(DB_FILE_PATH, updateBeepers);
}
