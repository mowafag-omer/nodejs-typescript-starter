import { userProps } from "./userTypes";

export class UserRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async create(userProps: userProps) {
    const UserEntity = this.entities.User;

    return await UserEntity.create({
      firstName: userProps.firstName,
      lastName: userProps.lastName,
    }).save();
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

    userToUpdate.firstName= userProps.firstName
    userToUpdate.lastName= userProps.lastName
    
    return await UserEntity.save(userToUpdate);
  }

  public async delete(id: number) {
    const UserEntity = this.entities.User;

    const userToDelete = await UserEntity.findOne({id});
    
    return await UserEntity.remove(userToDelete);
  }
}
