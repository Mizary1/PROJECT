import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { RequestModule } from './request/request.module';
import { RecipeModule } from './recipe/recipe.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FileModule } from './file/file.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
//asdваsdfвапывафыв
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '.', 'static'),
      serveRoot: '/files',
    }),
    FileModule,
    ProductModule,
    RequestModule,
    RecipeModule,
    OrderModule,
    AuthModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
