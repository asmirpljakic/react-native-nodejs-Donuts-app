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

// // 4: export const getMyProfile = (req, res, next) => {
// export const getMyProfile = (req, res, next) => {
//   //N 4: res.send('ME');  IDEMO u user.js(routes)
//   res.send('ME');
// };

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

// // 1: RENAME: getMyProfile u login: export const login = (req, res, next) => {
// export const login = (req, res, next) => {
//   //N 1: MENJAMO: res.send('ME') u res.send('Login');  IDEMO u user.js(routes)
//   res.send('Login');
// };

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

// // 3: import { User } from '../models/user.js';
// import { User } from '../models/user.js';

// export const login = (req, res, next) => {
//   res.send('Login');
// };

// // 1: export const signup = async (req, res, next) => {
// export const signup = async (req, res, next) => {
//   // 3: const { name, email, password, addres, city, country, pinCode } = req.body;
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // 3: Add Cloudnary here

//   // 3: await User.create({name, email, password, address, city, country, pinCode});
//   await User.create({ name, email, password, address, city, country, pinCode });

//   //N 1: res.send('Register');  IDEMO u user.js(routes)
//   // res.send('Register');

//   // 3: SADA ZAKOMENTARISEMO/BRISEMO i MENJAMO ovaj nas 'res.send('Register')' u: res.status(201).json({
//   res.status(201).json({
//     // 3: success: true,
//     success: true,
//     //N 3: message: 'Register Successfully',  OVDE JE JAVIO GRESKU i moramo da napravimo midleware f-ju IDEMO u app.js
//     message: 'Registered Successfully',
//   });
// };

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

// import { User } from '../models/user.js';

// // 1: export const login = async (req, res, next) => {
// export const login = async (req, res, next) => {
//   //N 1: const {email, password} = req.body;  IDEMO u user.js(models)
//   const { email, password } = req.body;

//   // 3: return await bcrypt.compare(enteredPassword, this.password)
//   const user = await User.findOne({ email }).select('+password');

//   // 4:   if (!user) {
//   if (!user) {
//     return (
//       // 4: res.status(400)
//       res
//         .status(400)
//         // 4: (KRAJ!) .json({ success: false, message: 'Incorrect Email' })
//         .json({ success: false, message: 'Incorrect Email' })
//     );
//   }

//   // 3: Handle error
//   // 3: const isMatched = await user.pomparePassword(password);
//   const isMatched = await user.pomparePassword(password);

//   // 3: if (!isMatched) {
//   if (!isMatched) {
//     // 3: return (
//     return (
//       // 3: res.status(400)
//       res
//         .status(400)
//         // 3: .json({ success: false, message: 'Incorrect Password' })
//         .json({ success: false, message: 'Incorrect Password' })
//     );
//   }

//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     // 3: message: `Wellcome Back, ${user.name}`,
//     message: `Wellcome Back, ${user.name}`,

//     //G 3: SAD IDEMO u POSTMAN POST URL:'http://localhost:5000/api/v1/user/login' i u Body kucamo:
//     /*
//     GRESIMO NAMERNO DA BI PROVERILI:
//     {
//     "email":"asmir2@gmail.com",
//     "password":"asdasd"
// }

// DOBIJAMO:
// {
//     "success": false,
//     "message": "Incorrect Password"
// }

// SAD PROBAMO ISPRAVNO:
// Body:
// {
//     "email":"asmir2@gmail.com",
//     "password":"ask2e1234"
// }

// DOBIJAMO:
// {
//     "success": true,
//     "message": "Wellcome Back, Asmir"
// }

// RADI! :)
//     */
//   });
// };

// export const signup = async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // Add Cloudnary here

//   await User.create({ name, email, password, address, city, country, pinCode });

//   res.status(201).json({
//     success: true,
//     message: 'Registered Successfully',
//   });
// };

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

// import { User } from '../models/user.js';
// // 13: import ErrorHandler from '../utils/error.js';
// import ErrorHandler from '../utils/error.js';

// export const login = async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error

