//
//
//
//
//
//____________ 50. Setting Up Backend ___________
//
//
//
//
//
//

// // 1: import express from 'express';
// import express from 'express';
// // 3: import { config } from 'dotenv';
// import { config } from 'dotenv';

// // 3: config({
// config({
//   //N 3: KREIRAMO NOVI FOLDER 'data' i u njega NOVI FAJL'config.env' i ovde kucamo:  path:'./data/config.env' i IDEMO u config.env
//   path: './data/config.env',
// });

// // 5: INSTALIRAMO u TERMINALU:'npm i -g nodemon'
// // 5:VAZNO: NESTO NECE A POLSE U KORAK 6. HOCE: POSLE KUCAMO U TERMINALU SAMO:'nodemon server.js'

// // 5: IDEMO U package.json i umesto "test": "echo \"Error: no test specified\" && exit 1" PISEMO (dev i start):
// /*
// "scripts": {
//     "dev": "Set NODE_ENV=development&& nodemon server.js",
//     "start": "Set NODE_ENV=production&& node server.js"
//   },
// */

// //N 5: IDEMO u server.js

// //N 1: export const app = express();  IDEMO u server.js
// export const app = express();

//
//
//
//
//
//____________ 51. Creating First Route ___________
//
//
//
//
//
//

// //  KREIRAMO NOVI FAJL:'user.js' u FOLDERU:'routes'

// // IDEMO u user.js(routes)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// // 2: app.get('/',(req,res,next)=>{
// app.get('/', (req, res, next) => {
//   // 2: I PISACE na linku:'http://localhost:5000/' 'Working' :res.send('Working');
//   res.send('Working');
// });

// // 2: Importing Routers here
// // 2: import user from './routes/user.js';
// import user from './routes/user.js';

// //N 2: app.use('/api/v1/user', user);  IDEMO u user.js
// app.use('/api/v1/user', user);

//
//
//
//
//
//____________ 52. Setting Up Database ___________
//
//
//
//
//
//

// // KREIRAMO NOVE FAJLOVE:'user.js', 'product.js', 'order.js u FOLDERU:'models'

// // KREIRAMO NOVI FAJL:'database.js' u FODLERU:'data'

// // IDEMO u user.js(models)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 53. Connecting To Atlas Cloud ________
//
//
//
//
//
//

// // IDEMO na LINK:"https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/clusters" i kliknemo na '+Create' i kreiramo:                         username: anessuljovic1                                                    password:anes123456

// // Uzmemo nasu putanju za MONGO_URI:'mongodb+srv://anessuljovic1:anes123456@nodeexpressprojects.xnwkoge.mongodb.net/?retryWrites=true' i IDEMO u config.env da nalepimo ovu nasu uri adresu.

// // IDEMO u config.env

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 53. Connecting To Atlas Cloud ________
//
//
//
//
//
//

// // IDEMO u user.js(models)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 55. Post Man for API Testing ________
//
//
//
//
//
//

// // IDEMO u user.js (controllers)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 56. Register User API ________
//
//
//
//
//
//

// // IDEMO u user.js (controllers)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// // 4: Using Middlewares
// app.use(express.json());

// // 4:(KRAJ!) Sad u idemo u POSTMAN: POST URL:'http://localhost:5000/api/v1/user/new' i u Body kucamo:
// /*
//   {
//     "name":"Asmir",
//     "email":"asmir@gmail.com",
//     "password":"aske1234",
//     "address": "1 Maj",
//     "city": "New Pazar",
//     "country":"Serb",
//     "pinCode":36300
// }
// DOBIJAMO:
// {
//     "success": true,
//     "message": "Registered Successfully"
// }

// */

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 57. Login & Hashing Password ________
//
//
//
//
//
//

// // IDEMO u user.js (controllers)

// import express from 'express';

// import { config } from 'dotenv';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

//
//
//
//
//
//________ 58. Error Handler Middleware ________
//
//
//
//
//
//

// // IDEMO u app.js

