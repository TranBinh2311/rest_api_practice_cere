import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from 'src/filter/http-error.filter';
import { LoggingInterceptor } from 'src/filter/logging.interceptor';

@Module({
  controllers: [UsersController],
  providers: [UsersService ]
})
export class UsersModule {}
