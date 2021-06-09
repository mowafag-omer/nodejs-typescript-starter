import { IsDefined, IsEmail } from 'class-validator'
import { AbstractDto } from '../../../../common/abstractDto'

interface IRequestLoginDto {
  email: string;
  password: string;
}

export class RequestLoginDto extends AbstractDto implements IRequestLoginDto {

  @IsEmail()
  @IsDefined({ message: 'Email is required !'})
  public email: string

  @IsDefined({ message: 'Password is required !'})
  public password: string

  constructor(props: IRequestLoginDto) {
    super()
    
    this.email = props.email
    this.password = props.password
  }
}