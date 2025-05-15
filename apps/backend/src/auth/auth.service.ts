import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { LoginDto } from './dto/auth.dto.ts';


@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository)

    async login(loginData: LoginDto){
        const user = await.this.authRepository.login(loginData);
        return user;
    }
}
