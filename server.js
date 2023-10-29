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

// // 2: VAZNO: U backend-u JE POZELJNO UKUCATI npr:'app.js' kad IMPORTUJEMO: import { app } from "./app.js";
// import { app } from './app.js';

// // 2: app.listen(process.env.PORT,()=>{})
// app.listen(process.env.PORT, () => {
//   // 2: console.log(`Server listening on port: ${process.env.PORT}`);
//   // 6:DODAJEMO:  in ${process.env.NODE_ENV} MODE`: console.log(`Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`);
//   console.log(
//     `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
//   );
// });

// // 6: Sad mozemo da kucamo u TERMINALU:'npm start' i to je za produkcijskom rezimu. KAD radimo razvoj onda koristimo 'npm run dev' a kad finalnu pokrecemo tad koristimo 'npm start'

// // 6: Tako da cemo sad ukucati u TERMINALU:'npm run dev ' :D

// // 6:(KRAJ!) KREIRAMO NOVE FOLDERE:'controllers', 'models', 'middlewares', 'routes' i 'utils'

// // N 2: Kucamo u TERMINALU:'node .\server.js' i proverli smo da nam pise: Server listening on port: undefined  IDEMO u app.js

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

// import { app } from './app.js';

// // 5: import { connectDB } from './data/database.js';
// import { connectDB } from './data/database.js';
// //N 5: connectDB(); IDEMO u config.env
// connectDB();

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
//   );
// });

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

// import { app } from './app.js';
// import { connectDB } from './data/database.js';
// // 2: import cloudinary from 'cloudinary';
// import cloudinary from 'cloudinary';

// connectDB();

// // 2: cloudinary.v2.config({
// cloudinary.v2.config({
//   // 2: cloud_name: process.env.CLOUDINARY_NAME,
//   cloud_name: process.env.CLOUDINARY_NAME,
//   // 2: api_key: process.env.CLOUDINARY_API_KEY,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   //N 2: api_secret: process.env.CLOUDINARY_API_SECRET,  IDEMO u user.js(controllers)
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
//   );
// });

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

import { app } from './app.js';
import { connectDB } from './data/database.js';
import cloudinary from 'cloudinary';
// 2: import Stripe from 'stripe';
import Stripe from 'stripe';

connectDB();

//N 2: export const stripe = new Stripe(process.env.STRIPE_API_SECRET);  IDEMO u order.js(controllers)
export const stripe = new Stripe(process.env.STRIPE_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
  );
});