//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     //N 5: KATOVACEMO OVO SVE POSLE 'returna' i IDEMO u error.js da ga NALEPIMO
//     //N 8: OVDE CEMO GA NALEPITI:    IDEMO u Error.js
//     //N 10: Sad ovde mozemo postaviti poruku:                          return next(new Error('Incorrect Password'));  IDEMO u Error.js
//     //N 13: MENJAMO: next(new Error('Incorrect Password')) u: next(new ErrorHandler('Incorrect Password', 400))  IDEMO u Error.js
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   res.status(200).json({
//     success: true,
//     message: `Wellcome Back, ${user.name}`,
//   });

//   //N 2: KREIRAMO NOVI FAJL:'Error.js' u folderu 'middlewares' i IDEMO u Error.js  next(new Error());
//   //G 7: SAD OVO KATUJEMO/ZAKOMENTARISEMO i idemo GORE:
//   next(new Error());
// };

// export const signup = async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // Add Cloudnary here

//   await User.create({ name, email, password, address, city, country, pinCode });

//   res.status(201).json({
//     success: true,
//     message: 'Registered Successfully',
//   });
// };

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';

// //N 2: OVDE CEMO KATOVATI CELU async(req,res,next) f-ju i pozvati nasu asyncError(OVDE) i NALEPITI JE UNUTAR ZAGRADA. IDEMO u Error.js(middlewares)
// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   // 4: OVDE CEMO SAMO STAVITI neko slovo 'a' da bi ga TESTIRALI. NAKON TESTIRANJA CEMO GA ZAKOMENTARISATI:
//   // a;

//   // 4: IDEMO SAD U POSTMAN URL: 'http://localhost:5000/api/v1/user/login'
//   /*
//   u Body:
//   {
//     "email":"asmir2@gmail.com",
//     "password":"ask2e12342"
// }

// DOBIJAMO:
// {
//     "success": false,
//     "message": "a is not defined"
// }

// RADI!
//   */

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   res.status(200).json({
//     success: true,
//     message: `Wellcome Back, ${user.name}`,
//   });

//   next(new Error());
// });

// // 4: UBACUJEMO SVE U NASU: 'asyncError' f-ju:
// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // Add Cloudnary here

//   // 4: SADA CEMO GA TESTIRATI I OVDE ubacujemo samo slovo'a;':  IDEMO U POSTMAN POST URL:'http://localhost:5000/api/v1/user/new' i stisnemo 'Send' DOBIJAMO: KRES: [nodemon] app crashed - waiting for file changes before starting...  NAKON TESTIRANJA CEMO GA ZKOMENTARISATI
//   // a;

//   // 4: KAD SMO UBACILI u nasu asyncError f-ju idemo opet da ga testiramo tako sto cemo opet ubaciti 'a;': IDEMO U POSTMAN POST URL:'http://localhost:5000/api/v1/user/new' i stisnemo 'Send'
//   /**
//   DOBIJAMO:
// {
//     "success": false,
//     "message": "a is not defined"
// }
//   RADI!  POSLE CEMO GA 'a;' ZAKOMENTARISATI: */
//   // a;

//   //N 4: Sad KAD SMO GA ZAKOMENTARISALI da vidimo ovu DUPLIKAD GRESKU. IDEMO U POSTMAN POST URL:'http://localhost:5000/api/v1/user/new' i stisnemo 'Send'.
//   /*
//   DOBIJAMO:
//   {
//     "success": false,
//     "message": "E11000 duplicate key error collection: Kroffne.users index: email_1 dup key: { email: \"asmir2@gmail.com\" }"
// }
//     ZATO IDEMO I TO BOLJE DA RESIMO. IDEMO u Error.js(middlewares)*/

//   await User.create({ name, email, password, address, city, country, pinCode });

//   res.status(201).json({
//     success: true,
//     message: 'Registered Successfully',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   // 4: const token = user.generateToken()
//   const token = user.generateToken();

//   res.status(200).json({
//     success: true,
//     message: `Wellcome Back, ${user.name}`,
//     // 4: token,
//     token,

//     // 4:(KRAJ!) IDEMO u POSTMAN POST URL:'http://localhost:5000/api/v1/user/login' i stisnemo 'Send'
//     /*
//   DOBIJAMO:
//   {
//     "success": true,
//     "message": "Wellcome Back, Asmir",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJlOGNiNjllN2M1MmRhOGM2MjVkN2UiLCJpYXQiOjE2OTc2NDE3MDMsImV4cCI6MTY5ODkzNzcwM30.lcSbpxX7TxOekd5dkW6ho5kPaDViUCfAvCgfdFhtTjQ"
//   }
//     */
//   });

//   next(new Error());
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // Add Cloudnary here

//   await User.create({ name, email, password, address, city, country, pinCode });

//   res.status(201).json({
//     success: true,
//     message: 'Registered Successfully',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   //N 2: KATUJEMO/ZAKOMENTARISEMO SVE (token i celu res do kraja (json)) i  KREIRAMO NOVI FAJL:'features.js' u folderu: 'utils' i IDEMO u features.js
//   // const token = user.generateToken();

//   // // 1: MENJAMO: 'res.status(200).json({' u: res.status(200).cookie('token', token, {
//   // res
//   //   .status(200)
//   //   .cookie('token', token, {
//   //     //G 1: expires: new Date(Date.now() + 15*24*60*60*1000)
//   //     expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//   //   })
//   //   .json({
//   //     success: true,
//   //     message: `Wellcome Back, ${user.name}`,
//   //     token,
//   //   });

//   // next(new Error());

//   // 4: sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   // 5: let user = await User.findOne({ email });
//   let user = await User.findOne({ email });

//   // 5: if (user) return next(new ErrorHandler('User Already Exist', 400));
//   if (user) return next(new ErrorHandler('User Already Exist', 400));
//   // Add Cloudnary here

//   // 5:(KRAJ!) MENJAMO: u user = await User.create({ name, email, password, address, city, country, pinCode });
//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   // 4: SADA CEMO OVO DA ZAKOMENTARISEMO/IZBRISEMO:
//   // res.status(201).json({
//   //   success: true,
//   //   message: 'Registered Successfully',
//   // });

//   //G 4: REFAKTORISEMO U: sendToken(user, res, `Registered Successfully`, 201);
//   sendToken(user, res, `Registered Successfully`, 201);
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // Add Cloudnary here

//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });

// // 3: export const getMyProfile = asyncError(async (req, res, next) => {});
// export const getMyProfile = asyncError(async (req, res, next) => {
//   //N 3: res.send('Working 2');  IDEMO u user.js(routes)
//   res.send('Working 2');
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // Add Cloudnary here

//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   // 1: const user = await User.findById(req.user._id);
//   const user = await User.findById(req.user._id);

//   // 1: MENJAMO: res.send('Working 2') u:
//   res.status(200).json({
//     // 1: success:true,
//     success: true,
//     //N 1: user,  IDEMO u features.js(utils)
//     user,
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// // 1: import { sendToken, cookieOptions } from '../utils/features.js';
// import { sendToken, cookieOptions } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return res.status(400).json({ success: false, message: 'Incorrect Email' });
//   }

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // Add Cloudnary here

//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// // 1: export const logOut = asyncError(async (req, res, next) => {
// export const logOut = asyncError(async (req, res, next) => {
//   // 1: const user = await User.findById(req.user._id);
//   const user = await User.findById(req.user._id);
//   // 1: res
//   res
//     // 1: .status(200)
//     .status(200)
//     // 1: cookie('token', '', {
//     .cookie('token', '', {
//       // 1: ...cookieOptions,
//       ...cookieOptions,
//       // 1: expires: new Date(Date.now()),
//       expires: new Date(Date.now()),
//     })
//     // 1: .json({
//     .json({
//       // 1: success: true,
//       success: true,
//       //N 1: message: 'logged Out Successfully',  IDEMO u user.js(routes)
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken, cookieOptions } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     // 4: MENJAMO u: return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   // 4: if (password) return next(new ErrorHandler('Please Enter Password!', 400));
//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // Add Cloudnary here

//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// // 1: export const updateProfile = asyncError(async (req, res, next) => {
// export const updateProfile = asyncError(async (req, res, next) => {
//   // 1: const user = await User.findById(req.user._id);
//   const user = await User.findById(req.user._id);

//   // 1: const {name,email,address, city, country, pinCode} = req.body;
//   const { name, email, address, city, country, pinCode } = req.body;

//   // 1: if (name) user.name = name;
//   if (name) user.name = name;
//   // 1: if (email) user.email = email;
//   if (email) user.email = email;
//   // 1: if (address) user.address = address;
//   if (address) user.address = address;
//   // 1: if (city) user.city = city;
//   if (city) user.city = city;
//   // 1: if (country) user.country = country;
//   if (country) user.country = country;
//   // 1: if (pinCode) user.pinCode = pinCode;
//   if (pinCode) user.pinCode = pinCode;

//   // 1: await user.save()
//   await user.save();

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     // 1: message: 'Profile Updated Successfully',
//     message: 'Profile Updated Successfully',
//   });
// });

// // 1: export const changePassword = asyncError(async (req, res, next) => {
// export const changePassword = asyncError(async (req, res, next) => {
//   // 1: const user = await User.findById(req.user._id).select('+password');
//   const user = await User.findById(req.user._id).select('+password');

//   // 1: const { oldPassword, newPassword } = req.body;
//   const { oldPassword, newPassword } = req.body;

//   // 4:(KRAJ!) if(!oldPassword || !newPassword) return next(new ErrorHandler('Please Enter Old Password and New Password!', 400));
//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   // 1: const isMatched = await user.pomparePassword(oldPassword);
//   const isMatched = await user.pomparePassword(oldPassword);

//   // 1: if (!isMatched) return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   // 1: user.password = newPassword;
//   user.password = newPassword;

//   // 1: await user.save();
//   await user.save();

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     //N 1:message: 'Pasword Changed Successfully!', IDEMO u user.js(routes)
//     message: 'Pasword Changed Successfully!',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken, cookieOptions, getDataUri } from '../utils/features.js';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // 5: req.file
//   // 5:(KRAJ!) const file = getDataUri();
//   const file = getDataUri();

//   // Add Cloudnary here

//   user = await User.create({
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const updateProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   const { name, email, address, city, country, pinCode } = req.body;

//   if (name) user.name = name;
//   if (email) user.email = email;
//   if (address) user.address = address;
//   if (city) user.city = city;
//   if (country) user.country = country;
//   if (pinCode) user.pinCode = pinCode;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Profile Updated Successfully',
//   });
// });

// export const changePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');

//   const { oldPassword, newPassword } = req.body;

//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   const isMatched = await user.pomparePassword(oldPassword);

//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   user.password = newPassword;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Pasword Changed Successfully!',
//   });
// });

// // 2: export const updatePic = asyncError(async (req, res, next) => {
// export const updatePic = asyncError(async (req, res, next) => {
//   // 2:
//   const user = await User.findById(req.user._id);

//   // 2: res.status(200).json({
//   res.status(200).json({
//     // 2: success: true,
//     success: true,
//     //N 2:  IDEMO u user.js(routes)
//     user,
//   });
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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken, cookieOptions, getDataUri } from '../utils/features.js';
// // 3: import cloudinary from 'cloudinary';
// import cloudinary from 'cloudinary';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   // 5:
//   let avatar = undefined;
//   // 5:
//   if (req.file) {
//     // req.file
//     // 3: IDEMO U POSTMAN (DA PROVERIMO) PRVO da se IZLOGUJEMO preko rute 'Logout' pa na 'Register'. U 'Register' idemo da kliknemo na 'Body' pa da oznacimo 'from-data' i u polje  'Key' upisujemo 'name' a u 'VALUE' 'Asmir' i VAZNO: POPUNICEMO SVE ( name, email, password, address, city,country, pinCode,) u 'Key' a u "VALUE" NAPISEMO VREDNOSTI KOJE MI ZELIMO i SAD JE DOSLO VREME DA URADIMO POLJE ZA SLIKU. U polje 'Key' pisemo 'file' i PORED NJEGA OBELEZIMO da je 'File'. SAD ODABEREMO JOS SLIKU KOJU ZELIMO DA UBACIMO I STISNEMO 'Send' I DOBIJEMO:
//     /*
//   {
//   fieldname: 'file',
//   originalname: 'elegant2.png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 06 b7 00 00 05 bd 08 06 00 00 00 4b 78 09 1d 00 00 00 04 73 42 49 54 08 08 08 08 7c 08 64 88 00 ... 33817 more bytes>,
//   size: 33867
// }
// RADI!

// UBACICEMO JOS JEDNU SLIKU i izmeniti podatke samo da je npr 'Seka' UMESTO'ASMIR'. NISTA TO JE KAO SAMO DA UBACIJEMO JOS JEDNOG KORISNIKA.
//   */
//     // console.log(req.file);

//     //N 3:DODAJEMO: req.file:  const file = getDataUri(req.file);  IDEMO u features.js(utils)
//     const file = getDataUri(req.file);

//     // 5: IDEMO U POSTMAN (DA PROVERIMO) u 'Register' URL:'http://localhost:5000/api/v1/user/new' i dodamo novog koristnika npr: 'sek2@gmail.com' (popunimo sve) i stisnemo 'Send':
//     /*
//   DOBIJAMO OGROMAN STRING:
//   DataURIParser {
//   buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 04 da 00 00 0a 80 08 06 00 00 00 79 a1 5b 86 00 00 00 09 70 48 59 73 00 00 0e c4 00 00 0e c4 01 ... 79656 more bytes>,
//   base64: 'iVBORw0KGgoAAAANSUhEUgAABNoAAAqACAYAAAB5oVuGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPHRFWHRDb21tZW50AHhyOmQ6REFGdVZwWW9EQ1U6MTcsajoxNjcwMTE0MTk3NTA5MDU0MDM0LHQ6MjMxMDAxMTF8+2YtAAAE32lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CiAgICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyL.... 96298 more characters
//   */
//     // console.log(file);

//     // Add Cloudnary here
//     // 5: const myCloud = await cloudinary.v2.uploader.upload(file.content);
//     const myCloud = await cloudinary.v2.uploader.upload(file.content);
//     // 5:KAD ODEMO NA POSTMAN I REGISTRUJEMO NOVOG KORISNIKA i KLIKNEMO 'Send' DOBICEMO URL NASE SLIKE: https://res.cloudinary.com/dovqdeqm6/image/upload/v1697961883/ebtjgwwhnu1zcifknrty.jpg  AKO ODEMO NA LINK:'https://console.cloudinary.com/console/c-fe73b3a884a5201b7b67121549ab22/media_library/folders/home' VIDECEMO DA SMO UBACILI NA Cloudinary nasu sliku:                               console.log(myCloud.secure_url);
//     // console.log(myCloud.secure_url);

//     // 5: avatar = {
//     avatar = {
//       // 5: public_id: myCloud.public_id,
//       public_id: myCloud.public_id,
//       // 5: url: myCloud.secure_url,
//       url: myCloud.secure_url,
//     };
//   }
//   user = await User.create({
//     // 5: DODAJEMO: avatar,
//     avatar,
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   // 5:(KRAJ!) IZBRISACEMO SAD nasu bazu 'users' i POSLE CEMO REGISTROVATI NOVOG KORISNIKA U POSMTANU. I KAD SMO REGISTROVALI KORISNIKA MOZEMO OTICI u MongoDb: 'https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/metrics/replicaSet/64b3d9ecf112e5612cc6a74a/explorer/Kroffne/users/find' i videti da smo kreirali novog korisnika. Takodje mozemo otici na cloudinary: 'https://console.cloudinary.com/console/c-fe73b3a884a5201b7b67121549ab22/media_library/folders/home'  i videti da smo i tamo ubacili sliku.

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const updateProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   const { name, email, address, city, country, pinCode } = req.body;

//   if (name) user.name = name;
//   if (email) user.email = email;
//   if (address) user.address = address;
//   if (city) user.city = city;
//   if (country) user.country = country;
//   if (pinCode) user.pinCode = pinCode;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Profile Updated Successfully',
//   });
// });

// export const changePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');

//   const { oldPassword, newPassword } = req.body;

//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   const isMatched = await user.pomparePassword(oldPassword);

//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   user.password = newPassword;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Pasword Changed Successfully!',
//   });
// });

// export const updatePic = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken, cookieOptions, getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   let avatar = undefined;

//   // 1: ZAKOMENTARISACEMO/KATOVACEMO CEO OVAJ 'if' i prebaciti ga dole:
//   // if (req.file) {
//   //   // req.file
//   //   const file = getDataUri(req.file);

//   //   // Add Cloudnary here
//   //   const myCloud = await cloudinary.v2.uploader.upload(file.content);

//   //   avatar = {
//   //     public_id: myCloud.public_id,
//   //     url: myCloud.secure_url,
//   //   };
//   // }
//   user = await User.create({
//     avatar,
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const updateProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   const { name, email, address, city, country, pinCode } = req.body;

//   if (name) user.name = name;
//   if (email) user.email = email;
//   if (address) user.address = address;
//   if (city) user.city = city;
//   if (country) user.country = country;
//   if (pinCode) user.pinCode = pinCode;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Profile Updated Successfully',
//   });
// });

// export const changePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');

//   const { oldPassword, newPassword } = req.body;

//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   const isMatched = await user.pomparePassword(oldPassword);

//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   user.password = newPassword;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Pasword Changed Successfully!',
//   });
// });

// export const updatePic = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   // 1: OVDE CEMO GA('ceo if') NALEPITI i izbrisati sta nam ne treba:
//   // if (req.file) {

//   // req.file
//   // 1: const file = getDataUri(req.file);
//   const file = getDataUri(req.file);

//   // 1:
//   await cloudinary.v2.uploader.destroy(user.avatar.public_id);

//   // Add Cloudnary here
//   // 1: const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);

//   // 1: user.avatar = {
//   user.avatar = {
//     // 1: public_id: myCloud.public_id,
//     public_id: myCloud.public_id,
//     // 1: url: myCloud.secure_url,
//     url: myCloud.secure_url,
//   };

//   // 1: await user.save();
//   await user.save();

//   res.status(200).json({
//     success: true,
//     // 1: MENJAMO: user u message: message: 'Avatar Updated Successfully!',
//     message: 'Avatar Updated Successfully!',

//     //N 1:  IDEMO U user.js(routes)
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// import { sendToken, cookieOptions, getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   let avatar = undefined;

//   user = await User.create({
//     avatar,
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const updateProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   const { name, email, address, city, country, pinCode } = req.body;

//   if (name) user.name = name;
//   if (email) user.email = email;
//   if (address) user.address = address;
//   if (city) user.city = city;
//   if (country) user.country = country;
//   if (pinCode) user.pinCode = pinCode;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Profile Updated Successfully',
//   });
// });

// export const changePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');

//   const { oldPassword, newPassword } = req.body;

//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   const isMatched = await user.pomparePassword(oldPassword);

//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   user.password = newPassword;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Pasword Changed Successfully!',
//   });
// });

// export const updatePic = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   // req.file
//   const file = getDataUri(req.file);

//   await cloudinary.v2.uploader.destroy(user.avatar.public_id);

//   // Add Cloudnary here
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);

//   user.avatar = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Avatar Updated Successfully!',
//   });
// });

// // 1: export const forgetPassword = asyncError(async (req, res, next) => {
// export const forgetPassword = asyncError(async (req, res, next) => {
//   // 1: const {email} = req.body;
//   const { email } = req.body;
//   // 1: const user = await User.findOne({email})
//   const user = await User.findOne({ email });

//   // 1: if (!user) return next(new ErrorHandler('Incorrect Email!'));
//   if (!user) return next(new ErrorHandler('Incorrect Email!'));

//   // 1: max,min 2000, 10000
//   // 1: FORMULA: Math.random()*(max-min)+min
//   // 1: const randomNumber = Math.random() * (999999 - 100000) + 100000;
//   const randomNumber = Math.random() * (999999 - 100000) + 100000;

//   // 1: const otp = Math.floor(randomNumber);
//   const otp = Math.floor(randomNumber);
//   // 1: otp_expire = 15 * 60 * 1000;
//   otp_expire = 15 * 60 * 1000;

//   // 1: user.otp = otp;
//   user.otp = otp;
//   // 1: user.otp_expire = new Date(Date.now() + otp_expire);
//   user.otp_expire = new Date(Date.now() + otp_expire);
//   // 1: await user.save();
//   await user.save();

//   // 1:
//   // sendEmail()

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     // 1: message: `Email Send To ${user.email}`,
//     message: `Email Send To ${user.email}`,
//   });
// });

// // 1: export const resetPassword = asyncError(async (req, res, next) => {
// export const resetPassword = asyncError(async (req, res, next) => {
//   // 1: const user = await User.findById(req.user._id);
//   const user = await User.findById(req.user._id);
//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     //N 1: user,  IDEMO U user.js(routes)
//     user,
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { User } from '../models/user.js';
// import ErrorHandler from '../utils/error.js';
// // 5:DODAJEMO: sendEmail
// import {
//   sendToken,
//   cookieOptions,
//   getDataUri,
//   sendEmail,
// } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// export const login = asyncError(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select('+password');

//   if (!user) {
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));
//   }

