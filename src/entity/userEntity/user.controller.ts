/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UsersService){}
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getUserById(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

}
