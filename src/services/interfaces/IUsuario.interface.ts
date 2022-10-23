import {MessageResponse} from '../../entities/dto/GeneralDto';

export interface IUsuario {
    test: () => Promise<any>;
    list: ()=> Promise<MessageResponse>;
    edit: (id: string, userDto: any) => Promise<MessageResponse>;
    create: (userDto: any) => Promise<MessageResponse>;
    desactivar: (usuario:string) => Promise<MessageResponse>;
}