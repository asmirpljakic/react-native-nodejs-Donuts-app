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

// // 3: import { asyncError } from '../middlewares/Error.js';
// import { asyncError } from '../middlewares/Error.js';
// // 3: import { Product } from "../models/product";
// import { Product } from '../models/product.js';
// // 4: import ErrorHandler from '../utils/error.js';
// import ErrorHandler from '../utils/error.js';
// // 3: export const getAllProducts = asyncError(async (req, res, next) => {
// export const getAllProducts = asyncError(async (req, res, next) => {
//   // 3: Searcg & Category query:

//   // 3: const products = await Product.find({});
//   const products = await Product.find({});

//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     //N 3: products,  IDEMO u product.js(routres)
//     products,
//   });
// });

// // 4: export const getProductDetails = asyncError(async (req, res, next) => {
// export const getProductDetails = asyncError(async (req, res, next) => {
//   // 4:  const product = await Product.findById(req.params.id);
//   const product = await Product.findById(req.params.id);

//   // 4: if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   // 4: res.status(200).json({
//   res.status(200).json({
//     // 4: success: true,
//     success: true,
//     //N 4: products,  IDEMO u product.js(routres)
//     product,
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// // 1: import { getDataUri } from '../utils/features.js';
// import { getDataUri } from '../utils/features.js';
// // 1: import cloudinary from 'cloudinary';
// import cloudinary from 'cloudinary';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:

//   const products = await Product.find({});

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// export const getProductDetails = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// // 1: export const createProduct = asyncError(async (req, res, next) => {
// export const createProduct = asyncError(async (req, res, next) => {
//   // 1: const { name, description, category, price, stock } = req.body;
//   const { name, description, category, price, stock } = req.body;

//   // 3: if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   // 3: SAD OPET PROBAMO U POSTMANU POST URL:' http://localhost:5000/api/v1/product/new' i stisnemo 'Send'
//   /*
//   DOBIJAMO:
// {
//     "success": false,
//     "message": "Please add image!"
// }

// E SAD RADI! UFATILI SMO TU GRESKU! :D
//   */

//   // 3: SAD POPUNJAVAMO SVE U 'Key': name, description, price, stock, file(Odabiramo pored 'File') i SVE U 'Value' (redom sta hocemo):
//   /*
// DOBIJAMO:
// {
//     "success": true,
//     "message": "Product Created Successfully!"
// }

// RADI!
// */

//   // 3: SACUVACEMO SAD OVU RUTU KAO: 'New Product' u folderu 'Product'.

//   // 3: SAD CEMO PROVERITI SVE PROIZVODE U POSTMAN GET ' http://localhost:5000/api/v1/product/all' i kliknemo 'Send':
//   /*
// DOBIJAMO:
// {
//     "success": true,
//     "products": [
//         {
//             "_id": "653903eab9f3e03b287e7ff4",
//             "name": "Box",
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

// RADI!
// */

//   // 3:(KRAJ!) SADA AKO KOPIRAMO '_id' OD NASEG PRODUCT-a(proizvoda) U POSTMAN GET URL: 'http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4'  kliknemo na 'Send':
//   /*
// DOBIJAMO TAJ PROIZVOD:
// {
//     "success": true,
//     "product": {
//         "_id": "653903eab9f3e03b287e7ff4",
//         "name": "Box",
//         "description": "Za rodjendane se koriste najvise! :D",
//         "price": 5700,
//         "stock": 7,
//         "images": [
//             {
//                 "public_id": "sf3xuwoldxghfnqe1hp3",
//                 "url": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698235374/sf3xuwoldxghfnqe1hp3.jpg",
//                 "_id": "653903eab9f3e03b287e7ff5"
//             }
//         ],
//         "createdAt": "2023-10-25T12:02:50.377Z",
//         "__v": 0
//     }
// }

// RADI!
// */

//   // 1:  const file = getDataUri(req.file);
//   const file = getDataUri(req.file);
//   // 1: const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   // 1: const image = {
//   const image = {
//     // 1: public_id: myCloud.public_id,
//     public_id: myCloud.public_id,
//     // 1: url: myCloud.secure_url,
//     url: myCloud.secure_url,
//   };

