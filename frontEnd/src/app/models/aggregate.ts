import {Dispositivo} from '../models/dispositivos';
import {Cliente} from '../models/cliente';
export interface Aggregate {
    createdAt?: string,
    cantidad: number,
    dispositivo: string,
    _id: string
    }