import { StudentRepo } from "../../studentRepo";
import { studentProps } from "../../studentTypes";

export class CreateStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo
  }

  public async execute(props: studentProps) {
    return await this.studentRepo.create(props)
  }
}