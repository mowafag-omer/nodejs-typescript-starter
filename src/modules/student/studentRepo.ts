import { studentProps } from "./studentTypes";

export class StudentRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async create(studentProps: studentProps) {
    const StudentEntity = this.entities.Student;

    return await StudentEntity.create({
      firstName: studentProps.firstName,
      lastName: studentProps.lastName,
      user: studentProps.user,
    }).save();
  }

  public async getAll() {
    const StudentEntity = this.entities.Student;

    return await StudentEntity.find();
  }

  public async get(id: number) {
    const StudentEntity = this.entities.Student;

    return await StudentEntity.findOne({id});
  }

  public async update(id: number, studentProps: studentProps) {
    const StudentEntity = this.entities.Student;
    const studentToUpdate = await StudentEntity.findOne({id});

    studentToUpdate.firstName= studentProps.firstName
    studentToUpdate.lastName= studentProps.lastName
    studentToUpdate.user= studentProps.user
    
    return await StudentEntity.save(studentToUpdate);
  }

  public async delete(id: number) {
    const StudentEntity = this.entities.Student;

    const studentToDelete = await StudentEntity.findOne({id});
    
    return await StudentEntity.remove(studentToDelete);
  }
}
