import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
  ignoreTLS: true,
});

export const sendTestEmail = async () => {
  await transporter.sendMail({
    from: '"MyApp" <no-reply@myapp.com>',
    to: 'test@test.com',
    subject: 'MailDev Test',
    html: '<h1>Hello from MailDev</h1>',
  });
};