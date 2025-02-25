import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUserDto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  //backend.com.br/users

  @Get() async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  //backend.com.br/users/:id

  @Get(":id") async getUser(@Param("id") id: string) {
    return this.usersService.getUser(parseInt(id));
  }

  @Post() async createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.createUser(CreateUserDto);
  }

  @Put() async updateUser(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.updateUser(CreateUserDto);
  }

  @Delete() async deleteUser(@Body() CreateUserDto: CreateUserDto) {
    //Enviar apenas username a partir do create user dto

    const username = CreateUserDto.username;
    return this.usersService.deleteUser(username);
  }
}