//   // 1: await Product.create({
//   await Product.create({
//     // 1: name,
//     name,
//     // 1: description,
//     description,
//     // 1: category,
//     category,
//     // 1: price,
//     price,
//     // 1: stock,
//     stock,
//     // 1: images: [image],
//     images: [image],
//   });

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     //N 1: message:'Product Created Successfully!'  IDEMO u product.js(routes)
//     message: 'Product Created Successfully!',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// import { getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:

//   const products = await Product.find({});

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// export const getProductDetails = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// export const createProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await Product.create({
//     name,
//     description,
//     category,
//     price,
//     stock,
//     images: [image],
//   });

//   res.status(200).json({
//     success: true,
//     message: 'Product Created Successfully!',
//   });
// });

// // 1: export const updateProduct = asyncError(async (req, res, next) => {
// export const updateProduct = asyncError(async (req, res, next) => {
//   // 1: const { name, description, category, price, stock } = req.body;
//   const { name, description, category, price, stock } = req.body;

//   // 1: const product = await Product.findById(req.params.id);
//   const product = await Product.findById(req.params.id);
//   // 1: if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   // 1: if (name) product.name = name;
//   if (name) product.name = name;
//   // 1: if (description) product.description = description;
//   if (description) product.description = description;
//   // 1: if (category) product.category = category;
//   if (category) product.category = category;
//   // 1: if (price) product.price = price;
//   if (price) product.price = price;
//   // 1: if (stock) product.stock = stock;
//   if (stock) product.stock = stock;

//   // 1: await product.save();
//   await product.save();

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     //N 1: message: 'Product Updated Successfully!',  IDEMO u product.js(routes)
//     message: 'Product Updated Successfully!',
//   });
// });

// // 3: export const addProductImage = asyncError(async (req, res, next) => {
// export const addProductImage = asyncError(async (req, res, next) => {
//   // 3: const product = await Product.findById(req.params.id);
//   const product = await Product.findById(req.params.id);
//   // 3: if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   // 3:   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   // 3: const file = getDataUri(req.file);
//   const file = getDataUri(req.file);
//   // 3: const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   // 3: const image = {
//   const image = {
//     // 3: public_id: myCloud.public_id,
//     public_id: myCloud.public_id,
//     // 3: url: myCloud.secure_url,
//     url: myCloud.secure_url,
//   };

//   // 3: product.images.push(image);
//   product.images.push(image);
//   // 3: await product.save();
//   await product.save();

//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     //N 3: message: 'Image Added Successfully!',  IDEMO u product.js(routes)
//     message: 'Image Added Successfully!',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// import { getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:

//   const products = await Product.find({});

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// export const getProductDetails = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// export const createProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await Product.create({
//     name,
//     description,
//     category,
//     price,
//     stock,
//     images: [image],
//   });

//   res.status(200).json({
//     success: true,
//     message: 'Product Created Successfully!',
//   });
// });

// export const updateProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   if (name) product.name = name;
//   if (description) product.description = description;
//   if (category) product.category = category;
//   if (price) product.price = price;
//   if (stock) product.stock = stock;

//   await product.save();

//   res.status(200).json({
//     success: true,
//     message: 'Product Updated Successfully!',
//   });
// });

// export const addProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   product.images.push(image);
//   await product.save();

//   res.status(200).json({
//     success: true,
//     message: 'Image Added Successfully!',
//   });
// });

// // 1: export const deleteProductImage = asyncError(async (req, res, next) => {
// export const deleteProductImage = asyncError(async (req, res, next) => {
//   // 1: const product = await Product.findById(req.params.id);
//   const product = await Product.findById(req.params.id);

//   // 1:  if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   // 1: const id = req.query.id;
//   const id = req.query.id;

//   // 1: if (!id) return next(new ErrorHandler('Please Image Id', 400));
//   if (!id) return next(new ErrorHandler('Please Image Id', 400));

//   // 1: let isExist = -1;
//   let isExist = -1;

//   // 1: product.images.forEach((item, index) => {
//   product.images.forEach((item, index) => {
//     // 1: if (item._id.toString() === id.toString()) isExist = index;
//     if (item._id.toString() === id.toString()) isExist = index;
//   });

//   // 2:  if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));
//   if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));

//   // 2: await cloudinary.v2.uploader.destroy(product.iages[isExist].public_id);
//   await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);

//   // 2: product.images.splice(isExist, 1);
//   product.images.splice(isExist, 1);

