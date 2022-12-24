import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import config from 'config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    UsersModule,
    MongooseModule.forRoot(config().DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
