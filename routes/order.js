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

// SAMO KREIRALI FAJL.

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

// // // 2: import express from 'express';
// // import express from 'express';
// // // 2: import { createOrder } from '../controllers/order.js';
// // import { createOrder } from '../controllers/order.js';
// // // 2: import { isAuthenticated } from '../middlewares/auth.js';
// // import { isAuthenticated } from '../middlewares/auth.js';

// // // 2: const router = express.Router();
// // const router = express.Router();

// // // 2: router.post('/new', isAuthenticated, createOrder);
// // router.post('/new', isAuthenticated, createOrder);

// // //N 2: export default router;  IDEMO app.js(globalni)
// // export default router;

// //
// //
// //
// //
// //
// //________ 83. Orders Remaining API ________
// //
// //
// //
// //
// //
// //

// import express from 'express';
// // 2: DODAJEMO: getMyOrders, getAdminOrders
// // 4: DODAJEMO: getOrderDetails, proccessOrder
// import {
//   createOrder,
//   getAdminOrders,
//   getMyOrders,
//   getOrderDetails,
//   proccessOrder,
// } from '../controllers/order.js';
// // 2: DODAJEMO: isAdmin
// import { isAdmin, isAuthenticated } from '../middlewares/auth.js';

// const router = express.Router();

// router.post('/new', isAuthenticated, createOrder);

// // 2: router.get('/my',isAuthenticated, getMyOrders);
// router.get('/my', isAuthenticated, getMyOrders);

// // 2: router.get('/my', isAuthenticated,isAdmin, getAdminOrders);
// router.get('/admin', isAuthenticated, isAdmin, getAdminOrders);

// //N 2: SAD IDEMO U POSTMAN GET URL:'http://localhost:5000/api/v1/order/my' i stisnemo 'Send':
// /*

// DOBIJAMO:
// {
//     "success": true,
//     "orders": [
//         {
//             "shippingInfo": {
//                 "address": "Vojkovacka bb",
//                 "city": "Novi Pazar",
//                 "country": "Serbia",
//                 "pinCode": 36300
//             },
//             "_id": "653cc8f161cab7f4f3347fff",
//             "orderItems": [
//                 {
//                     "name": "Cokolate Box",
//                     "price": 5700,
//                     "quantity": 1,
//                     "image": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                     "product": "653ba8c54f85879e940972f4",
//                     "_id": "653cc8f161cab7f4f3348000"
//                 }
//             ],
//             "user": "65368a8685f3dcdd1024cb78",
//             "paymentMethod": "COD",
//             "taxPrice": 150,
//             "shippingCharges": 100,
//             "totalAmount": 1450,
//             "orderStatus": "Preparing",
//             "createdAt": "2023-10-28T08:40:17.827Z",
//             "__v": 0
//         }
//     ]
// }

// RADI!
// SACUVACEMO OVU RUTU KAO:'Get My Orders' u folderu 'Order'.  IDEMO u order.js(controllers)
// */

// // 4: router
// router
//   // 4: .route('/single/:id')
//   .route('/single/:id')
//   // 4: .get(isAuthenticated, getOrderDetails)
//   .get(isAuthenticated, getOrderDetails)
//   // 4: .put(isAuthenticated, isAdmin, proccessOrder);
//   .put(isAuthenticated, isAdmin, proccessOrder);

// // 4:(KRAJ!) OVDE VEZBAMO STANJA:'Preparing','Shipped','Delivered' i SAD IDEMO U POSTMAN DA TO PROVERIMO: GET URL:'http://localhost:5000/api/v1/order/single/653cc8f161cab7f4f3347fff' i stisnemo 'Send':
// /*

