import { UserRepo } from "../../userRepo";

export class GetUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute(id: number) {
    return await this.userRepo.get(id)
  }
}