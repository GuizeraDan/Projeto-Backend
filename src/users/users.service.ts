import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: {
    username: string;
    password: string;
  }): Promise<User> {
    const senhaCriptografada = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { username: data.username, password: senhaCriptografada },
    });
  }
}