//   DOBIJAMO:
//   {
//     "success": true,
//     "order": {
//         "shippingInfo": {
//             "address": "Vojkovacka bb",
//             "city": "Novi Pazar",
//             "country": "Serbia",
//             "pinCode": 36300
//         },
//         "_id": "653cc8f161cab7f4f3347fff",
//         "orderItems": [
//             {
//                 "name": "Cokolate Box",
//                 "price": 5700,
//                 "quantity": 1,
//                 "image": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                 "product": "653ba8c54f85879e940972f4",
//                 "_id": "653cc8f161cab7f4f3348000"
//             }
//         ],
//         "user": "65368a8685f3dcdd1024cb78",
//         "paymentMethod": "COD",
//         "taxPrice": 150,
//         "shippingCharges": 100,
//         "totalAmount": 1450,
//         "orderStatus": "Preparing",
//         "createdAt": "2023-10-28T08:40:17.827Z",
//         "__v": 0,
//         "deliveredAt": "2023-10-28T10:41:01.696Z"
//     }
// }

// RADI!
// OVDE JE BITNO SAMO OVO DA GLEDAMO: "orderStatus": "Preparing" i tako uvek idemo GET URL:'http://localhost:5000/api/v1/order/single/653cc8f161cab7f4f3347fff' pa PUT URL:'http://localhost:5000/api/v1/order/single/653cc8f161cab7f4f3347fff' u VIDIMO DA SE STANJA MENJAJU iz 'Preparing' U 'Shipped'. Ako URADIMO OPET GET ISTI URL PA PUT ISTI URL VIDIMO DA SE PROMENIO U 'Delivered'

// {
//     "success": true,
//     "order": {
//         "shippingInfo": {
//             "address": "Vojkovacka bb",
//             "city": "Novi Pazar",
//             "country": "Serbia",
//             "pinCode": 36300
//         },
//         "_id": "653cc8f161cab7f4f3347fff",
//         "orderItems": [
//             {
//                 "name": "Cokolate Box",
//                 "price": 5700,
//                 "quantity": 1,
//                 "image": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                 "product": "653ba8c54f85879e940972f4",
//                 "_id": "653cc8f161cab7f4f3348000"
//             }
//         ],
//         "user": "65368a8685f3dcdd1024cb78",
//         "paymentMethod": "COD",
//         "taxPrice": 150,
//         "shippingCharges": 100,
//         "totalAmount": 1450,
//         "orderStatus": "Delivered",
//         "createdAt": "2023-10-28T08:40:17.827Z",
//         "__v": 0,
//         "deliveredAt": "2023-10-28T10:41:01.696Z"
//     }
// }

// VAZNO: E SAD AKO OPET ODEMO PUT URL: 'http://localhost:5000/api/v1/order/single/653cc8f161cab7f4f3347fff' i stisnemo 'Send' a vec je bio stanje 'Delivered':

// DOBIJAMO:

// {
//     "success": false,
//     "message": "Order Already Delivered"
// }

// RADI PERFEKTNO!
// SACUVACEMO OVU RUTU KAO: 'Proccess Order' u folderu 'Order'
//   */

// export default router;

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

// // 2: import express from 'express';
// import express from 'express';
// // 2: import { createOrder } from '../controllers/order.js';
// import { createOrder } from '../controllers/order.js';
// // 2: import { isAuthenticated } from '../middlewares/auth.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// // 2: const router = express.Router();
// const router = express.Router();

// // 2: router.post('/new', isAuthenticated, createOrder);
// router.post('/new', isAuthenticated, createOrder);

// //N 2: export default router;  IDEMO app.js(globalni)
// export default router;

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

import express from 'express';
// 4: DODAJEMO: processPayment
import {
  createOrder,
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  proccessOrder,
  processPayment,
} from '../controllers/order.js';

import { isAdmin, isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/new', isAuthenticated, createOrder);
// 4: router.post('/payment', isAuthenticated, processPayment);
router.post('/payment', isAuthenticated, processPayment);

// 4:(KRAJ!) SAD IDEMO U POSTMAN POST URL:'http://localhost:5000/api/v1/order/payment' i u 'Body':
/*

{
    "totalAmount":4750
}
i stisnemo 'Send':

DOBIJAMO:
{
    "success": true,
    "client_secret": "pi_3O6TFKHX4sk2mQEp1xrBORbU_secret_NQMBBn9jQHxmpQg7O4SoHItV0"
}

RADI!
  */

router.get('/my', isAuthenticated, getMyOrders);

router.get('/admin', isAuthenticated, isAdmin, getAdminOrders);

router
  .route('/single/:id')
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, isAdmin, proccessOrder);

export default router;
