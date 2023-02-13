import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoginController } from './login/login.controller';
import { TestMiddleware } from './test.middleware';
import { TestController } from './test/test.controller';
import { UserModule } from './users/user.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/xcrosoft'), UserModule],
  controllers: [AppController, LoginController, TestController],
  providers: [AppService],
})
export class AppModule{}
//  implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(TestMiddleware,).forRoutes('*')
//   }
// }