//   if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

//   //  Handle error
//   const isMatched = await user.pomparePassword(password);

//   if (!isMatched) {
//     return next(new ErrorHandler('Incorrect Password', 400));
//   }

//   sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
// });

// export const signup = asyncError(async (req, res, next) => {
//   const { name, email, password, address, city, country, pinCode } = req.body;

//   let user = await User.findOne({ email });

//   if (user) return next(new ErrorHandler('User Already Exist', 400));

//   let avatar = undefined;

//   user = await User.create({
//     avatar,
//     name,
//     email,
//     password,
//     address,
//     city,
//     country,
//     pinCode,
//   });

//   sendToken(user, res, `Registered Successfully`, 201);
// });
// export const logOut = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res
//     .status(200)
//     .cookie('token', '', {
//       ...cookieOptions,
//       expires: new Date(Date.now()),
//     })
//     .json({
//       success: true,
//       message: 'logged Out Successfully',
//     });
// });

// export const getMyProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const updateProfile = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   const { name, email, address, city, country, pinCode } = req.body;

//   if (name) user.name = name;
//   if (email) user.email = email;
//   if (address) user.address = address;
//   if (city) user.city = city;
//   if (country) user.country = country;
//   if (pinCode) user.pinCode = pinCode;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Profile Updated Successfully',
//   });
// });