//   // 2: await product.save();
//   await product.save();

//   //N 2: IDEMO U POSTMAN DELETE URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4?id=653903eab9f3e03b287e7ff5' i kliknemo 'Send'
//   /*
//   DOBIJAMO:
//   {
//     "success": true,
//     "message": "Image Deleted Successfully!"
// }
// // DA VIDIMO NA: 'https://console.cloudinary.com/console/c-fe73b3a884a5201b7b67121549ab22/media_library/folders/home' i JESTE!
// SACUVACEMO OVU RUTU KAO:'Delete Product Image'. IDEMO u product.js(routes)
//   */

//   // 1: console.log(isExist)
//   console.log(isExist);

//   // 1: IDEMO U POSTMAN POST URL:' http://localhost:5000/api/v1/product/images/653903eab9f3e03b287e7ff4' i SACUVACEMO OVU RUTU KAO: 'Add Product Image' u folderu 'Product'

//   //G 1: IDEMO U POSTMAN DELETE URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4?id=653903eab9f3e03b287e7ff5' i u 'Paprams' u polje 'Key' pisemo 'id' a u 'Value' pisemo:'653903eab9f3e03b287e7ff5' stisnemo 'Send' i DOBIJAMO:
//   /*
//   {
//     "success": true,
//     "message": "Image Deleted Successfully!"
// }
// I u konzoli u TERMINALU dobijamo: '0' i vidimo da je DOBRO JER JE TO INDEX: 0, Za drugi id kad ubacimo: '65394525a13b0715ef36b2c5' u ovu putanju u POSMTANU DELETE URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4?id=65394525a13b0715ef36b2c5'
//   */

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success: true,
//     success: true,
//     // 1:  message: 'Image Deleted Successfully!',
//     message: 'Image Deleted Successfully!',
//   });
// });

// // 5: export const deleteProduct = asyncError(async (req, res, next) => {
// export const deleteProduct = asyncError(async (req, res, next) => {
//   // 5: const product = await Product.findById(req.params.id);
//   const product = await Product.findById(req.params.id);

//   // 5:  if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   // 5: for (let index = 0; index < product.images.length; index++) {
//   for (let index = 0; index < product.images.length; index++) {
//     // 5: await cloudinary.v2.uploader.destroy(product.images[index].public_id);
//     await cloudinary.v2.uploader.destroy(product.images[index].public_id);
//   }

//   // 5: VAZNO: product.remove() je ZASTARALA metoda i ZAMENJENA JE SA deleteOne(): await product.deleteOne();;
//   await product.deleteOne();
//   // 5: res.status(200).json({
//   res.status(200).json({
//     // 5: success: true,
//     success: true,
//     // 5:  message: 'Product Deleted Successfully!',
//     message: 'Product Deleted Successfully!',
//   });

//   // 5: IDEMO U POSTMAN DELETE URL:' http://localhost:5000/api/v1/product/single/653903eab9f3e03b287e7ff4' i kliknemo na 'Send':
//   /*

//   DOBIJAMO:

//   {
//     "success": true,
//     "message": "Product Deleted Successfully!"
//   }
// RADI! IZBRISALI SMO PROIZVOD CEO LIKEE :D
// SADA CEMO SACUVATI RUTU KAO: 'Delete Product' u folderu 'Product'
//   */

//   // 5:(KRAJ!) Ako sad u POSTMANU ODEMO na 'Get All Products' GET URL:' http://localhost:5000/api/v1/product/all' i kliknemo 'Send'
//   /*

//   DOBIJAMO:

// {
//     "success": true,
//     "products": []
// }

//   RADI! Sad vidimo da smo izbrisali ceo product iz nase baze i sobzirom da smo imali 1 proizvod vise nemamo nista :D*/
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// import { getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';
// // 1: import {Category} from '../models/category.js';
// import { Category } from '../models/category.js';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:

//   const products = await Product.find({});

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// export const getProductDetails = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// export const createProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await Product.create({
//     name,
//     description,
//     category,
//     price,
//     stock,
//     images: [image],
//   });

//   res.status(200).json({
//     success: true,
//     message: 'Product Created Successfully!',
//   });
// });

// export const updateProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   if (name) product.name = name;
//   if (description) product.description = description;
//   if (category) product.category = category;
//   if (price) product.price = price;
//   if (stock) product.stock = stock;

