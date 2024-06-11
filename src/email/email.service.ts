import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailersend.net',
      port: 587,
      auth: {
        user: 'MS_buwxbr@trial-jy7zpl9xz1pl5vx6.mlsender.net',
        pass: '3N0fkIwG0QZYZp9C',
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    try {
      const info = await this.transporter.sendMail({
        from: 'MS_buwxbr@trial-jy7zpl9xz1pl5vx6.mlsender.net',
        to,
        subject,
        text,
      });
      console.log('Email sent: ', info.response);
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email: ', error);
      return { success: false, message: 'Failed to send email' };
    }
  }
}