// export const changePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');

//   const { oldPassword, newPassword } = req.body;

//   if (!oldPassword || !newPassword)
//     return next(
//       new ErrorHandler('Please Enter Old Password and New Password!', 400)
//     );

//   const isMatched = await user.pomparePassword(oldPassword);

//   if (!isMatched)
//     return next(new ErrorHandler('Incorrect Old Passsword!', 400));

//   user.password = newPassword;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Pasword Changed Successfully!',
//   });
// });

// export const updatePic = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   // req.file
//   const file = getDataUri(req.file);

//   await cloudinary.v2.uploader.destroy(user.avatar.public_id);

//   // Add Cloudnary here
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);

//   user.avatar = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: 'Avatar Updated Successfully!',
//   });
// });

// export const forgetPassword = asyncError(async (req, res, next) => {
//   const { email } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) return next(new ErrorHandler('Incorrect Email!'));

//   // max,min 2000, 10000
//   // FORMULA: Math.random()*(max-min)+min
//   const randomNumber = Math.random() * (999999 - 100000) + 100000;
//   const otp = Math.floor(randomNumber);
//   const otp_expire = 15 * 60 * 1000;
//   user.otp = otp;
//   user.otp_expire = new Date(Date.now() + otp_expire);
//   await user.save();
//   //N 1: console.log(otp);  IDEMO u features.js(utils)
//   console.log(otp);

