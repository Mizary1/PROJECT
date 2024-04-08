import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {


  constructor(private readonly prisma:PrismaService){}

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({data:createOrderDto});
  }

 async findAll() {
    return await this.prisma.order.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.order.findMany({
      where:{
        userId: id
      }
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id }, 
      data: updateOrderDto 
    });
  }
  

  async remove(id: number) {
    return await this.prisma.order.delete({where: {id}});
  }
}
