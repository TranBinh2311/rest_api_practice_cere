import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/validaton/validation.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiResponse({
    status: 201,
    description: 'Create User'
  })
  @Post()
  async create(@Body(new ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get All User'
  })
  async findAll( @Query() createUserDto: CreateUserDto) {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get User by ID'
  })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Update User'
  })
  async update(@Param('id') id: string, @Body(new ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
    description: 'Remove/Detele User'
  })
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
