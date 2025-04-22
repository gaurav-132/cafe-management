import { Injectable } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';

@Injectable()
export class UserRepository {
    private table = 'users';

    async create(user: any) {
        const { data, error } = await supabase.from(this.table).insert(user).select().single();
        if (error) throw error;
        return data;
    }

    async findAll() {
        const { data, error } = await supabase.from(this.table).select('*');
        if (error) throw error;
        return data;
    }

    async findById(id: string) {
        const { data, error } = await supabase.from(this.table).select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    }
}