//   // 5: const message = `Your OTP For Reseting Password is ${otp}. Please ignore if you haven't requested this.`;
//   const message = `Your OTP for Reseting Password is ${otp}.\n Please ignore if you haven't requested this.`;

//   // 5: try {
//   try {
//     // 5: await sendEmail("OTP For REseting PAssword", user.email, message);
//     await sendEmail('OTP For REseting PAssword', user.email, message);
//     // 5: } catch (error) {
//   } catch (error) {
//     // 5: user.otp = null;
//     user.otp = null;
//     // 5: user.otp_expire = null;
//     user.otp_expire = null;
//     // 5: await user.save()
//     await user.save();
//     // 5: return next(error)
//     return next(error);
//   }

//   // 5:(KRAJ!) SAD IDEMO U POSMTAN i PRVO CEMO SE IZLOGOVATI (Logout) RUTOM PA POSLE IDEMO NA POST URL:'http://localhost:5000/api/v1/user/forgetpassword' i u:
//   /*
//   Body:
// {
//     "email":"Seka@gmail.com"
// }

// DOBIJAMO:
// {
//     "success": true,
//     "message": "Email Send To Seka@gmail.com"
// }

// I MOZEMO OTICI NA LINK:'https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/metrics/replicaSet/64b3d9ecf112e5612cc6a74a/explorer/Kroffne/users/find' i VIDETI DA IMAMO nas 'otp:9198' i DO KAD TRAJE: 'otp_expire:2023-10-23T08:17:39.514+00:00'

