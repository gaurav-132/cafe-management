import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [UsersModule, UserModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
