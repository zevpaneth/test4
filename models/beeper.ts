export interface Beeper {
    id?: string,
    name: string,
    status?: string,
    created_at?: Date,
    detonated_at?: Date,
    latitude?: number,
    longitude?: number,
}

export enum Status {
    manufactured = 0,
    assembled = 1,
    shipped = 2,
    deployed = 3,
    detonated = 4,
}