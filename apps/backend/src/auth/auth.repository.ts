import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { LoginDto } from './dto/auth.dto.ts';

@Injectable()
export class AuthRepository {
    private table = 'users';
    
    async function login(loginData: LoginDto){
        const { email, password } = loginData;
    }
}
