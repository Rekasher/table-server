import {Module} from '@nestjs/common';
import {TableModule} from './modules/table/table.module';
import {DatabaseModule} from './db/database.module';

@Module({
  imports: [DatabaseModule, TableModule],
})
export class AppModule {
}
