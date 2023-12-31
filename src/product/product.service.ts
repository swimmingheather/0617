import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { string } from "@hapi/joi";

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product> // 프로덕트 테이블 의미
  ) {}

  async registerProduct(createProductDto: CreateProductDto){
    const newProduct = await this.productRepo.create(createProductDto);
    await  this.productRepo.save(newProduct);
    return {
      success:true,
      product: newProduct,
    };
  }

  async getAllProducts(){
    const products = await this.productRepo.find();
    return {
      products,
      count: products.length
    };
  }


  async getDetailProduct(id: number){
    const product = await this.productRepo.findOneById(id);
    return product;
  }


  async deleteProduct(id: number){
    const deleted = await this.productRepo.delete(id);
    return 'deleted';
  }



}
