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

// // 1: import express from 'express';
// import express from 'express';
// // 5: import { getMyProfile } from '../controllers/user';
// import { getMyProfile } from '../controllers/user.js';

// // 1: const router = express.Router();
// const router = express.Router();

// // 3: NACIN 1: (ISTO JE)
// // router.get('/me', () => {});

// // 3: NACIN 1: (ISTO JE): KORISTICEMO OBE U ZAVISNOSTI OD SITUACIJE: router.route('/me').get((req,res,next)=>{});
// router.route('/me').get(
//   // 3: KREIRAMO NOVI FAJL: 'user.js' u FOLDERU: 'controllers'

//   // 3: KATOVACEMO OVU CELU F-ju i IDEMO u user.js(controllers) da je nalepimo tamo.
//   //  (req, res, next) => {
//   //   // 3: I SAD kad odemo na link:'http://localhost:5000/api/v1/user/me' PISACE: 'ME': res.send('ME');
//   //   res.send('ME');
//   // }

//   // 5:(KRAJ!) E sad samo ubacimo nasu controller koji smo napravili u user.js(controllers): getMyProfile
//   getMyProfile
// );

// //N 3: Ovako bi izgledala ruta: http://localhost:5000/api/v1/user/me   IDEMO u user.js(routes)

// //N 1: export default router;  IDEMO u app.js
// export default router;

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

// import express from 'express';
// // 2: MENJAMO: { getMyProfile } u  { login }:                             import { login } from '../controllers/user.js';
// import { login } from '../controllers/user.js';

// const router = express.Router();

// // 2: router.post('/login', login);
// router.post('/login', login);

// // 2: INSTALIRAMO 'Postman' i OTVARAMO GA, IDEMO dugme '+' DA KREIRAMO "New Collection" i RENAME u 'KROFFNE' i idemo na URL:'http://localhost:5000' NA GET i stisnemo 'Send'

// // 2: Sad idemo da TESTIRAMO DRUGI URL:"http://localhost:5000/api/v1/user/login" NA POST i stisnemo 'Send'

// // 2:(KRAJ) SAD CEMO SAMO SACUVATI OVU RUTU(URL):'http://localhost:5000/api/v1/user/login' (POST) u FOLDERU 'Auth' KOJI CEMO SAD KREIRATI.
// export default router;

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

// import express from 'express';
// // 2: DODAJEMO: signup: import { login, signup } from '../controllers/user.js';
// import { login, signup } from '../controllers/user.js';

// const router = express.Router();

// router.post('/login', login);

// //N 2: router.post('/new', signup);  PROBA: Sad ga mozemo probati na URL:'http://localhost:5000/api/v1/user/new' i vidimo da radi. Dao nam je 'Register'  IDEMO u user.js(controllers)
// router.post('/new', signup);

// export default router;

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

// import express from 'express';
// // 4:  import { getMyProfile, login, signup } from '../controllers/user.js';
// import { getMyProfile, login, signup } from '../controllers/user.js';
// // 4: import { isAuthenticated } from '../middlewares/auth.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// const router = express.Router();

// router.post('/login', login);

// router.post('/new', signup);

// //N 2: router.get('/me', signup);  IDEMO u user.js(controllers)
// // 4:MENJAMO: signup u getMyProfile i DODAJEMO: isAuthenticated:       router.get('/me',isAuthenticated, getMyProfile);
// router.get('/me', isAuthenticated, getMyProfile);

// //N 4: AKO TESTIRAMO U POSMTANU GET URL:'http://localhost:5000/api/v1/user/me' i stisnemo 'Send' dobijamo: 'Working 2' RADI!  IDEMO u auth.js(middlewares)

// export default router;

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

// import express from 'express';
// // 1:DODAJEMO: logOut: import { getMyProfile, logOut, login, signup } from '../controllers/user.js';
// import { getMyProfile, logOut, login, signup } from '../controllers/user.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// const router = express.Router();

// router.post('/login', login);

// router.post('/new', signup);

// router.get('/me', isAuthenticated, getMyProfile);
// // 2: router.get('/logout', isAuthenticated, logOut);
// router.get('/logout', isAuthenticated, logOut);

// // 2: IDEMO U POSTMAN GET URL:'http://localhost:5000/api/v1/user/logout' i stisnemo 'Send':
// /*
// DOBIJAMO:
// {
//     "success": true,
//     "message": "logged Out Successfully"
// }

// RADI!
// */

// // 2: SAD AKO U POSTMANU ODEMO na Get My Profile i kliknemo 'Send':
// /*
// {
//     "success": false,
//     "message": "Not Logged In"
// }
// DOBRO JE JER SE NISMO LOGOVOALI i SAD IDEMO DA LOGUJEMO na POST login:
// DOBIJAMO:
// {
//     "success": true,
//     "message": "Wellcome Back, Asmir"
// }
// */

