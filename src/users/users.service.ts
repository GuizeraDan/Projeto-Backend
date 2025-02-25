import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User, Prisma } from "@prisma/client";
import { CreateUserDto } from "./dto/CreateUserDto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    console.log(data);
    return this.prisma.user.create({
      data: { username: data.username, password: data.password },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async updateUser(data: CreateUserDto, id: number): Promise<User | null> {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: { username: data.username, password: data.password },
    });
  }

  async deleteUser(username: string): Promise<User | null> {
    return this.prisma.user.delete({
      where: {
        username: username,
      },
    });
  }
}
