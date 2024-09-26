import {Beeper, Status} from "../models/beeper.js";
import {v4 as uuidv4} from 'uuid';
import {readFromJsonFile, writeBeeperToJsonFile} from "../DAL/jsonBeepers.js";
import beeper from "../routes/beeper";




export const createBeeper = async (name: string): Promise<Beeper> => {
    const beeper: Beeper = {
        id: uuidv4(),
        name: name,
        status: Status[Status.manufactured],
        created_at: new Date()
    };

    await writeBeeperToJsonFile(beeper);

    return beeper;
};

export const bringAllBeepers = async () => {
    return await readFromJsonFile();
};

export const bringBeeperById = async (id: string): Promise<Beeper> => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find((b) => b.id === id);
    if (!beeper) {
        throw new Error(`Beeper by id ${id} not found`);
    }
    return beeper;
}