import {Dispositivo} from '../models/dispositivos';
import {Cliente} from '../models/cliente';
import {Pedidos} from '../models/pedido';


export interface Serie {
        num_serie:string,
        estado:string,
        updatedAt?: string,
        createdAt?: string,
        _id:string,
        cliente?: Cliente | null,
        dispositivo: Dispositivo | null,
        pedido: Pedidos | null


        
        }

