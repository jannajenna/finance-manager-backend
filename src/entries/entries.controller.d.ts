import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
export declare class EntriesController {
    private readonly entryService;
    constructor(entryService: EntriesService);
    create(createEntryDto: CreateEntryDto): Promise<import("./entities/entry.entity").Entry>;
    findAll(): Promise<import("./entities/entry.entity").Entry[]>;
    findOne(id: string): Promise<import("./entities/entry.entity").Entry>;
    update(id: string, updateEntryDto: UpdateEntryDto): Promise<import("./entities/entry.entity").Entry>;
    remove(id: string): Promise<void>;
}
