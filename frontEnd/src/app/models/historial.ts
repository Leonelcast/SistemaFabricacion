import {User} from '../models/user';

export interface Historial {
    createdAt?: string,
    accion:String,
    fecha:Date|null,   
    user: String| null,
    updatedAt?: string,
    _id?: string
    }