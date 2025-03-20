import { Repository } from 'typeorm';
import { Entry } from './entities/entry.entity';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
export declare class EntriesService {
    private entryRepository;
    constructor(entryRepository: Repository<Entry>);
    create(createEntryDto: CreateEntryDto): Promise<Entry>;
    findAll(): Promise<Entry[]>;
    findOne(id: number): Promise<Entry>;
    update(id: number, updateEntryDto: UpdateEntryDto): Promise<Entry>;
    remove(id: number): Promise<void>;
}
