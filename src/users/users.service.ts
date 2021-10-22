import { User } from '.prisma/client';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user_search = await this.prisma.user.findUnique(
      { where: { username: createUserDto.username } }
    )

    if (user_search) {
      throw new HttpException(
        "User has already exist",
        HttpStatus.BAD_REQUEST)
    }

    return await this.prisma.user.create({ data: createUserDto })
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: {
        product: false 
      }
    })
  }

  async findOne(id: number): Promise<User> {
    const user_search = await this.prisma.user.findUnique(
      { where: { id } ,
        include: {
          product: true
        }
      }
    )

    if (!user_search) {
      throw new NotFoundException();
    }

    return user_search;
  }


  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user_search = await this.prisma.user.findUnique(
      { where: { id } }
    )

    if (!user_search) {
      throw new NotFoundException();
    }

    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })


  }

  async remove(id: number): Promise<User> {
    const user_search = await this.prisma.user.findUnique(
      { where: { id } }
    )

    if (!user_search) {
      throw new NotFoundException();
    }
    return await this.prisma.user.delete({ where: { id } })
  }
}
