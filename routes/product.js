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

// // 2: import express from 'express';
// import express from 'express';
// // 2: import { isAuthenticated } from '../middlewares/auth.js';
// import { isAuthenticated } from '../middlewares/auth.js';
// // 2: import { singleUpload } from '../middlewares/multer.js';
// import { singleUpload } from '../middlewares/multer.js';
// // 3: import { getAllProducts } from '../controllers/project.js';
// // 5: DODAJEMO: getProductDetails
// import { getAllProducts, getProductDetails } from '../controllers/product.js';
// // 2: const router = express.Router();
// const router = express.Router();

// // 2:  router.get('/all')
// // 3: DODAJEMO: getAllProducts: router.get('/all', getAllProducts);
// router.get('/all', getAllProducts);

// //N 3: SAD IDEMO U POSTMAN GET URL:' http://localhost:5000/api/v1/product/all' i KLIKNEMO DUGME 'Send'
// /*
// DOBIJAMO:
// {
//     "success": true,
//     "products": []
// }
// RADI! SADA CEMO SACUVATI OVU RUTU KAO: 'Get All Product' u SAD KREIRANOM folderu 'Product'.    IDEMO U product.js
// */

// // 5: router.route('/single/:id').get(getProductDetails);
// router.route('/single/:id').get(getProductDetails);

// //N 5: SADA CEMO DA TESTIRAMO U POSMTAN GET URL:' http://localhost:5000/api/v1/product/single/asdasd' ZNACI DALI SMO NEKI 'id' RANDOM LUPALI SLOVA:
// /*
// DOBIJAMO:
// {
//     "success": false,
//     "message": "Cast to ObjectId failed for value \"asdasd\" (type string) at path \"_id\" for model \"Product\""
// }
// Sada vidimo ovu gresku i IDEMO da je UHVATIMO u Error.js
// */

// //N 2: KREIRAMO NOVI FAJL:'product.js' u folderu: 'controllers' i IDEMO u product.js(controllers): export default router;
// export default router;

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

// import express from 'express';
// import { isAuthenticated } from '../middlewares/auth.js';
// // 2: import { singleUpload } from '../middlewares/multer.js';
// import { singleUpload } from '../middlewares/multer.js';
// // 2: DODAJEMO: createProduct
// import {
//   createProduct,
//   getAllProducts,
//   getProductDetails,
// } from '../controllers/product.js';
// const router = express.Router();

// router.get('/all', getAllProducts);
// router.route('/single/:id').get(getProductDetails);

// // 2: router.post('/new', isAuthenticated, createProduct);
// router.post('/new', isAuthenticated, singleUpload, createProduct);

// //N 2: IDEMO U POSTMAN POST URL:' http://localhost:5000/api/v1/product/new' i stisnemo 'Send':
// /*
// DOBIJAMO:
// {
//     "success": false,
//     "message": "Cannot read properties of undefined (reading 'originalname')"
// }

// E IDEMO U product.js(controllers) DA TU GRESKU UFATIMO.
// */

// export default router;

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

// import express from 'express';
// import { isAuthenticated } from '../middlewares/auth.js';
// import { singleUpload } from '../middlewares/multer.js';
// // 2: DODAJEMO: updateProduct
// // 4: DODAJEMO: addProductImage
// import {
//   addProductImage,
//   createProduct,
//   getAllProducts,
//   getProductDetails,
//   updateProduct,
// } from '../controllers/product.js';

// const router = express.Router();

// router.get('/all', getAllProducts);

// // 2: DODAJEMO: .put(isAuthenticated, updateProduct);
// router
//   .route('/single/:id')
//   .get(getProductDetails)
//   .put(isAuthenticated, updateProduct);

// // 2: SAD IDEMO U POSTMAN PUT URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4' i KLIKNEMO 'Send':
// /*
//   DOBIJAMO:
//   {
//     "success": true,
//     "message": "Product Updated Successfully!"
// }
//   */

// // 2:  SAD IDEMO U POSTMAN PUT URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4' i u 'Body':
// /*

// {
//     "name": "Popsi"
// }

// Kliknemo 'Send':
// DOBIJAMO:

// {
//     "success": true,
//     "message": "Product Updated Successfully!"
// }
// */

// //N 3: SAD IDEMO U POSTMAN GET URL:'  http://localhost:5000/api/v1/product/all' i KLIKNEMO 'Send':
// /*

// DOBIJAMO STVARNO IZMENJENO IME u 'Popsi':
// {
//     "success": true,
//     "products": [
//         {
//             "_id": "653903eab9f3e03b287e7ff4",
//             "name": "Popsi",
//             "description": "Za rodjendane se koriste najvise! :D",
//             "price": 5700,
//             "stock": 7,
//             "images": [
//                 {
//                     "public_id": "sf3xuwoldxghfnqe1hp3",
//                     "url": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698235374/sf3xuwoldxghfnqe1hp3.jpg",
//                     "_id": "653903eab9f3e03b287e7ff5"
//                 }
//             ],
//             "createdAt": "2023-10-25T12:02:50.377Z",
//             "__v": 0
//         }
//     ]
// }

// SADA CEMO SACUVATI OVU RUTU KAO: 'Update Product' u folderu 'Product'.  IDEMO u product.js(controllers)
// */

// router.post('/new', isAuthenticated, singleUpload, createProduct);

// // 4: router.route('/images/:id').post(isAuthenticated, singleUpload,addProductImage);
// router
//   .route('/images/:id')
//   .post(isAuthenticated, singleUpload, addProductImage);

// // 4:(KRAJ!) SAD IDEMO U POSTMAN POST URL:' http://localhost:5000/api/v1/product/images/653903eab9f3e03b287e7ff4' i u Body:
// /*
//   U 'Key' napisemo 'file a u 'Value' polje izaberemo sliku i kliknemo 'Send':

