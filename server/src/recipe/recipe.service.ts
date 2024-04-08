import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {

  constructor(private readonly prisma:PrismaService){}

  async create(createRecipeDto: CreateRecipeDto) {

    const reciptr  = await this.prisma.recipe.findFirst({
      where: {
        title: createRecipeDto.title
      }
    })

    if(reciptr){
      throw new HttpException('Такой рецепт уже есть' , HttpStatus.BAD_REQUEST)
    }

    return await this.prisma.recipe.create({
      data: createRecipeDto
    });
  }

  async findAll() {
    return await this.prisma.recipe.findMany();
  }

  // async findOne(id: number) {
  //   return `This action returns a #${id} recipe`;
  // }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return await this.prisma.recipe.update({
      where:{id},
      data: updateRecipeDto
    });
  }

  async remove(id: number) {
    return await this.prisma.recipe.delete({
      where: {id}
    });
  }
}
