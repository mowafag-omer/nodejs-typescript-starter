import { StudentRepo } from "../../studentRepo";

export class DeleteStudent {
  private studentRepo: StudentRepo

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo
  }

  public async execute(id: number) {
    return await this.studentRepo.delete(id)
  }
}