//   await product.save();

//   res.status(200).json({
//     success: true,
//     message: 'Product Updated Successfully!',
//   });
// });

// export const addProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   product.images.push(image);
//   await product.save();

//   res.status(200).json({
//     success: true,
//     message: 'Image Added Successfully!',
//   });
// });

// export const deleteProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   const id = req.query.id;

//   if (!id) return next(new ErrorHandler('Please Image Id', 400));

//   let isExist = -1;

//   product.images.forEach((item, index) => {
//     if (item._id.toString() === id.toString()) isExist = index;
//   });

//   if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));

//   await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);

//   product.images.splice(isExist, 1);

//   await product.save();

//   console.log(isExist);

//   res.status(200).json({
//     success: true,
//     message: 'Image Deleted Successfully!',
//   });
// });

// export const deleteProduct = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   for (let index = 0; index < product.images.length; index++) {
//     await cloudinary.v2.uploader.destroy(product.images[index].public_id);
//   }
//   await product.deleteOne();
//   res.status(200).json({
//     success: true,
//     message: 'Product Deleted Successfully!',
//   });
// });

// // 1: export const addCategory = asyncError(async (req, res, next) => {});
// export const addCategory = asyncError(async (req, res, next) => {
//   // 1: await Category.create(req.body);
//   await Category.create(req.body);
//   // 1: res.status(201).json({
//   res.status(201).json({
//     // 1: success: true,
//     success: true,
//     // 1: message: 'Category Added Successfully',
//     message: 'Category Added Successfully',
//   });
// });

// // 1: export const getAllCategory = asyncError(async (req, res, next) => {});
// export const getAllCategory = asyncError(async (req, res, next) => {
//   // 1: const categories = await Category.find({});
//   const categories = await Category.find({});

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success:true,
//     success: true,
//     // 1: categories,
//     categories,
//   });
// });

// // 1: export const deleteCategory = asyncError(async (req, res, next) => {});
// export const deleteCategory = asyncError(async (req, res, next) => {
//   // 1: const category = await Category.findById(req.params.id);
//   const category = await Category.findById(req.params.id);

//   // 1: if (!category) return next(new ErrorHandler('Category Not Found!', 404));
//   if (!category) return next(new ErrorHandler('Category Not Found!', 404));

//   // 1: const products = await Product.find({ category: category._id });
//   const products = await Product.find({ category: category._id });

//   // 1: for (let i = 0; i < products.length; i++) {
//   for (let i = 0; i < products.length; i++) {
//     // 1: const product = products[i];
//     const product = products[i];
//     // 1: product.category = undefined;
//     product.category = undefined;
//     // 1: await product.save();
//     await product.save();
//   }

//   // 1: await category.deleteOne();
//   await category.deleteOne();

//   // 1: res.status(200).json({
//   res.status(200).json({
//     // 1: success:true,
//     success: true,
//     // 1: message:'Category Deleted Successfully!'
//     message: 'Category Deleted Successfully!',
//   });

//   //N 1: SAD IDEMO u POSTMAN GET URL:' http://localhost:5000/api/v1/product/categories' i stisnemo 'Send'
//   /*
//   DOBIJAMO:
//   {
//     "success": true,
//     "categories": []
// }

// RADI!
//  SACUVACEMO OVU RUTU KAO:'Get All Categories' u folderu 'Product' */
// });

// //N 1: SAD IDEMO u POSTMAN GET URL:'  http://localhost:5000/api/v1/product/category' i stisnemo 'Send'
// /*
// DOBIJAMO:
// {
//     "success": false,
//     "message": "Category validation failed: category: Please Enter Category"
// }

// RADI!

// IDEMO SAD U product.js(routes)

// PA POSLE CEMO DA UFATIMO GRESKU U Error.js(middlewares)
// */

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// import { getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// import { Category } from '../models/category.js';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:

//   const products = await Product.find({});

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// // 3: export const getAdminProducts = asyncError(async (req, res, next) => {
// export const getAdminProducts = asyncError(async (req, res, next) => {
//   // 3: const products = await Product.find({});
//   const products = await Product.find({});
//   // 3: res.status(200).json({
//   res.status(200).json({
//     // 3: success: true,
//     success: true,
//     //N 3:  products, IDEMO U product.js(routes)
//     products,
//   });
// });

