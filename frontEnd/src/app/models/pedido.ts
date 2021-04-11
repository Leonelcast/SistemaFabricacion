import {Dispositivo} from '../models/dispositivos';
import {Cliente} from '../models/cliente';
export interface Pedidos {
    createdAt?: string,
    cantidad: number | null,
    total: number,
    fecha_p: string,
    fecha_e: string,
    dispositivo: Dispositivo | null,
    cliente: Cliente | null,
    estado: string,
    updatedAt?: string,
    _id: string
    }