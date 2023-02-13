import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('users')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    async getUsers() {
        return this.userService.findAll().then(res=>{
            return res;
        }).catch(err=>{
            console.log(err);
            return 'No Users available.'
        })
    }

    @Post()
    async createUser(@Body() userDTO: any) {
        return this.userService.create(userDTO).then(res=>{
            return 'Done';
        }).catch(err=>{
            console.log(err);
            return 'Cant create user.'
        })
    }


    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() userDTO: any) {
        return await this.userService.update(id, userDTO).then(res=>{
            return 'Updated';
        }).catch(err=>{
            console.log(err)
            return 'Cant update user.'
        });
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.delete(id).then(res=>{
            return 'Deleted'
        }).catch(err=>{
            console.log(err);
            return 'Cant Delete user.'
        });
    }


    @Get(':id')
    async getUser(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

}