import { ApiProperty, ApiResponse } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        default: 0,
        description:" Value is must be number"
    })
    readonly userId: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        default: "Name of Profuct",
        description:" Value is must be string"
    })
    readonly name : string

    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    @IsOptional()
    @ApiProperty({
        default: "Name of Profuct",
        description:" Value is must be string"
    })
    readonly desciption: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        default: 0,
        description:" Price of product is must be number"
    })
    readonly price: number

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    @ApiProperty({
        default: false,
        description:" true or false?"
    })
    readonly pulished ?: boolean 
}
