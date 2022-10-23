import { DeleteResult, EntityRepository, Repository, UpdateResult } from "typeorm";
import { User } from "../entities/User";
import { UserDto } from "../entities/dto/UserDto"
import {MongoDataSource} from "../configs/db";
import { ListPaginate } from "../entities/dto/GeneralDto";
import { ObjectID } from "mongodb";

const userRepository = MongoDataSource.getRepository(User);

export async function findByDto (params: UserDto): Promise<User[]>{
    let options={}
    options={...params}
    const [result,total] = await userRepository.findAndCount(options);
    
    return result;
};

export async function findById (params: string): Promise<User | null>{
    const result = await userRepository.findOneById(params);
    return result
};
 
export async function desactivar (userId: string){
    const firstUser = await userRepository.delete(userId);
    return firstUser;
};
 
export async function actualizar (userId:string, param: UserDto){
    let options={}
    options={userId}
    const firstUser = await userRepository.update(options,param);
    return firstUser;
};
 
export async function registrar ( param: UserDto){
    const firstUser = await userRepository.save(param);
    return firstUser;
};
 
 
export async function existeUsuario (params: UserDto): Promise<User|null>{    
    let options={}
    options={
        where:{user:params}}
    const result = await userRepository.findOne(options);
    return result
};

export async function listAll (): Promise<ListPaginate>{
    const [result,total] = await userRepository.findAndCount();
    
    return {
        data: result,
        count: total
    }
};

