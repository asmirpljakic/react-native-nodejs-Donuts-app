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

// // 1: import { asyncError } from '../middlewares/Error.js';
// import { asyncError } from '../middlewares/Error.js';
// // 1: import { Order } from '../models/order.js';
// import { Order } from '../models/order.js';
// // 1: import { Product } from '../models/product.js';
// import { Product } from '../models/product.js';

// // 1: export const createOrder = asyncError(async (req, res, next) => {
// export const createOrder = asyncError(async (req, res, next) => {
//   // 1: const {shippingInfo, orderItems, paymentMethod, paymentInfo, itemsPrice, taxPrice, shippingCharges, totalAmount} = req.body;
//   const {
//     shippingInfo,
//     orderItems,
//     paymentMethod,
//     paymentInfo,
//     itemsPrice,
//     taxPrice,
//     shippingCharges,
//     totalAmount,
//   } = req.body;

//   // 1: await Order.create({
//   await Order.create({
//     // 1: user: req.user._id,
//     user: req.user._id,
//     // 1: shippingInfo,
//     shippingInfo,
//     // 1: orderItems,
//     orderItems,
//     // 1: paymentMethod,
//     paymentMethod,
//     // 1: paymentInfo,
//     paymentInfo,
//     // 1: itemsPrice,
//     itemsPrice,
//     // 1: taxPrice,
//     taxPrice,
//     // 1: shippingCharges,
//     shippingCharges,
//     // 1: totalAmount,
//     totalAmount,
//   });

//   // 1:  for (let i = 0; i < orderItems.length; i++) {
//   for (let i = 0; i < orderItems.length; i++) {
//     // 1: const product = await Product.findById(orderItems[i].product);
//     const product = await Product.findById(orderItems[i].product);
//     // 1:  product.stock -= orderItems[i].quantity;
//     product.stock -= orderItems[i].quantity;
//     // 1: await product.save();
//     await product.save();
//   }

//   // 1: res.status(201).json({
//   res.status(201).json({
//     // 1: success: true,
//     success: true,
//     //N 1: message: 'Order Placed Successfully', IDEMO u order.js(routes)
//     message: 'Order Placed Successfully',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Order } from '../models/order.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';

// export const createOrder = asyncError(async (req, res, next) => {
//   const {
//     shippingInfo,
//     orderItems,
//     paymentMethod,
//     paymentInfo,
//     itemsPrice,
//     taxPrice,
//     shippingCharges,
//     totalAmount,
//   } = req.body;

//   await Order.create({
//     user: req.user._id,
//     shippingInfo,
//     orderItems,
//     paymentMethod,
//     paymentInfo,
//     itemsPrice,
//     taxPrice,
//     shippingCharges,
//     totalAmount,
//   });

//   for (let i = 0; i < orderItems.length; i++) {
//     const product = await Product.findById(orderItems[i].product);
//     product.stock -= orderItems[i].quantity;
//     await product.save();
//   }

//   res.status(201).json({
//     success: true,
//     message: 'Order Placed Successfully',
//   });
// });

// // 1: export const getAdminOrders = asyncError(async (req, res, next) => {
// export const getAdminOrders = asyncError(async (req, res, next) => {
//   // 1: const orders = await Order.find({ user: req.user._id });
//   const orders = await Order.find({});

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     // 1: orders,
//     orders,
//   });

//   // 1: SAD IDEMO U POSTMAN GET URL:'http://localhost:5000/api/v1/order/admin' i kliknemo 'Send':

//   /*

//   DOBIJAMO:
//   {
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
//         },
//         {
//             "shippingInfo": {
//                 "address": "Vojkovacka bb",
//                 "city": "Novi Pazar",
//                 "country": "Serbia",
//                 "pinCode": 36300
//             },
//             "_id": "653cd86d3b410b6996a447bf",
//             "orderItems": [
//                 {
//                     "name": "Cokolate Box",
//                     "price": 5700,
//                     "quantity": 1,
//                     "image": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                     "product": "653ba8c54f85879e940972f4",
//                     "_id": "653cd86d3b410b6996a447c0"
//                 }
//             ],
//             "user": "65368a8685f3dcdd1024cb78",
//             "paymentMethod": "COD",
//             "taxPrice": 150,
//             "shippingCharges": 100,
//             "totalAmount": 1450,
//             "orderStatus": "Preparing",
//             "createdAt": "2023-10-28T09:46:21.534Z",
//             "__v": 0
//         }
//     ]
// }

// RADI!
// SACUVACEMO OVU RUTU KAO:'Get Admin Orders' u folderu 'Order'
//   */
// });

// // 1: export const getMyOrders = asyncError(async (req, res, next) => {
// export const getMyOrders = asyncError(async (req, res, next) => {
//   // 1: const orders = await Order.find({ user: req.user._id });
//   const orders = await Order.find({ user: req.user._id });

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     // 1: orders,
//     orders,
//   });
// });

