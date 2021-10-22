
import { Global } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { EnumUserRole } from "./enum-role.dto";

@Global()
export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      default: "username",
      description: "Value must be string"
  })
  readonly username : string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      default: "password",
      description: "Value must be string"
  })
  readonly password: string;


  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
      default: 20,
      description: "Value must be number"
  })
  readonly age: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({
      default: "Introduce user",
      description: "Value must be number"
  })
  readonly description?: string;

  
  @IsEnum(EnumUserRole)
  @IsNotEmpty()
  @ApiProperty({
      default: "USER",
      description: "Value must be one of two value in ENUM"
  })
  readonly role: EnumUserRole;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
      default: "1999-11-23T00:00:00.000Z",
      description: "Value must be true type"
  })
  readonly birthdate?: string;
}