// export const getProductDetails = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// export const createProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await Product.create({
//     name,
//     description,
//     category,
//     price,
//     stock,
//     images: [image],
//   });

//   res.status(200).json({
//     success: true,
//     message: 'Product Created Successfully!',
//   });
// });

// export const updateProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (name) product.name = name;
//   if (description) product.description = description;
//   if (category) product.category = category;
//   if (price) product.price = price;
//   if (stock) product.stock = stock;

//   await product.save();
//   res.status(200).json({
//     success: true,
//     message: 'Product Updated Successfully!',
//   });
// });

// export const addProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   product.images.push(image);
//   await product.save();
//   res.status(200).json({
//     success: true,
//     message: 'Image Added Successfully!',
//   });
// });

// export const deleteProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   const id = req.query.id;
//   if (!id) return next(new ErrorHandler('Please Image Id', 400));
//   let isExist = -1;
//   product.images.forEach((item, index) => {
//     if (item._id.toString() === id.toString()) isExist = index;
//   });
//   if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));
//   await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);
//   product.images.splice(isExist, 1);
//   await product.save();
//   console.log(isExist);
//   res.status(200).json({
//     success: true,
//     message: 'Image Deleted Successfully!',
//   });
// });

// export const deleteProduct = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   for (let index = 0; index < product.images.length; index++) {
//     await cloudinary.v2.uploader.destroy(product.images[index].public_id);
//   }
//   await product.deleteOne();
//   res.status(200).json({
//     success: true,
//     message: 'Product Deleted Successfully!',
//   });
// });

// export const addCategory = asyncError(async (req, res, next) => {
//   await Category.create(req.body);
//   res.status(201).json({
//     success: true,
//     message: 'Category Added Successfully',
//   });
// });

// export const getAllCategory = asyncError(async (req, res, next) => {
//   const categories = await Category.find({});

//   res.status(200).json({
//     success: true,
//     categories,
//   });
// });

// export const deleteCategory = asyncError(async (req, res, next) => {
//   const category = await Category.findById(req.params.id);

//   if (!category) return next(new ErrorHandler('Category Not Found!', 404));

//   const products = await Product.find({ category: category._id });

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     product.category = undefined;
//     await product.save();
//   }

//   await category.deleteOne();

//   res.status(200).json({
//     success: true,
//     message: 'Category Deleted Successfully!',
//   });
// });

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

// import { asyncError } from '../middlewares/Error.js';
// import { Product } from '../models/product.js';
// import ErrorHandler from '../utils/error.js';
// import { getDataUri } from '../utils/features.js';
// import cloudinary from 'cloudinary';

// import { Category } from '../models/category.js';

// export const getAllProducts = asyncError(async (req, res, next) => {
//   // Searcg & Category query:
//   // 1: const {keyword, category} =req.query
//   const { keyword, category } = req.query;

//   const products = await Product.find({
//     // 1:
//     name: {
//       //PRIMER: SEARCH-a: 'Tortica'
//       // Sad ako trazimo u search-u 'tica' da nam izbaci 'Tortica' :D BETON BETONA.
//       // 1: $regex: keyword ? keyword : '',
//       $regex: keyword ? keyword : '',
//       // 1: $options: 'i',
//       $options: 'i',
//     },
//     // 1: category: category ? category : undefined,
//     category: category ? category : undefined,
//   });

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// export const getAdminProducts = asyncError(async (req, res, next) => {
//   // 1: DODAJEMO:.populate('category')                                    const products = await Product.find({}).populate('category');
//   const products = await Product.find({}).populate('category');
//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// // 1: SADA CEMO OTICI U POSTMAN POST URL:'http://localhost:5000/api/v1/product/new' i DODAJEMO SVE STO TREBA: name, price, stock, category(VAZNO: STAVIMO 'id' od 'category'-je!) i file(odamberemo sliku) Kliknemo na 'Send' i
// /*
// DOBIJAMO:

// {
//     "success": true,
//     "message": "Product Created Successfully!"
// }

// RADI!
// */

// // 1: SADA CEMO OTICI U POSTMAN POST URL:' http://localhost:5000/api/v1/product/admin' stisnemo na 'Send'
// /*

