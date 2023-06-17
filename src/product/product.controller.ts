import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { string } from "@hapi/joi";

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ){}


  @Post('/create')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.registerProduct(createProductDto);

  }
  // async createProduct(
  //   @Body('name') name: string,
  //   @Body('desc') desc: string,
  //   @Body('price') price: number,
  //
  // ){
  //
  // }

  @Get('/all')
  async getAllProducts(){
    return await this.productService.getAllProducts();
  }

  @Get('/:id')
  async getDetailProduct(@Param('id') id: number){
    return await this.productService.getDetailProduct(id);


  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number){
    return await  this.productService.deleteProduct(id);

  }

}
