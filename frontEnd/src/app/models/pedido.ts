import {Dispositivo} from '../models/dispositivos';
import {User} from '../models/user';
export interface Pedidos {
    createdAt?: string,
    cantidad: number | null,
    total: number,
    fecha_p: string,
    fecha_e: string,
    dispositivo: Dispositivo | null,
    user: User | null,
    estado: string,
    updatedAt?: string,
    _id: string
    }