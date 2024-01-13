import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Users, Prisma} from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUsers(): Promise<Users[]> {
    return await this.prisma.users.findMany();
  }

  async findUserById(id: string): Promise<Users>{
    return await this.prisma.users.findUnique({
      where: {id}
    });
  }

  async findUserByEmail(email: string): Promise<Users>{
    return await this.prisma.users.findUnique({
      where: {email}
    });
  }

  async createUser(data: Prisma.UsersCreateInput): Promise<Users>{
    const salt = 10;  
    const hashPassword = await bcrypt.hash(data.password, salt);

    return await this.prisma.users.create({
      data: {
        ...data,
        password: hashPassword
      }
    });
  }

  async updateUserById(id: string, data: Prisma.UsersUpdateInput): Promise<Users>{
    return await this.prisma.users.update({
      where: {id},
      data
    });
  }

  async updateUserByEmail(email: string, data: Prisma.UsersUpdateInput): Promise<Users>{
    return await this.prisma.users.update({
      where: {email},
      data
    });
  }

  async updateUserPassword(id: string, data: Prisma.UsersUpdateInput): Promise<Users>{
    const salt = 10;  
    const hashPassword = await bcrypt.hash(data.password, salt);

    return await this.prisma.users.update({
      where: {id},
      data: {
        ...data,
        password: hashPassword
      }
    });
  }

  async deleteUser(id: string): Promise<Users>{
    return await this.prisma.users.delete({
      where: {id}
    });
  }
}
