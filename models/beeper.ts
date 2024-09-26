interface Beeper {
    name: string;
    status: Status;
    createdAt: Date;
    explosionAt: Date;
    LAT: number;
    LON: number;
}

enum Status {
    manufactured,
    assembled,
    shipped,
    deployed,
    detonated,
}