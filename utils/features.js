//
//
//
//
//
//________ 61. Saving JWT in Cookie ________
//
//
//
//
//
//

// // 3: export const sendToken = (user, res, message, statusCode) => {
// export const sendToken = (user, res, message, statusCode) => {
//   // 3: OVDE CEMO NALEPITI NAS 'token' i res.status(200) CEO DO KRAJA (.json):

//   // 3: const token = user.generateToken();
//   const token = user.generateToken();

//   // 3: res
//   res
//     // 3: .status(statusCode)
//     .status(statusCode)
//     // 3: .cookie('token', token, {
//     .cookie('token', token, {
//       // 3: expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     })
//     // 3:  .json({
//     .json({
//       // 3:  success: true,
//       success: true,
//       // 3: message: message,
//       message: message,
//       //N 3:  token, IDEMO u user.js(controllers)
//       token,
//     });
// };

//
//
//
//
//
//________ 63. Get My Profile ________
//
//
//
//
//
//

// export const sendToken = (user, res, message, statusCode) => {
//   const token = user.generateToken();
//   res
//     .status(statusCode)
//     .cookie('token', token, {
//       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     })
//     .json({
//       success: true,
//       message: message,
//       // 2: (KRAJ!) BRISEMO ZAKOMENTARISE OVAJ 'token':
//       // token,
//     });
// };

//
//
//
//
//
//________ 64. Cookie Options ________
//
//
//
//
//
//

// export const sendToken = (user, res, message, statusCode) => {
//   const token = user.generateToken();
//   res
//     .status(statusCode)
//     .cookie('token', token, {
//       // 2:(KRAJ!) ...cookieOptions,
//       ...cookieOptions,
//       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     })
//     .json({
//       success: true,
//       message: message,
//     });
// };

// // 1: export const cookieOptions = {
// export const cookieOptions = {
//   // 1: secure: process.env.NODE_ENV === 'Development' ? true : false,
//   secure: process.env.NODE_ENV === 'Development' ? true : false,
//   // 1:  httpOnly: process.env.NODE_ENV === 'Development' ? true : false,
//   httpOnly: process.env.NODE_ENV === 'Development' ? true : false,
//   //G 1: sameSite: process.env.NODE_ENV === 'Development' ? true : 'none',
//   sameSite: process.env.NODE_ENV === 'Development' ? true : 'none',
// };

//
//
//
//
//
//________ 67. Setting Up Multer ________
//
//
//
//
//
//

// //N 4: export const getDataUri = () => {};  IDEMO u user.js(controllers)
// export const getDataUri = () => {};

// export const sendToken = (user, res, message, statusCode) => {
//   const token = user.generateToken();
//   res
//     .status(statusCode)
//     .cookie('token', token, {
//       ...cookieOptions,
//       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     })
//     .json({
//       success: true,
//       message: message,
//     });
// };

// export const cookieOptions = {
//   secure: process.env.NODE_ENV === 'Development' ? true : false,
//   httpOnly: process.env.NODE_ENV === 'Development' ? true : false,
//   sameSite: process.env.NODE_ENV === 'Development' ? true : 'none',
// };

//
//
//
//
//
//________ 68. Uploading On Cloudinary ________
//
//
//
//
//
//

// // 4: MORA! '.js': import DataUriParser from 'datauri/parser.js';
// import DataUriParser from 'datauri/parser.js';
// // 4: import path from 'path';
// import path from 'path';

// // 4: DODAJEMO: file: export const getDataUri = (file) => {};
// export const getDataUri = file => {
//   // 4: const parser = new DataUriParser();
//   const parser = new DataUriParser();

//   // 4: const extName = path.extname(file.originalname).toString();
//   const extName = path.extname(file.originalname).toString();

//   //N 4: return parser.format(extName, file.buffer);  IDEMO u user.js(controllers)
//   return parser.format(extName, file.buffer);
// };

// export const sendToken = (user, res, message, statusCode) => {
//   const token = user.generateToken();
//   res
//     .status(statusCode)
//     .cookie('token', token, {
//       ...cookieOptions,
//       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     })
//     .json({
//       success: true,
//       message: message,
//     });
// };

// export const cookieOptions = {
//   secure: process.env.NODE_ENV === 'Development' ? true : false,
//   httpOnly: process.env.NODE_ENV === 'Development' ? true : false,
//   sameSite: process.env.NODE_ENV === 'Development' ? true : 'none',
// };

//
//
//
//
//
//________ 71. Sending Email API ________
//
//
//
//
//
//

import DataUriParser from 'datauri/parser.js';
import path from 'path';
// 2: import { createTransport } from 'nodemailer';
import { createTransport } from 'nodemailer';

export const getDataUri = file => {
  const parser = new DataUriParser();

  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export const sendToken = (user, res, message, statusCode) => {
  const token = user.generateToken();
  res
    .status(statusCode)
    .cookie('token', token, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message: message,
      role: user.role,
    });
};

export const cookieOptions = {
  secure: process.env.NODE_ENV === 'Development' ? true : false,
  httpOnly: process.env.NODE_ENV === 'Development' ? true : false,
  sameSite: process.env.NODE_ENV === 'Development' ? true : 'none',
};

// 2: export const sendEmail = async(subject, to, text) => {
export const sendEmail = async (subject, to, text) => {
  // 2: const transporter = createTransport({});
  const transporter = createTransport({
    // 4:  host: process.env.SMTP_HOST,
    host: process.env.SMTP_HOST,
    // 4:  port: process.env.SMTP_PORT,
    port: process.env.SMTP_PORT,
    // 4: auth: {
    auth: {
      // 4: user: process.env.SMTP_USER,
      user: process.env.SMTP_USER,
      //N 4: pass: process.env.SMTP_PASS,  IDEMO u user.js(controllers)
      pass: process.env.SMTP_PASS,
    },
  });

  // 2: await transporter.sendMail({
  await transporter.sendMail({
    // 2: to,
    to,
    // 2: subject,
    subject,
    // 2: text,
    text,
  });

  //N 2: SAD IDEMO NA LINK:'https://mailtrap.io/inboxes/2458014/messages' i OBELEZICEMO u 'Integrations': 'Nodemailer'i DOBICEMO:
  /*

  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e1ee7e9d8df115",
    pass: "2dc191f862fe30"
  }

  IDEMO u config.env(data)
  */
};
