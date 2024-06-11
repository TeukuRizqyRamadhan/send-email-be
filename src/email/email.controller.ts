import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @Post()
  async create(@Body() createEmailDto: CreateEmailDto) {
    const { to, subject, text } = createEmailDto;
    return this.emailService.sendMail(to, subject, text);
  }
}
