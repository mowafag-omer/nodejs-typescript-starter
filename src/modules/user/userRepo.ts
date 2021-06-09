import { userProps } from "./userTypes";

export class UserRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async create(userProps: userProps) {
    const UserEntity = this.entities.User

    const exists = await this.exists(userProps.email);

    if (!exists) {
      await UserEntity.create(userProps).save()
    }

    return
  }

  public async exists(email: string): Promise<boolean> {
    const UserEntity = this.entities.User;

    const result = await UserEntity.findOne({ email: email })

    return !!result
  }

  public async getUserByEmail(email: string): Promise<any> {
    const UserEntity = this.entities.User;

    const result = await UserEntity.findOne({ email: email })
    
    return result
  }

  public async getAll() {
    const UserEntity = this.entities.User;

    return await UserEntity.find();
  }

  public async get(id: number) {
    const UserEntity = this.entities.User;

    return await UserEntity.findOne({id});
  }

  public async update(id: number, userProps: userProps) {
    const UserEntity = this.entities.User;
    const userToUpdate = await UserEntity.findOne({id});

    userToUpdate.email= userProps.email
    userToUpdate.password= userProps.password
    
    return await UserEntity.save(userToUpdate);
  }

  public async delete(id: number) {
    const UserEntity = this.entities.User;

    const userToDelete = await UserEntity.findOne({id});
    
    return await UserEntity.remove(userToDelete);
  }
}
