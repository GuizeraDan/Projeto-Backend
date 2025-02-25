import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { CreateUserDto } from './dto/CreateUserDto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const senhaCriptografada = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { username: data.username, password: senhaCriptografada },
    });
  }

  async getAllUsers(){}
  
  async getUser(id: number) {}

  async updateUser(data: CreateUserDto) {}

  async deleteUser(username: string){}
}
