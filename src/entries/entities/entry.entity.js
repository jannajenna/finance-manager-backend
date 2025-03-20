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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../category/entities/category.entity");
let Entry = class Entry {
    id;
    title;
    amount;
    category;
};
exports.Entry = Entry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Entry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Entry.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Entry.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.entries, {
        nullable: false,
    }),
    __metadata("design:type", typeof (_a = typeof category_entity_1.Category !== "undefined" && category_entity_1.Category) === "function" ? _a : Object)
], Entry.prototype, "category", void 0);
exports.Entry = Entry = __decorate([
    (0, typeorm_1.Entity)()
], Entry);
//# sourceMappingURL=entry.entity.js.map