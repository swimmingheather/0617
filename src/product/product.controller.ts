import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ){}


  @Post('/create')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.registerProduct(createProductDto);

  }

  @Get('/all')
  async getAllProducts(){
    return await this.productService.getAllProducts();
  }
}
