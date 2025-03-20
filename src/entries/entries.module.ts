import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';
import { EntriesController } from './entries.controller';
import { CategoryModule } from '../category/category.module';
import { Category } from '../category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry, Category]), CategoryModule],
  controllers: [EntriesController],
  providers: [EntriesService],
})
export class EntriesModule {}
