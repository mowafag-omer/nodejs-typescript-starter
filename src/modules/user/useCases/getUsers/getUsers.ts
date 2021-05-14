import { UserRepo } from "../../userRepo";

export class GetUsers {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public async execute() {
    return await this.userRepo.getAll()
  }
}