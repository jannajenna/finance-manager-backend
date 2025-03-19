import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'data.source';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    CategoryModule,
    EntriesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
