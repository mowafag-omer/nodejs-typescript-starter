import { UserRepo } from "../../userRepo";
import { userProps } from "../../userTypes";
import argon2 from 'argon2'

export class CreateUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute(props: userProps) {

    try {
      const userAlreadyExists = await this.userRepo.exists(props.email)

      if(userAlreadyExists) {
        return {
          success: false, 
          message: 'User already exists'
        }
      }

      const hashPassword = await argon2.hash(props.password)
      props.password = hashPassword

      await this.userRepo.create(props)
      return {success: true}

    } catch (error) {
      return {
        success: false,
        message: error
      }
    }

  }
}