import { IsEmail, Length } from "class-validator";
import {
    Entity as TOENTITY,
    Column,
     Index,
    BeforeInsert
    } from "typeorm";
import bcrypt from 'bcrypt'
import {Exclude} from 'class-transformer'
import Entity from './Entity'
@TOENTITY('users')
export default  class User extends Entity{
    constructor(user:Partial<User>){
        super()
        Object.assign(this,user)
    }


    @Index()
    @IsEmail()
    @Column({unique:true})
    email: string;


    @Index()
    @Length(3,255,{message:'Username must be atleast 3 characters long'})
    @Column({unique:true})
    username: string;


    @Exclude()
    @Column()
    @Length(6,255)
    password: string;



    @BeforeInsert()
    async hashPassword(){
      this.password = await bcrypt.hash(this.password,6)
    }
 
    
    
}