// import express from 'express';
// import { config } from 'dotenv';
// // 4: import { errorMiddleware } from './middlewares/Error.js';
// import { errorMiddleware } from './middlewares/Error.js';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // 1: Using Error Midleware
// //N 1: app.use();  IDEMO u user.js(controllers)
// //N 4: UBACUJEMO: errorMiddleware: app.use(errorMiddleware);  IDEMO u user.js(controllers)
// app.use(errorMiddleware);

//
//
//
//
//
//________ 59. Async Error Handler ________
//
//
//
//
//
//

// // IDEMO u Error.js(middlewares)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 60. Implementing JWT ________
//
//
//
//
//
//

// // IDEMO na link: 'https://jwt.io/'

// // ZATVARAMO SERVER (CTRL+C)

// // INSTALIRAMO 2 BIBLIOTEKE u TERMINALU:'npm i jsonwebtoken',  'npm i cookie-parser' i POKRECEMO PONOVO SERVER: 'npm run dev'

// // IDEMO u user.js(moidels)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 62. Authentic Middleware ________
//
//
//
//
//
//

// // KREIRAMO NOVI FAJL:'auth.js' u folder 'middleware'

// // IDEMO u auth.js(middleware)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// // 6: import cookieParser from 'cookie-parser';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());
// //N 6: app.use(cookieParser()); SADA KADA ODEMO U POSTMAN GET URL:'' DOBICEMO NAS TOKEN:
// /*
// {
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJlOGNiNjllN2M1MmRhOGM2MjVkN2UiLCJpYXQiOjE2OTc2NDMwMTMsImV4cCI6MTY5ODkzOTAxM30.ihYEL6ZGOn3CLfeAL_lp6hTHD-xnZ_q52JoOg18AEjk'
// }
//  RADI!  POSLE IDEMO u auth.js */
// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // IDEMO u features.js(utils)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 65. Logout API ________
//
//
//
//
//
//

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 66. Update Profile & Change Password API ________
//
//
//
//
//
//

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // ZATAVARAMO SERVER I INSTALIRAMO 3 BIBLIOTEKE u TERMINALU:'npm i cloudinary' i 'npm i multer', 'npm i datauri' i pokrecemo server:'npm run dev'

// // Kreiramo NOVI FAJL:'multer.js' u folderu 'middlewares'

// // IDEMO u multer.js(middlewares)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // IDEMO NA CLOUDINARY LINK: 'https://cloudinary.com/users/register_free' i prijavljujemno se sa google accountom.

// // IDEMO u config.env(data)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 69. Update Profile Pic API ________
//
//
//
//
//
//

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 70. Forget Password API ________
//
//
//
//
//
//

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

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

// // ZAUSTAVLJAMO SERVER I INSTALIRAMO PAKET U TERMINALU:'npm i nodemailer' i pokrecemo server 'npm run dev'

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 72. Reset Password API ________
//
//
//
//
//
//

// // IDEMO u user.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 73. Creating Product Schema ________
//
//
//
//
//
//

// // IDEMO u product.js(modals)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here

// import user from './routes/user.js';

// app.use('/api/v1/user', user);

// // Using Error Midleware

// app.use(errorMiddleware);

//
//
//
//
//
//________ 74. Get Product APIs ________
//
//
//
//
//
//

// // IDEMO u app.js(routes)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// // 1: import product from './routes/product.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// //N 1: app.use('/api/v1/product', product);
// app.use('/api/v1/product', product);

// //N 1: KREIRAMO NOVI FAJL:'product.js' u FOLDERU 'routes'  IDEMO u product.js(routes)

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 75. Create New Product API ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 76. Update Product & Add Images ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 77. Delete Product & Images ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 78. Add, Get, Delete Category API ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 79. Admin Middleware ________
//
//
//
//
//
//

// // IDEMO u auth.js(middlewares)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 80. Search & Filter API ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 81. Creating Order Schema ________
//
//
//
//
//
//

// // KREIRAMO NOVI FAJL: 'order.js' u FOLDERU: 'controllers'

// // KREIRAMO NOVI FAJL: 'order.js' u FOLDERU: 'routes'

// // IDEMO u order.js(models)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 82. Place Order API ________
//
//
//
//
//
//