// DOBIJAMO:
// {
//     "success": true,
//     "products": [
//         {
//             "_id": "653ba8c54f85879e940972f4",
//             "name": "Cokolate Box",
//             "description": "Za rodjendane se koriste najvise! :D",
//             "price": 5700,
//             "stock": 7,
//             "images": [
//                 {
//                     "public_id": "setylbxsj7otbx8o5bou",
//                     "url": "https://res.cloudinary.com/dovqdeqm6/image/upload/v1698408644/setylbxsj7otbx8o5bou.jpg",
//                     "_id": "653ba8c54f85879e940972f5"
//                 }
//             ],
//             "category": {
//                 "_id": "653a42357c3045f300113a5c",
//                 "category": "Box",
//                 "__v": 0
//             },
//             "createdAt": "2023-10-27T12:10:45.394Z",
//             "__v": 0
//         }
//     ]
// }

// RADI!
// SACUVACEMO OVU RUTU KAO:'Get Admin Product' u folderu 'Product'
// */

// // 1: SADA CEMO OTICI U POSTMAN GeT URL:' http://localhost:5000/api/v1/product/all' stisnemo na 'Send'
// /*

// DOBIJAMO:
// {
//     "success": true,
//     "products": []
// }
// i tu MORAMO UBACITI U 'Params' 2 'Key':
// 1. u 'Key' pisemo 'category' a u 'Value' pisemo id kategorije: '653a42357c3045f300113a5c'
// 2. u 'Key' pisemo 'keyword' a u 'Value' pisemo id kategorije: 'ox'

// RADI! i sa pretragom 'ox' i sa pretragom: 'x' samo nece da radi sa pretragom 'bx' za nas 'box' sto je i normalno i ovo je beton.
// */

// export const getProductDetails = asyncError(async (req, res, next) => {
//   // 1: (KRAJ!) OVDE UBACUJEMO populate('category') ZATO STO CE ON NACI BAS PO KATEGORIJI TO STO TRAZIMO: DODAJEMO:.populate('category')           const product = await Product.findById(req.params.id).populate('category');
//   const product = await Product.findById(req.params.id).populate('category');

//   if (!product) return next(new ErrorHandler('Product not Found', 400));

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// export const createProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;

//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));

//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   await Product.create({
//     name,
//     description,
//     category,
//     price,
//     stock,
//     images: [image],
//   });

//   res.status(200).json({
//     success: true,
//     message: 'Product Created Successfully!',
//   });
// });

// export const updateProduct = asyncError(async (req, res, next) => {
//   const { name, description, category, price, stock } = req.body;
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (name) product.name = name;
//   if (description) product.description = description;
//   if (category) product.category = category;
//   if (price) product.price = price;
//   if (stock) product.stock = stock;

//   await product.save();
//   res.status(200).json({
//     success: true,
//     message: 'Product Updated Successfully!',
//   });
// });

// export const addProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   if (!req.file) return next(new ErrorHandler('Please add image!', 400));
//   const file = getDataUri(req.file);
//   const myCloud = await cloudinary.v2.uploader.upload(file.content);
//   const image = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   product.images.push(image);
//   await product.save();
//   res.status(200).json({
//     success: true,
//     message: 'Image Added Successfully!',
//   });
// });

// export const deleteProductImage = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   const id = req.query.id;
//   if (!id) return next(new ErrorHandler('Please Image Id', 400));
//   let isExist = -1;
//   product.images.forEach((item, index) => {
//     if (item._id.toString() === id.toString()) isExist = index;
//   });
//   if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));
//   await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);
//   product.images.splice(isExist, 1);
//   await product.save();
//   console.log(isExist);
//   res.status(200).json({
//     success: true,
//     message: 'Image Deleted Successfully!',
//   });
// });

// export const deleteProduct = asyncError(async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return next(new ErrorHandler('Product not Found', 400));
//   for (let index = 0; index < product.images.length; index++) {
//     await cloudinary.v2.uploader.destroy(product.images[index].public_id);
//   }
//   await product.deleteOne();
//   res.status(200).json({
//     success: true,
//     message: 'Product Deleted Successfully!',
//   });
// });

// export const addCategory = asyncError(async (req, res, next) => {
//   await Category.create(req.body);
//   res.status(201).json({
//     success: true,
//     message: 'Category Added Successfully',
//   });
// });

// export const getAllCategory = asyncError(async (req, res, next) => {
//   const categories = await Category.find({});

