import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'heather',
      password: '1234',
      database: 'swim',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
