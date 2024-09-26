import { Beeper, Status } from "../models/beeper";
import { v4 as uuidv4 } from 'uuid';
import { writeBeeperToJsonFile } from "../DAL/jsonBeepers";


export const createBeeper = async (name: string): Promise<Beeper> => {
    const beeper: Beeper = {
        id: uuidv4(),
        name: name,
        status: Status.manufactured,
        created_at: new Date()
    };

    await writeBeeperToJsonFile(beeper);

    return beeper;
};