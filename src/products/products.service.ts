import { Product } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService){}
  async create(createProductDto: CreateProductDto):Promise<Product> {
    return await this.prisma.product.create({ data: createProductDto })
  }

  async findAll() : Promise<Product[]>  {
    return await this.prisma.product.findMany({
    })
  }

  async findOne(id: number) : Promise<Product> {
    const pro_search = await this.prisma.product.findUnique(
      { where: { id } }
    )

    if (!pro_search) {
      throw new NotFoundException();
    }

    return pro_search;
  }

  async update(id: number, updateProductDto: UpdateProductDto) :Promise<Product> {
    const pro_search = await this.prisma.product.findUnique(
      { where: { id } }
    )

    if (!pro_search) {
      throw new NotFoundException();
    }

    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto
    })
  }

  async remove(id: number) : Promise<Product> {
    const pro_search = await this.prisma.product.findUnique(
      { where: { id } }
    )

    if (!pro_search) {
      throw new NotFoundException();
    }
    return await this.prisma.product.delete({ where: { id } })
  }
}