// A MOZEMO GA I PROVERITI NA LINK:"https://mailtrap.io/inboxes/2458014/messages" i kad udjemo na poruke:'https://mailtrap.io/inboxes/2458014/messages/3795928632'
//    */

//   res.status(200).json({
//     success: true,
//     message: `Email Send To ${user.email}`,
//   });
// });

// export const resetPassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

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

import { asyncError } from '../middlewares/Error.js';
import { User } from '../models/user.js';
import ErrorHandler from '../utils/error.js';
import {
  sendToken,
  cookieOptions,
  getDataUri,
  sendEmail,
} from '../utils/features.js';
import cloudinary from 'cloudinary';

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Incorrect Old Passsword!', 400));
  }

  if (!password) return next(new ErrorHandler('Please Enter Password!', 400));

  //  Handle error
  const isMatched = await user.pomparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler('Incorrect Password', 400));
  }

  sendToken(user, res, `Wellcome Back, ${user.name}`, 200);
});

export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler('User Already Exist', 400));

  let avatar = undefined;

  if (req.file) {
    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  user = await User.create({
    avatar,
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });

  sendToken(user, res, `Registered Successfully`, 201);
});
export const logOut = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res
    .status(200)
    .cookie('token', '', {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: 'logged Out Successfully',
    });
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const { name, email, address, city, country, pinCode } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (address) user.address = address;
  if (city) user.city = city;
  if (country) user.country = country;
  if (pinCode) user.pinCode = pinCode;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Profile Updated Successfully',
  });
});