// // 3:  export const getOrderDetails = asyncError(async (req, res, next) => {
// export const getOrderDetails = asyncError(async (req, res, next) => {
//   // 3: const order = await Order.findById(req.params.id);
//   const order = await Order.findById(req.params.id);

//   // 3: if (!order) return next(new ErrorHandler('Order Not Found!', 404));
//   if (!order) return next(new ErrorHandler('Order Not Found!', 404));

//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     // 3: order,
//     order,
//   });

//   // 3: SAD IDEMO U POSTMAN GET URL:'http://localhost:5000/api/v1/order/single/653cd86d3b410b6996a447bf' i kliknemo 'Send':
//   /*

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
//         "_id": "653cd86d3b410b6996a447bf",
//         "orderItems": [
//             {
//                 "name": "Cokolate Box",
//                 "price": 5700,
//                 "quantity": 1,
//                 "image": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                 "product": "653ba8c54f85879e940972f4",
//                 "_id": "653cd86d3b410b6996a447c0"
//             }
//         ],
//         "user": "65368a8685f3dcdd1024cb78",
//         "paymentMethod": "COD",
//         "taxPrice": 150,
//         "shippingCharges": 100,
//         "totalAmount": 1450,
//         "orderStatus": "Preparing",
//         "createdAt": "2023-10-28T09:46:21.534Z",
//         "__v": 0
//     }
// }

// RADI!
// SACUVACEMO OVU RUTU KAO:'Get Order Details' u folderu 'Order'
//   */
// });

// // 3:  export const getOrderDetails = asyncError(async (req, res, next) => {
// export const proccessOrder = asyncError(async (req, res, next) => {
//   // 3: const order = await Order.findById(req.params.id);
//   const order = await Order.findById(req.params.id);

//   // 3: if (!order) return next(new ErrorHandler('Order Not Found!', 404));
//   if (!order) return next(new ErrorHandler('Order Not Found!', 404));

//   // 3: if (order.orderStatus === 'Preparing') order.orderStatus = 'Shipped';
//   if (order.orderStatus === 'Preparing') order.orderStatus = 'Shipped';
//   // 3: else if (order.orderStatus === 'Shipped') {
//   else if (order.orderStatus === 'Shipped') {
//   // 3: order.orderStatus = 'Delivered';
//     order.orderStatus = 'Delivered';
//   // 3: order.deliveredAt = new Date(Date.now());
//     order.deliveredAt = new Date(Date.now());
//   }
//   // 3: else {
//   else {
//     // 3: return next(new ErrorHandler('Order Already Delivered', 400))
//     return next(new ErrorHandler('Order Already Delivered', 400));
//   }
//   // 3: await order.save();
//   await order.save();

//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     //N 3: message: 'Order Process Successfully!',  IDEMO u order.js(routes)
//     message: 'Order Process Successfully!',
//   });
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

// 3: import { stripe } from '../server.js';
import { stripe } from '../server.js';
import { asyncError } from '../middlewares/Error.js';
import { Order } from '../models/order.js';
import { Product } from '../models/product.js';
import ErrorHandler from '../utils/error.js';

// 3: export const processPayment = asyncError(async (req, res, next) => {
export const processPayment = asyncError(async (req, res, next) => {
  // 3:
  const { totalAmount } = req.body;

  // 3: const { client_secret } = await stripe.paymentIntents.create({
  const { client_secret } = await stripe.paymentIntents.create({
    // 3: amount: Number(totalAmount * 100),
    amount: Number(totalAmount * 100),
    // 3: currency: 'RSD',
    currency: 'RSD',
  });
  // 3: res.status(200).json({
  res.status(200).json({
    // 3: success:true,
    success: true,
    //N 3: client_secret  IDEMO u order.js(routes)
    client_secret,
  });
});

export const createOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  await Order.create({
    user: req.user._id,
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  });

  for (let i = 0; i < orderItems.length; i++) {
    const product = await Product.findById(orderItems[i].product);
    product.stock -= orderItems[i].quantity;
    await product.save();
  }

  res.status(201).json({
    success: true,
    message: 'Order Placed Successfully',
  });
});

export const getAdminOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({});

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler('Order Not Found!', 404));

  res.status(200).json({
    success: true,
    order,
  });
});

export const proccessOrder = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler('Order Not Found!', 404));

  if (order.orderStatus === 'Preparing') order.orderStatus = 'Shipped';
  else if (order.orderStatus === 'Shipped') {
    order.orderStatus = 'Delivered';
    order.deliveredAt = new Date(Date.now());
  } else {
    return next(new ErrorHandler('Order Already Delivered', 400));
  }
  await order.save();

  res.status(200).json({
    success: true,
    message: 'Order Process Successfully!',
  });
});
