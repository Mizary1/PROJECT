import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileService } from 'src/file/file.service';

@Injectable()
export class ProductService {

  constructor(private readonly prisma:PrismaService,
              private readonly file:FileService){}

  async create(createProductDto: CreateProductDto , image) {

    const exist = await this.prisma.product.findMany({
      where:{
        title: createProductDto.title
      }
    })

    const filePath = await this.file.createFile(image, createProductDto.title)
    
    const data = {
      title: createProductDto.title,
      description: createProductDto.description,
      price: +createProductDto.price,
      img: filePath
    }

    return await this.prisma.product.create({data});
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where:{
        id
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({where: {id}});
  }
}
