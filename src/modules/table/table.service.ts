import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from '../../db/table-entity/table-entity';
import { DeepPartial, Repository } from 'typeorm';
import { pagination } from './utils/constants';
import {SortType} from "./utils/types";

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

  async get(
    page: number,
    search?: string,
    sortField: keyof Table = 'id',
    sortOrder: 'ASC' | 'DESC' = 'ASC',
  ): Promise<[Table[], number]> {
    try {
      const take = pagination.take;
      const skip = (page - 1) * take;

      const allowedFields = ['id', 'name', 'code', 'date'] as const;
      if (!allowedFields.includes(sortField)) {
        throw new BadRequestException('Invalid sort field');
      }

      const queryBuilder = this.tableRepository.createQueryBuilder('table');

      if (search) {
        queryBuilder.where(
          'LOWER(table.name) LIKE :search OR ' +
          'CAST(table.code AS TEXT) LIKE :search OR ' +
          'CAST(table.date AS TEXT) LIKE :search',
          { search: `%${search.toLowerCase()}%` },
        );
      }

      queryBuilder
        .orderBy(`table.${sortField}`, sortOrder)
        .skip(skip)
        .take(take);

      const [result, count] = await queryBuilder.getManyAndCount();
      return [result, count];
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
