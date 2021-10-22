import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/validaton/validation.pipe';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({
    status: 201,
    description: 'Create Product'
  })
  @Post()
  create(@Body(new ValidationPipe) createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get All Product'
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get Product by ID'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }


  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Update Product'
  })
  update(@Param('id') id: string, @Body(new ValidationPipe) updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
    description: 'Remove/Detele Product'
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