//   res.status(200).json({
//     success: true,
//     categories,
//   });
// });

// export const deleteCategory = asyncError(async (req, res, next) => {
//   const category = await Category.findById(req.params.id);

//   if (!category) return next(new ErrorHandler('Category Not Found!', 404));

//   const products = await Product.find({ category: category._id });

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     product.category = undefined;
//     await product.save();
//   }

//   await category.deleteOne();

//   res.status(200).json({
//     success: true,
//     message: 'Category Deleted Successfully!',
//   });
// });

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

import { asyncError } from '../middlewares/Error.js';
import { Product } from '../models/product.js';
import ErrorHandler from '../utils/error.js';
import { getDataUri } from '../utils/features.js';
import cloudinary from 'cloudinary';

import { Category } from '../models/category.js';

export const getAllProducts = asyncError(async (req, res, next) => {
  //Searcg & Category query:
  const { keyword, category } = req.query;

  const products = await Product.find({
    name: {
      $regex: keyword ? keyword : '',
      $options: 'i',
    },
    category: category ? category : undefined,
  });

  res.status(200).json({
    success: true,
    products,
  });
});

export const getAdminProducts = asyncError(async (req, res, next) => {
  const products = await Product.find({}).populate('category');

  // 1: const outOfStrock = products.filter(i => i.stock === 0);
  const outOfStrock = products.filter(i => i.stock === 0);

  res.status(200).json({
    success: true,
    products,
    // 1: outOfStrock: outOfStrock.length,
    outOfStrock: outOfStrock.length,
    // 1: (KRAJ!) inStock: products.length-outOfStrock.length
    inStock: products.length - outOfStrock.length,
  });
});

export const getProductDetails = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate('category');

  if (!product) return next(new ErrorHandler('Product not Found', 400));

  res.status(200).json({
    success: true,
    product,
  });
});

export const createProduct = asyncError(async (req, res, next) => {
  const { name, description, category, price, stock } = req.body;

  if (!req.file) return next(new ErrorHandler('Please add image!', 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await Product.create({
    name,
    description,
    category,
    price,
    stock,
    images: [image],
  });

  res.status(200).json({
    success: true,
    message: 'Product Created Successfully!',
  });
});

export const updateProduct = asyncError(async (req, res, next) => {
  const { name, description, category, price, stock } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler('Product not Found', 400));
  if (name) product.name = name;
  if (description) product.description = description;
  if (category) product.category = category;
  if (price) product.price = price;
  if (stock) product.stock = stock;

  await product.save();
  res.status(200).json({
    success: true,
    message: 'Product Updated Successfully!',
  });
});

export const addProductImage = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler('Product not Found', 400));
  if (!req.file) return next(new ErrorHandler('Please add image!', 400));
  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  product.images.push(image);
  await product.save();
  res.status(200).json({
    success: true,
    message: 'Image Added Successfully!',
  });
});

export const deleteProductImage = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler('Product not Found', 400));
  const id = req.query.id;
  if (!id) return next(new ErrorHandler('Please Image Id', 400));
  let isExist = -1;
  product.images.forEach((item, index) => {
    if (item._id.toString() === id.toString()) isExist = index;
  });
  if (isExist < 0) return next(new ErrorHandler('Image doesn`t exist', 400));
  await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);
  product.images.splice(isExist, 1);
  await product.save();
  console.log(isExist);
  res.status(200).json({
    success: true,
    message: 'Image Deleted Successfully!',
  });
});

export const deleteProduct = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler('Product not Found', 400));
  for (let index = 0; index < product.images.length; index++) {
    await cloudinary.v2.uploader.destroy(product.images[index].public_id);
  }
  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: 'Product Deleted Successfully!',
  });
});

export const addCategory = asyncError(async (req, res, next) => {
  await Category.create(req.body);
  res.status(201).json({
    success: true,
    message: 'Category Added Successfully',
  });
});

export const getAllCategory = asyncError(async (req, res, next) => {
  const categories = await Category.find({});

  res.status(200).json({
    success: true,
    categories,
  });
});

export const deleteCategory = asyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) return next(new ErrorHandler('Category Not Found!', 404));

  const products = await Product.find({ category: category._id });

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.category = undefined;
    await product.save();
  }

  await category.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Category Deleted Successfully!',
  });
});
