import {Dispositivo} from '../models/dispositivos';
import {Cliente} from '../models/cliente';
export interface Pedidos {
    createdAt?: string,
    cantidad: number ,
    total?: number| null,
    fecha_p: Date | null,
    fecha_e: Date | null,
    dispositivo: Dispositivo | null,
    cliente?: Cliente | null,
    estado: string | null,
    updatedAt?: string,
    _id: string,
    num_serie: any[] 
    }