import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from '../../db/table-entity/table-entity';
import { DeepPartial, Repository } from 'typeorm';
import { pagination } from './constants';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  async create(data: DeepPartial<Table>) {
    try {
      const row = this.tableRepository.create(data);
      return await this.tableRepository.save(row);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async get(page: number): Promise<[Table[], number]> {
    try {
      const take = pagination.take;
      const skip = (page - 1) * take;
      return await this.tableRepository.findAndCount({
        skip,
        take,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async update(id: number, data: DeepPartial<Table>) {
    try {
      return await this.tableRepository.update(id, data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async delete(id: number) {
    try {
      return await this.tableRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
