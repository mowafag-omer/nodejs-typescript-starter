import { StudentRepo } from "../../studentRepo";

export class GetStudents {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo
  }

  public async execute() {
    return await this.studentRepo.getAll()
  }
}