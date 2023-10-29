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

// // 7: import { User } from '../models/user.js';
// import { User } from '../models/user.js';
// // 7: VAZNO: AKO NE STAVIMO NA KRAJU: 'error.js' BICE KRAS!!: import ErrorHandler from '../utils/error.js';
// import ErrorHandler from '../utils/error.js';
// // 7: import jwt from 'jsonwebtoken';
// import jwt from 'jsonwebtoken';
// // 7: import { asyncError } from './Error.js';
// import { asyncError } from './Error.js';

// //N 1: export const isAuthenticated = () => {};  IDEMO da kreiramo rutu u user.js(routes)
// // 5: DODAJEMO PARAMETRE: export const isAuthenticated = async(req, res, next) => {
// // 7: SADA CEMO CELU async da ubacimo u nasu asyncError f-ju:             export const isAuthenticated = asyncError( async (req, res, next) => {
// export const isAuthenticated = asyncError(async (req, res, next) => {
//   //5 IDEMO U POSTMAN: GET URL:'http://localhost:5000/api/v1/user/me' i kliknemo 'Send' OVO CE BITI BESKONACKO
//   // console.log(req.cookies);

//   // 7: console.log(req.cookies.token);
//   // console.log(req.cookies.token);

//   // 7: const {token} = req. cookies;
//   const { token } = req.cookies;
//   // 7:  if (!token) return next(new ErrorHandler('Not Logged In', 401));
//   if (!token) return next(new ErrorHandler('Not Logged In', 401));

//   // 7: SAD IDEMO U POSTMAN DA GA TESTIRAMO GET URL:'http://localhost:5000/api/v1/user/me' i kliknemo 'Send'. DOBIJAMO: 'Working 2' RADI.            A AKO IZBRISEMO 'Cookies' NECE RADITI:
//   /*
//   DOBIJAMO: {
//     "success": false,
//     "message": "Not Logged In"
// }
//   NECE RADITI AKO IZBRISEMO 'Cookies' iz POSTMANA*/

//   // 7: const decoderData = jwt.verify(token, process.env.JWT_SECRET);
//   const decoderData = jwt.verify(token, process.env.JWT_SECRET);

//   // 7:(KRAJ!) req.user = await User.findById(decoderData._id);
//   req.user = await User.findById(decoderData._id);

//   // 5: const token = req.cookies.token
//   // const token = req.cookies.token

//   //N 5: SADA AKO OPET ODEMO U POSTMAN: GET URL:'http://localhost:5000/api/v1/user/me' i kliknemo 'Send' OVO CE BITI DOBRO: Working 2 IDEMO u app.js next();

//   next();
// });

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

import { User } from '../models/user.js';
import ErrorHandler from '../utils/error.js';
import jwt from 'jsonwebtoken';
import { asyncError } from './Error.js';

export const isAuthenticated = asyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler('Not Logged In', 401));

  const decoderData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoderData._id);

  next();
});

// 1: export const isAdmin = asyncError(async (req, res, next) => {
export const isAdmin = asyncError(async (req, res, next) => {
  // 1: if (req.user.role !== 'admin')
  if (req.user.role !== 'admin')
    // 1: return next(new ErrorHandler('Only Admin allowed', 401));
    return next(new ErrorHandler('Only Admin allowed', 401));

  //N 1: next();  IDEMO u product.js(routes)
  next();
});
