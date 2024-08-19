import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const request = await req.json();

  return NextResponse.json(
    { error: false, emailSent: true, errors: [], response: [] },
    { status: 200 },
  );

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: request.email, // sender address
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO, // list of receivers
    subject: `Contact`, // Subject line
    text: request.message, // plain text body
    html: `<div>${request.message}</div>`, // html body
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 },
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json({ error: true, emailSent: false, errors: [error] }, { status: 500 });
    });
}
