import {Dispositivo} from '../models/dispositivos';
import {User} from '../models/user';
export interface Pedidos {
    createdAt?: string,
    cantidad: number,
    total: number,
    fecha_p: Date,
    fecha_e: Date,
    dispositivo: Dispositivo | null,
    user: User | null,
    updatedAt?: string,
    _id: string
    }