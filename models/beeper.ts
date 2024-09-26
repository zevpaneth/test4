interface Beeper {
    id: string,
    name: string,
    status: Status,
    created_at: Date,
    detonated_at: Date,
    latitude: number,
    longitude: number,
}

enum Status {
    manufactured,
    assembled,
    shipped,
    deployed,
    detonated,
}