import {Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn, OneToOne, JoinColumn,ManyToOne, BaseEntity, Index } from 'typeorm';
import { ObjectID } from 'mongodb';
import { UserDto } from './dto/UserDto';

@Entity('User')
export class User{
    
    @ObjectIdColumn()
    public id: ObjectID;

    @Column()
    @Index({ unique: true })
    username:string;

    @Column()
    nombre:string;

    @Column()
    password:string;

    @CreateDateColumn()
    fechaRegistro:Date

    @Column()
    fechaModificacion:Date
    
    constructor(params: UserDto = {} as UserDto){
        this.username=params.username;
        this.password=params.password;
        this.nombre=params.nombre;
        
    }
}