import { MinLength, MaxLength, IsString, IsDefined, IsEmail } from 'class-validator'

interface IRequestCreateUserDto {
  email: string;
  password: string;
}

export class RequestCreateUserDto implements IRequestCreateUserDto {

  @IsEmail()
  @IsDefined({ message: 'Email is required !'})
  public email: string

  @IsDefined({ message: 'Password is required !'})
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  public password: string

  constructor(props: IRequestCreateUserDto) {
    this.email = props.email
    this.password = props.password
  }
}