// // IDEMO u order.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// // 3: import order from './routes/order.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// // 3: app.use('/api/v1/order', order);
// app.use('/api/v1/order', order);

// // 3: SAD IDEMO U POSMTAN DA PROVERIMO: POST URL:'http://localhost:5000/api/v1/order/new' i u 'Body' - raw - JSON:
// /*

//     UPISUJEMO U BODY:
//     {
//     "shippingInfo":{
//         "address":"Vojkovacka bb",
//         "city": "Novi Pazar",
//         "country":"Serbia",
//         "pinCode":"36300"
//     },
//     "orderItems":[
//         {
//             "name": "Cokolate Box",
//             "price":5700,
//             "quantity":1,
//             "image":"https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//             "product":"653ba8c54f85879e940972f4"
//         }
//     ],
//     "itemPrice":1200,
//     "taxPrice": 150,
//     "shippingCharges": 100,
//     "totalAmount": 1450
// }

// DOBIJAMO:
// {
//     "success": true,
//     "message": "Order Placed Successfully"
// }

// RADI!

// SACAVAMO OVU RUTU KAO:'New Order' u SADKREIRANOM folderu 'Order'.
//     */

// // 1: SAD IDEMO U POSMTAN u 'Update Product': PUT URL:'http://localhost:5000/api/v1/product/single/653ba8c54f85879e940972f4' i u 'Body':

// /*
// {
//     "stock": 11
// }

// DOBIJAMO:

// {
//     "success": true,
//     "message": "Product Updated Successfully!"
// }

// RADI!
// */

// // 3: I SAD KAD ODEMO U POSTMAN DA PORUCIMO JEDAN PROIZVOD A UKUPNO(STOCK) SMO IMALI 11 PROIZVODA DOBICEMO DA IMAMO 10 BETON BETONA. IDEMO U POSTMAN POST 'New Order' i kliknemo 'Send'(VEC SMO UNELI SVE POTREBNE VREDNOSTI):
// /*

// DOBIJAMO:
// {
//     "success": true,
//     "message": "Order Placed Successfully"
// }

// RADI! SKINUO NAM JE OD 'stock'-a  1 PROIZVOD i sad IMAMO 10 UKUPNO. :D

// MOZEMO POGLEDATI TO NA RUTU: 'Get All Product'

// */

// // 3:(KRAJ!) SAD IDEMO u Atlas gde su nam u bazi 'orders'(Korffne) na LINK:'https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/metrics/replicaSet/64b3d9ecf112e5612cc6a74a/explorer/Kroffne/orders/find' i IZBRISACEMO CELU BAZU 'orders' i SAD IDEMO  u POSTMAN  u RUTU: 'New Order' DAPORUCIMO NESTO :D UZMI I TI STA CES DA POPIJES! :D i KLIKNMO na 'Send' i sad imamo 9 u 'stock'-u. SADA OPET IDEMO U ATLAS na linku:'https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/metrics/replicaSet/64b3d9ecf112e5612cc6a74a/explorer/Kroffne/orders/find' i vidimo samo jednu porudzbinu. :D BETOON BETONAA!

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 83. Orders Remaining API ________
//
//
//
//
//
//

// // IDEMO u order.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// app.use('/api/v1/order', order);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 84. Process Payment API ________
//
//
//
//
//
//

// // INSTALIRACEMO BIBLIOTEKU U TERMINALU:'npm i stripe'
// // IDEMO NA LINK ZA STRIPE:'https://stripe.com/'
// // KREIRAMO ACCOUNT AKO NEMAMO.
// // IDEMO NA LINK: 'https://dashboard.stripe.com/test/apikeys' da UZMEMO KEY-eve

// // IDEMO u config.env(data)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// app.use('/api/v1/order', order);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 85. Correction Before Deployment ________
//
//
//
//
//
//

// // IDEMO u product.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// app.use('/api/v1/order', order);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 86. Using Cors in Server ________
//
//
//
//
//
//

