import { Request, Response } from "express";
import { Beeper } from "../models/beeper";
import { createBeeper } from "../services/beeperService";


export const newBeeper = async (req: Request, res: Response):Promise<void> => {
    try {
        const name = req.body;

        if (!name) {
            res.status(400).json({
                message: "Please enter a name",
            })
        }

        const beeper: Beeper = await createBeeper(name);
        res.status(201).json({ beeper })
    }
    // I still need to handle the catch statement
    catch (error:any) {
        res.status(400).json({
            message: error.message,
        })
    }
}

export const getAllBeepers = async (req: Request, res: Response) => {

}
export const getBeeperById = async (req: Request, res: Response) => {

}
export const updateStatus = async (req: Request, res: Response) => {

}
export const deleteBeeper = async (req: Request, res: Response) => {

}
export const getBeeperByStatus = async (req: Request, res: Response) => {

}
