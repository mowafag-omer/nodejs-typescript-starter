import { UserRepo } from "../../userRepo";

export class DeleteUser {
  private userRepo: UserRepo

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute(id: number) {
    return await this.userRepo.delete(id)
  }
}