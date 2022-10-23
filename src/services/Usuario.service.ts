import { IUsuario } from './interfaces/IUsuario.interface';
import { UserDto } from '../entities/dto/UserDto';
import { User } from '../entities/User';
import { findById, actualizar, existeUsuario, listAll, desactivar,registrar } from '../repositories/User.Repository';
import { MessageResponse } from '../entities/dto/GeneralDto'


class UsersService implements IUsuario {

    async test(): Promise<MessageResponse> {
        const res: MessageResponse = { success: false, message: "Hola Mundo!", code: 0 };
        return res;
    }

    async list(): Promise<MessageResponse> {
        const res: MessageResponse = { success: false, message: "Error de obtencion de datos", code: 0 };
        try {
            let query = await listAll();
            res.data = query.data;
            res.success = true;
            res.message = "Obtención exitosa";
            res.total = query.count || 0;
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }

        return res;
    }

    async edit(id: string, userDto: UserDto): Promise<MessageResponse> {
        const res: MessageResponse = { success: false, message: "Error de registro", code: 0 };
        try {
            const user = new User(userDto);
            const userDtoFind = await findById(id);

            if (userDtoFind ) {
                res.success = true;
                res.message = "usuario actualizado!";
                await actualizar(id, userDto);
                res.data = userDto;
            } else {
                res.message = "Usuario no encontrado";
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res;
    }

    async create(userDto: UserDto): Promise<MessageResponse> {
        const res: MessageResponse = { success: false, message: "Error de registro", code: 0 };
        try {
            const usuario = new User(userDto);
            res.success = true;
            res.message = "Rol registrado";
            const oUsuario = await registrar(usuario);
            res.data = oUsuario;

        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res;
    }

    async desactivar(idUser: string): Promise<MessageResponse> {
        const res: MessageResponse = { success: false, message: "Error de eliminación", code: 0 };
        try {
            const userDtoFind = await findById(idUser);
            if (userDtoFind) {
                res.success = true;
                res.message = "Usuario eliminado";
                await desactivar(idUser);

            } else {
                res.message = "Usuario no encontrado!";
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res;
    }

    
}

export default new UsersService();