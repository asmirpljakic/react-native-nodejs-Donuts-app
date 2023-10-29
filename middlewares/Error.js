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

// //N 3: export const errorMiddleware = (err, req, res, next) => {}  IDEMO u app.js
// export const errorMiddleware = (err, req, res, next) => {
//   //N 9:  err.message = err.message || 'Internal Server Error';   IDEMO u user.js(controllers)
//   err.message = err.message || 'Internal Server Error';

//   // 14: err.statusCode = err.statusCode || 500;
//   err.statusCode = err.statusCode || 500;

//   // 14:(KRAJ!) IDEMO na POSTMAN: POST URL:'http://localhost:5000/api/v1/user/login' DA TESTIRAMO:
//   /*
//   NAMERNO GRESIMO PASSWORD u Body:
//   {
//     "email":"asmir2@gmail.com",
//     "password":"ask2e12342"
// }

// DOBIJAMO:
// {
//     "success": false,
//     "message": "Incorrect Password"
// }

// RADI!
//   */

//   //N 6: res.status(400).json({ success: false, message: 'Incorrect Password' });  IDEMO u user.js(controllers)
//   // 11: MENJAMO: 'Incorrect Password' u  message: err.message :         res.status(400).json({ success: false, message: err.message });
//   res.status(400).json({ success: false, message: err.message });

//   //N 11: KREIRAMO NOVI FAJL:'error.js' u folderu 'utils'. IDEMO u error.js(utils)
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

// export const errorMiddleware = (err, req, res, next) => {
//   err.message = err.message || 'Internal Server Error';
//   err.statusCode = err.statusCode || 500;

//   // 5: console.log(err.code);
//   // console.log(err.code);

//   // 5: if ( err.code === 11000) {
//   if (err.code === 11000) {
//     // 5: NACIN 1: (KAKO DA UZMEMO SAMO IME VARIJABLE): (err.message = `Duplicate ${Object.keys(err.keyValue)} Entered!`),
//     (err.message = `Duplicate ${Object.keys(err.keyValue)} Entered!`),
//       /*
//     DOBIJAMO:
//     {
//     "success": false,
//     "message": "Duplicate 'email' Entered!"
//     }
//     */

//       // 5: NACIN 2: (KAKO DA UZMEMO VREDNOST:) (err.message = `Duplicate '${err.keyValue.email}' Entered!`),

//       // (err.message = `Duplicate '${err.keyValue.email}' Entered!`),
//       /*
//     DOBIJAMO:
//     {
//     "success": false,
//     "message": "Duplicate 'asmir2@gmail.com' Entered!"
//     }
//     */

//       // 5: (err.statusCode = 400);
//       (err.statusCode = 400);

//     // 5:(KRAJ!) IDEMO U POSTMAN POST URL:'http://localhost:5000/api/v1/user/new' i stisnemo 'Send'.
//     /*
//       DOBIJAMO:
//       {
//     "success": false,
//     "message": "Duplicate Value Entered"
// }
//       RADI BETON! */
//   }

//   res.status(400).json({ success: false, message: err.message });
// };

// // 1: export const asyncError =
// export const asyncError =
//   // 1: passedFunc =>

//     passedFunc =>
//     //N 1: (req, res, next) => {};  IDEMO u user.js(controllers)
//     (req, res, next) => {
//       //N 3: Promise.resolve(passedFunc(req, res, next)).catch(next);  IDEMO u user.js(controllers)
//       Promise.resolve(passedFunc(req, res, next)).catch(next);
//     };

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

// export const errorMiddleware = (err, req, res, next) => {
//   err.message = err.message || 'Internal Server Error';
//   err.statusCode = err.statusCode || 500;

//   if (err.code === 11000) {
//     (err.message = `Duplicate ${Object.keys(err.keyValue)} Entered!`),
//       (err.statusCode = 400);
//   }

//   // 7: if (err.name === 'CastError') {
//   if (err.name === 'CastError') {
//     // 7: (err.message = `Invalid ${err.path}`),
//     (err.message = `Invalid ${err.path}`),
//       // 7: (err.statusCode = 400);
//       (err.statusCode = 400);
//   }

//   // 7:(KRAJ!) I SADA GA TESTIRAMO OPET U POSTMAN GET URL:'http://localhost:5000/api/v1/product/single/asdasd' i kliknemo 'Send'
//   /*
//   DOBIJAMO:
// {
//     "success": false,
//     "message": "Invalid _id"
// }

// BRAVO UHVATILI SMO GA :D
// RADI!
// SADA CEMO SACUVATI RUTU KAO:'Get Product Details' u folderu 'Product'
//   */

//   //G 6: AKO STAVIMO OVDE DA NAM VRACA: 'message: err' i ODEMO U POSTMAN GET URL:'http://localhost:5000/api/v1/product/single/asdasd' i kliknemo 'Send'
//   /*
// {
//   DOBIJAMO:

//     "success": false,
//     "message": {
//         "stringValue": "\"asdasd\"",
//         "valueType": "string",
//         "kind": "ObjectId",
//         "value": "asdasd",
//         "path": "_id",
//         "reason": {},
//         "name": "CastError",
//         "message": "Cast to ObjectId failed for value \"asdasd\" (type string) at path \"_id\" for model \"Product\""
//     }

// }

// OVDE NAM JE BITNO OVO: "name": "CastError" i TAKO IDEMO GORE DA UHVATIMO TU GRESKU. VAZNO: VRATICEMO na: message: err.message
// */
//   res.status(400).json({ success: false, message: err.message });
// };

// export const asyncError = passedFunc => (req, res, next) => {
//   Promise.resolve(passedFunc(req, res, next)).catch(next);
// };

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

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || 'Internal Server Error';
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    (err.message = `Duplicate ${Object.keys(err.keyValue)} Entered!`),
      (err.statusCode = 400);
  }

  if (err.name === 'CastError') {
    (err.message = `Invalid ${err.path}`), (err.statusCode = 400);
  }

  // 3: PRVO CEMO IZMENITI OVO ' err.message ' u ' err ' KAD VIDIMO KOJE JE 'name' a to je:'ErrorValidator', VRATICEMO:
  res.status(400).json({ success: false, message: err.message });

  // 3: SAD IDEMO u POSTMAN POST URL:'http://localhost:5000/api/v1/product/category' u 'Body':
  /*

  {
    "category":"Mafini"
  }

  DOBIJAMO:
  {
    "success": true,
    "message": "Category Added Successfully"
}

RADI! DODACEMO JOS KATEGORIJA u 'Body':

{
    "category":"Kuglice"
}

i

{
    "category":"Casice"
}

SACUVACEMO OVU RUTU KAO:'Add Category' u folderu 'Product'
  */

  // 3:(KRAJ!) SAD IDEMO u POSTMAN DELETE URL:'http://localhost:5000/api/v1/product/category' i stisnemo 'Send':
  /*
DOBIJAMO:
{
    "success": true,
    "message": "Category Deleted Successfully!"
}

RADI!
SACUVACEMO OVU RUTU KAO:'Delete Category' u folderu 'Product'
*/
};

export const asyncError = passedFunc => (req, res, next) => {
  Promise.resolve(passedFunc(req, res, next)).catch(next);
};
