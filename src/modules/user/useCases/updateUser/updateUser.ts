//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";
import { userProps } from "../../userTypes";

export class UpdateUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async execute(id: number, props: userProps) {
    return await this.userRepo.update(id, props);
  }
}
