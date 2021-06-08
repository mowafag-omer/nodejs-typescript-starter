//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";
import { studentProps } from "../../studentTypes";

export class UpdateStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async execute(id: number, props: studentProps) {
    return await this.studentRepo.update(id, props);
  }
}
