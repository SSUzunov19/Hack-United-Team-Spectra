import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [AuthModule,UsersModule, LocationsModule],
  providers: [PrismaService],
})
export class AppModule {}
