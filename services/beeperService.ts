import {Beeper, Status} from "../models/beeper.js";
import {v4 as uuidv4} from 'uuid';
import {readFromJsonFile, writeBeeperToJsonFile, updateBeepersToJsonFile} from "../DAL/jsonBeepers.js";
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

export const statusUpdateById = async (id: string): Promise<Beeper> => {

    const beeper: Beeper = await bringBeeperById(id);
    console.log('Im here')
    let num: number = 0;

    switch (beeper.status?.toString()) {
        case Status.manufactured.toString():{
            beeper.status = Status[Status.assembled];
            console.log(num + 1)
            break;
        }
        case Status.assembled.toString():{
            beeper.status = Status[Status.shipped];
            console.log(num +1)
            break;
        }
        case Status.shipped.toString():{
            beeper.status = Status[Status.deployed];
            // timing()
            break;
        }
    }

    const beepers: Beeper[] = await readFromJsonFile();

    const updatedBeepers: Beeper[] = beepers.filter(b => b.id !== id);
    updatedBeepers.push(beeper);
    await updateBeepersToJsonFile(beeper);
    return beeper;

}
