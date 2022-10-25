import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto';

@Controller('user-service')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  get(
    @Query('page') page = process.env.PAGE_NUMER,
    @Query('limit') limit = process.env.PAGE_LIMIT
  ) {
    return this.userService.get({ page: +page, limit: +limit });
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.userService.findOneBy({
      userId: +id
    } as unknown as CreateUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.patch(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