export const changePassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');

  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword)
    return next(
      new ErrorHandler('Please Enter Old Password and New Password!', 400)
    );

  const isMatched = await user.pomparePassword(oldPassword);

  if (!isMatched)
    return next(new ErrorHandler('Incorrect Old Passsword!', 400));

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Pasword Changed Successfully!',
  });
});

export const updatePic = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  // req.file
  const file = getDataUri(req.file);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  // Add Cloudnary here
  const myCloud = await cloudinary.v2.uploader.upload(file.content);

  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Avatar Updated Successfully!',
  });
});

export const forgetPassword = asyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler('Incorrect Email!'));

  // max,min 2000, 10000
  // FORMULA: Math.random()*(max-min)+min
  const randomNumber = Math.random() * (999999 - 100000) + 100000;
  const otp = Math.floor(randomNumber);
  const otp_expire = 15 * 60 * 1000;
  user.otp = otp;
  user.otp_expire = new Date(Date.now() + otp_expire);
  await user.save();
  // 1: ZAKOMENTARISEMO:
  // console.log(otp);

  const message = `Your OTP for Reseting Password is ${otp}.\n Please ignore if you haven't requested this.`;

  try {
    await sendEmail('OTP For Reseting Password', user.email, message);
  } catch (error) {
    user.otp = null;
    user.otp_expire = null;
    await user.save();
    return next(error);
  }

  res.status(200).json({
    success: true,
    message: `Email Send To ${user.email}`,
  });
});

