import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepository) {}

    createUser(userData: any) {
        return this.userRepo.create(userData);
    }

    getAllUsers() {
        return this.userRepo.findAll();
    }
}