// {
//     "success": true,
//     "message": "Image Added Successfully!"
// }

// RADI! DODALI SMO SLIKU I SAD U product-u imamo 2 slike. :)
//   */

// export default router;

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

// import express from 'express';
// import { isAuthenticated } from '../middlewares/auth.js';
// import { singleUpload } from '../middlewares/multer.js';
// // 3: DODAJEMO: deleteProductImage
// // 4: DODAJEMO: deleteProduct
// import {
//   addProductImage,
//   createProduct,
//   deleteProduct,
//   deleteProductImage,
//   getAllProducts,
//   getProductDetails,
//   updateProduct,
// } from '../controllers/product.js';

// const router = express.Router();

// router.get('/all', getAllProducts);

// router
//   .route('/single/:id')
//   .get(getProductDetails)
//   //N 4: DODAJEMO: .put(isAuthenticated, updateProduct).delete(isAuthenticated,deleteProduct);  IDEMO u product.js(controllers)
//   .put(isAuthenticated, updateProduct)
//   .delete(isAuthenticated, deleteProduct);

// router.post('/new', isAuthenticated, singleUpload, createProduct);

// //G 3: DODAJEMO: .delete(isAuthenticated,deleteProductImage);
// router
//   .route('/images/:id')
//   .post(isAuthenticated, singleUpload, addProductImage)
//   .delete(isAuthenticated, deleteProductImage);

// export default router;

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

// import express from 'express';
// import { isAuthenticated } from '../middlewares/auth.js';
// import { singleUpload } from '../middlewares/multer.js';
// // 2: DODAJEMO: addCategory, getAllCategory, deleteCategory
// import {
//   addCategory,
//   addProductImage,
//   createProduct,
//   deleteCategory,
//   deleteProduct,
//   deleteProductImage,
//   getAllCategory,
//   getAllProducts,
//   getProductDetails,
//   updateProduct,
// } from '../controllers/product.js';

// const router = express.Router();

// router.get('/all', getAllProducts);

// router
//   .route('/single/:id')
//   .get(getProductDetails)
//   .put(isAuthenticated, updateProduct)
//   .delete(isAuthenticated, deleteProduct);

// router.post('/new', isAuthenticated, singleUpload, createProduct);

// router
//   .route('/images/:id')
//   .post(isAuthenticated, singleUpload, addProductImage)
//   .delete(isAuthenticated, deleteProductImage);

// // 2: router.post('/category',isAuthenticated, addCategory);
// router.post('/category', isAuthenticated, addCategory);

// // 2: router.get('/categories', getAllCategory);
// router.get('/categories', getAllCategory);

// //N 2: router.delete('/category/:id', isAuthenticated, deleteCategory);  IDEMO U Error.js(middlewares)
// router.delete('/category/:id', isAuthenticated, deleteCategory);

// export default router;

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

import express from 'express';
// 2: DODAJEMO: isAdmin
import { isAuthenticated, isAdmin } from '../middlewares/auth.js';
import { singleUpload } from '../middlewares/multer.js';
// 4: DODAJEMO: getAdminProducts
import {
  addCategory,
  addProductImage,
  createProduct,
  deleteCategory,
  deleteProduct,
  deleteProductImage,
  getAdminProducts,
  getAllCategory,
  getAllProducts,
  getProductDetails,
  updateProduct,
} from '../controllers/product.js';

const router = express.Router();

router.get('/all', getAllProducts);
// 4: router.get('/admin', isAuthenticated, isAdmin, getAllProducts);
router.get('/admin', isAuthenticated, isAdmin, getAdminProducts);

// 4: SAD IDEMO U POSTMAN GET URL:' http://localhost:5000/api/v1/product/admin' i stisnemo 'Send':
/*

DOBIJAMO:
{
    "success": false,
    "message": "Only Admin allowed"
}
RADI! I TO JE RAZLOG ZATO STO MI NISMO 'admin' SAMO 'admin' MOZE DA PRISTUPI OVOJ RUTI. :D

ZATO CEMO MI OTICI 'MANUELNO' u BAZU NASU NA LINK:'https://cloud.mongodb.com/v2/64b3d8bf6792e8051315db0a#/metrics/replicaSet/64b3d9ecf112e5612cc6a74a/explorer/Kroffne/users/find' i PROMENITI: 'user' u 'admin' kod Asmir- korisnika :D
*/

// 4:(KRAJ!) E SAD KAD SMO IZMENILI U NASOJ BAZI na 'admin' IDEMO U POSTMAN GET URL:' http://localhost:5000/api/v1/product/admin' i stisnemo 'Send':
/*
DOBIJAMO:
{
    "success": true,
    "products": []
}

RADI! SAD SAM 'admin' i MOGU OVO VIDETI! :D
*/

router
  .route('/single/:id')
  .get(getProductDetails)
  // 2: DODAJEMO: isAdmin
  .put(isAuthenticated, isAdmin, updateProduct)
  // 2: DODAJEMO: isAdmin
  .delete(isAuthenticated, isAdmin, deleteProduct);
// 2: DODAJEMO: isAdmin
router.post('/new', isAuthenticated, isAdmin, singleUpload, createProduct);

router
  .route('/images/:id')
  // 2: DODAJEMO: isAdmin
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  // 2: DODAJEMO: isAdmin
  .delete(isAuthenticated, isAdmin, deleteProductImage);
// 2: DODAJEMO: isAdmin
router.post('/category', isAuthenticated, isAdmin, addCategory);

router.get('/categories', getAllCategory);
//N 2: DODAJEMO: isAdmin  IDEMO u product.js(controllers)
router.delete('/category/:id', isAuthenticated, isAdmin, deleteCategory);

export default router;
