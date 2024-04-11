import { Vol } from "./vols";

export interface Destination {
    _id?: string;
    nom_destination: string;
    description: string;
    image: string;
    vols: Vol;
}