export const resetPassword = asyncError(async (req, res, next) => {
  // 1: const { otp, password } = req.body;
  const { otp, password } = req.body;
  // 1: MENJAMO: const user = await User.findById(req.user._id) u:
  const user = await User.findOne({
    // 1: otp,
    otp,
    // 1: otp_expire,
    otp_expire: {
      // 1: $gt: Date.now(),
      $gt: Date.now(),
    },
  });

  // 1: if (!user)
  if (!user)
    // 1: return next(new ErrorHandler('Incorrect OTP or has been expired', 400))
    return next(new ErrorHandler('Incorrect OTP or has been expired', 400));

  // 2: if (!password)
  if (!password)
    // 2: return next(new ErrorHandler('Please Enter New Password', 400));
    return next(new ErrorHandler('Please Enter New Password', 400));

  // 2: SAD IDEMO U POSTMAN PUT URL:' http://localhost:5000/api/v1/user/forgetpassword' i u Body:
  /*

  {
    "otp":655142
}

DOOBIJAMO:
{
    "success": false,
    "message": "Please Enter New Password"
}


RADI!

*/

  // 2: SAD IDEMO U POSTMAN PUT URL:' http://localhost:5000/api/v1/user/forgetpassword' i  DODAJEMO: 'password' u Body:
  /*
{
    "otp":649797,
    "password": 1234567
}

DOBIJAMO:
{
    "success": true,
    "message": "Password Changed Successfully, You can login now!"
}
*/

  // 2:(KRAJ!) SAD CEMO OVU RUTU SACUVATI KAO:'Reset Password'

  // 1: user.password = password;
  user.password = password;
  // 1: user.otp=undefined;
  user.otp = undefined;
  // 1: ser.otp_expire= undefined;
  user.otp_expire = undefined;

  // 1: await user.save();
  await user.save();

  res.status(200).json({
    success: true,
    // 1: MENJAMO user u: message: 'Password Changed Successfully, You can login now!',
    message: 'Password Changed Successfully, You can login now!',
  });
  // 1: SADA CEMO OTICI U POSTMAN POST URL:'http://localhost:5000/api/v1/user/forgetpassword' DA JE SACUVAMO KAO:'Forget Password' u folderu 'Profile'.

  //G 1: SADA CEMO OTICI U POSTMAN PUT:' http://localhost:5000/api/v1/user/forgetpassword' i kliknuti 'Send' i DOBIJEMO:
  /*

  {
    "success": false,
    "message": "Incorrect OTP or has been expired"
}

RADI!
  */
});
