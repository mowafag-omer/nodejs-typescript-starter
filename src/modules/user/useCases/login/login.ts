import { UserRepo } from "../../userRepo";
import { userProps } from "../../userTypes";
import argon2 from 'argon2'
import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from "../../../../constant";


export class Login {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute(props: userProps) {

    try {
      const user = await this.userRepo.getUserByEmail(props.email)
      console.log(user);
      
      if(!user){
        return {
          success: false, 
          message: 'incorrect email or password'
        }
      }
      
      const checkPass = await argon2.verify(user.password, props.password)

      if(!checkPass){
        return {
          success: false, 
          message: 'incorrect email or password'
        }
      }
        
      const token = jwt.sign({id: user.id }, PRIVATE_KEY)
      console.log(token);
      
      return {success: true, token}

    } catch (error) {
      return {
        success: false,
        message: error
      }
    }

  }
}