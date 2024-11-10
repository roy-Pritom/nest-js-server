import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Correct path
import { User, CreateUserDto, UpdateUserDto } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async createUser(data: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async getUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async updateUserName(id: number, updateData: UpdateUserDto): Promise<User> {
        return this.prisma.user.update({
            where: { id },
            data: updateData,
        });
    }
}
