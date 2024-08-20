"use server";

// import nodemailer from "nodemailer";

import { z } from "zod";

import { contactFormSchema } from "@/lib/contact";

export async function contactAction(data: z.infer<typeof contactFormSchema>) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ error: false, success: true, errors: [], response: data });
    }, 1000),
  );

  // const transporter: nodemailer.Transporter = nodemailer.createTransport({
  //   host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.NEXT_PUBLIC_EMAIL_USER,
  //     pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  //   },
  // });

  // const mailOptions: nodemailer.SendMailOptions = {
  //   from: request.email, // sender address
  //   to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO, // list of receivers
  //   subject: `Contact`, // Subject line
  //   text: request.message, // plain text body
  //   html: `<div>${request.message}</div>`, // html body
  // };

  // return await transporter
  //   .sendMail(mailOptions)
  //   .then((response: nodemailer.SentMessageInfo) => {
  //     return { error: false, success: true, errors: [], response };
  //   })
  //   .catch((error: nodemailer.SentMessageInfo) => {
  //     return { error: true, success: false, errors: [error] };
  //   });
}