// // 2:(KRAJ!) SADA CEMO SACUVATI u POSTMAN URL:'http://localhost:5000/api/v1/user/logout' kao 'Logout' u folderu 'Auth'.

// export default router;

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

// import express from 'express';
// // 2: import { changePassword, getMyProfile, logOut, login, signup, updateProfile } from '../controllers/user.js';
// import {
//   changePassword,
//   getMyProfile,
//   logOut,
//   login,
//   signup,
//   updateProfile,
// } from '../controllers/user.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// const router = express.Router();

// router.post('/login', login);

// router.post('/new', signup);

// router.get('/me', isAuthenticated, getMyProfile);

// router.get('/logout', isAuthenticated, logOut);

// // 2: Updating Routes
// // 2: router.put('/updateprofile', isAuthenticated, updateProfile);
// router.put('/updateprofile', isAuthenticated, updateProfile);
// //N 2: router.put('/updateprofile', isAuthenticated, updatePassword);  IDEMO u users.js(models)
// router.put('/changepassword', isAuthenticated, changePassword);

// export default router;

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

// import express from 'express';
// // 3: DODAJEMO: updatePic
// import {
//   changePassword,
//   getMyProfile,
//   logOut,
//   login,
//   signup,
//   updatePic,
//   updateProfile,
// } from '../controllers/user.js';
// import { isAuthenticated } from '../middlewares/auth.js';
// // 3: import { singleUpload } from '../middlewares/multer.js';
// import { singleUpload } from '../middlewares/multer.js';

// const router = express.Router();

// router.post('/login', login);
// // 3: router.post('/new',singleUpload, signup);
// router.post('/new', singleUpload, signup);

// router.get('/me', isAuthenticated, getMyProfile);

// router.get('/logout', isAuthenticated, logOut);

// //  Updating Routes
// router.put('/updateprofile', isAuthenticated, updateProfile);
// router.put('/changepassword', isAuthenticated, changePassword);
// //N 3: router.put('/updatepic', isAuthenticated, updatePic);  IDEMO u feature.js(utils)
// router.put('/updatepic', isAuthenticated, updatePic);

// export default router;

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

// import express from 'express';
// import {
//   changePassword,
//   getMyProfile,
//   logOut,
//   login,
//   signup,
//   updatePic,
//   updateProfile,
// } from '../controllers/user.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// import { singleUpload } from '../middlewares/multer.js';

// const router = express.Router();

// router.post('/login', login);

// router.post('/new', singleUpload, signup);

// router.get('/me', isAuthenticated, getMyProfile);

// router.get('/logout', isAuthenticated, logOut);

// //  Updating Routes
// router.put('/updateprofile', isAuthenticated, updateProfile);
// router.put('/changepassword', isAuthenticated, changePassword);

// // 2: DODAJEMO: singleUpload: router.put('/updatepic', isAuthenticated, singleUpload, updatePic);
// router.put('/updatepic', isAuthenticated, singleUpload, updatePic);

// // 2: SADA IDEMO U POISMTAN PUT URL:'http://localhost:5000/api/v1/user/updatepic' PA ODEMO U 'Body' pa kliknemo na 'from-data' pa u polje 'Key' unesemo 'file' i stisnemo da je 'File' i u polje 'VALUE' izaberemo sliku koju hocemo. KLIKNEMO na 'Send' i:
// /*
// DOBIJAMO:
// {
//     "success": true,
//     "message": "Avatar Updated Successfully!"
// }

// RADI!
// */

// // 2:(KRAJ!) KREIRACEMO JOS 2 RUTE: Forget Password & Reset Password

// export default router;

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

import express from 'express';
// 2: DODAJEMO: forgetPassword, resetPassword:
import {
  changePassword,
  forgetPassword,
  getMyProfile,
  logOut,
  login,
  resetPassword,
  signup,
  updatePic,
  updateProfile,
} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.post('/login', login);

router.post('/new', singleUpload, signup);

router.get('/me', isAuthenticated, getMyProfile);

router.get('/logout', isAuthenticated, logOut);

//  Updating Routes
router.put('/updateprofile', isAuthenticated, updateProfile);
router.put('/changepassword', isAuthenticated, changePassword);
router.put('/updatepic', isAuthenticated, singleUpload, updatePic);

// Forget Password & Reset Password
// 2:(KRAJ!) router.route('/forgetpassword').post(forgetPassword).put(resetPassword);
router.route('/forgetpassword').post(forgetPassword).put(resetPassword);

export default router;
