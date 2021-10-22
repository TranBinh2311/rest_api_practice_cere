import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './filter/http-error.filter';
import { LoggingInterceptor } from './filter/logging.interceptor';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService ,{
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }, 
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
    ],
})
export class AppModule {}