// // ZATVARAMO SERVER i INSTALIRAMO U TERMINALU:'npm i cors'
// // VAZNO: 'cors' nam omogucava da backend rasporedimo na jednom domenu a frontend rasporedimo na drugom domenu!
// // POKRECEMO SERVER:'npm run dev'

// // IDEMO u app.js(controllers)

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';
// // 1: import cors from 'cors';
// import cors from 'cors';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// // Ussing Middlewares
// app.use(express.json());
// app.use(cookieParser());
// // 1: app.use(
// app.use(
//   // 1: cors({
//   cors({
//     // 1: credentials: true,
//     credentials: true,
//     // 1: methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     // 1:(KRAJ!) SLUZI DA DOZVOLIMO NA KOJE CEMO ADDRESE(sajtove-linkove) DOZVOLITI NAS SERVER: origin:[process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2]
//     origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
//   })
// );

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// app.use('/api/v1/order', order);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 87. Deploying Server Method 1 ________
//
//
//
//
//
//

// // KREIRAMO NOVI FAJL:'.gitIgnore' U GLOBALU(server)

// // IDEMO u '.gitIgnore'

// // 2: KUCAMO U TERMINALU:'git init'
// // 2: KUCAMO U TERMINALU:'git add .'
// // 2: KUCAMO U TERMINALU:'git status'
// // 2: KREIRAMO NOVI FAJL:'Procfile' u GLOBALU(server) i u njega NE MOZEMO KOMENTAR pa cu napisati ovde sta sam napisao tamo: 'web: node server.js'
// // 2: KUCAMO U TERMINALU:'git add .'
// // 2: KUCAMO U TERMINALU:'git commit -m "initial commit"'

// // 2: IDEMO NA GITHUB LINK:'' da KREIRAMO REPOSITORY:
// // 2: KUCAMO U TERMINALU:'git remote add origin https://github.com/asmirpljakic/react-native-nodejs-Donuts-app.git'
// // 2:(KRAJ!) KUCAMO U TERMINALU:'git push -u origin master' i prikacili smo se preko: 'google browsvera'. POSLE IDEMO NA 'render.com' ZATO STO "Heroku" VISE NE RADI, NIJE DZABE xD

// import express from 'express';
// import { config } from 'dotenv';
// import { errorMiddleware } from './middlewares/Error.js';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';

// config({
//   path: './data/config.env',
// });

// export const app = express();

// // Ussing Middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
//   })
// );

// app.get('/', (req, res, next) => {
//   res.send('Working');
// });

// // Importing Routers here
// import user from './routes/user.js';
// import product from './routes/product.js';
// import order from './routes/order.js';

// app.use('/api/v1/user', user);
// app.use('/api/v1/product', product);
// app.use('/api/v1/order', order);

// // Using Error Midleware
// app.use(errorMiddleware);

//
//
//
//
//
//________ 88. Deploying Server Method 2 ________
//
//
//
//
//
//

// IDEMO NA LINK: 'https://dashboard.render.com/' i kliknemo na "New +" pa na 'Web Service" pa se konektujemo na 'GitHub'

// BRISEMO SAD FAJL:'Procfile'.

// SAD IDEMO U package.json i BRISEMO:
/*
MENJAMO/BRISEMO: Set NODE_ENV=Production&&
"scripts": {
    "dev": "Set NODE_ENV=Development&& nodemon server.js",
    "start": "Set NODE_ENV=Production&& node server.js"
  },

  i OVAKO OSTAJE:
  "scripts": {
    "dev": "Set NODE_ENV=Development&& nodemon server.js",
    "start": "node server.js"
  },
*/

// Kucamo u TERMINALU: ''

import express from 'express';
import { config } from 'dotenv';
import { errorMiddleware } from './middlewares/Error.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config({
  path: './data/config.env',
});

export const app = express();

// Ussing Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
  })
);

app.get('/', (req, res, next) => {
  res.send('Working');
});

// Importing Routers here
import user from './routes/user.js';
import product from './routes/product.js';
import order from './routes/order.js';

app.use('/api/v1/user', user);
app.use('/api/v1/product', product);
app.use('/api/v1/order', order);

// Using Error Midleware
app.use(errorMiddleware);
