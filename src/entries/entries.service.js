"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entry_entity_1 = require("./entities/entry.entity");
let EntriesService = class EntriesService {
    entryRepository;
    constructor(entryRepository) {
        this.entryRepository = entryRepository;
    }
    async create(createEntryDto) {
        if (!createEntryDto.categoryId) {
            throw new common_1.NotFoundException('Category ID is required');
        }
        const entry = this.entryRepository.create({
            title: createEntryDto.title,
            amount: createEntryDto.amount,
            category: { id: createEntryDto.categoryId },
        });
        return this.entryRepository.save(entry);
    }
    findAll() {
        return this.entryRepository.find({ relations: ['category'] });
    }
    async findOne(id) {
        const entry = await this.entryRepository.findOne({
            where: { id },
            relations: ['category'],
        });
        if (!entry) {
            throw new common_1.NotFoundException(`Entry with id ${id} not found`);
        }
        return entry;
    }
    async update(id, updateEntryDto) {
        await this.entryRepository.update(id, {
            ...updateEntryDto,
            ...(updateEntryDto.categoryId && {
                category: { id: updateEntryDto.categoryId },
            }),
        });
        return this.findOne(id);
    }
    async remove(id) {
        await this.entryRepository.delete(id);
    }
};
exports.EntriesService = EntriesService;
exports.EntriesService = EntriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entry_entity_1.Entry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntriesService);
//# sourceMappingURL=entries.service.js.map