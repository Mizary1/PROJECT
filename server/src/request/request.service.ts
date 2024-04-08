import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestService {

  constructor(private readonly prisma:PrismaService){}

  async create(createRequestDto: CreateRequestDto) {

   

    const newReq = await this.prisma.request.create({data: createRequestDto})

    return newReq ;
  }

  async findAll() {
    return await this.prisma.request.findMany();
  }



  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return await this.prisma.request.update({
      where:{
        id
      },
      data: updateRequestDto
    });
  }

  async remove(id: number) {
    return await this.prisma.request.delete({where: {id}});
  }
}
