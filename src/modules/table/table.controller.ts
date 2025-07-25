import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TableService } from './table.service';
import { Table } from '../../db/table-entity/table-entity';
import { DeepPartial } from 'typeorm';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post('create')
  async create(@Body() data: DeepPartial<Table>) {
    try {
      return this.tableService.create(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get('get')
  async getTable(@Query('page') page: number): Promise<[Table[], number]> {
    try {
      return this.tableService.get(page);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() data: DeepPartial<Table>) {
    try {
      return this.tableService.update(id, data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    try {
      return this.tableService.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
