import { UserRepo } from "../../userRepo";
import { userProps } from "../../userTypes";

export class CreateUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute(props: userProps) {
    return await this.userRepo.create(props)
  }
}