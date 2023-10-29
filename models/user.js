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

// // 1: import mongoose from "mongoose";
// import mongoose from 'mongoose';

// // 1: const schema = new mongoose.Schema({
// const schema = new mongoose.Schema({});

// //N 1: export const User = mongoose.model('User', schema); IDEMO u product.js(modals)
// export const User = mongoose.model('User', schema);

//
//
//
//
//
//____________ 53. Connecting To Atlas Cloud ___________
//
//
//
//
//
//

// import mongoose from 'mongoose';
// // 1: import validator from 'validator';
// import validator from 'validator';

// const schema = new mongoose.Schema({
//   // 1: name:{
//   name: {
//     // 1: type:String,
//     type: String,
//     // 1: required:[true, 'Please Enter Name']
//     required: [true, 'Please Enter Name'],
//   },
//   // 1: emal:{
//   email: {
//     // 1: type:String,
//     type: String,
//     // 1: required:[true, 'Please Enter Email'],
//     required: [true, 'Please Enter Email'],
//     // 1: unique:[true,'Email Already Exist'],
//     unique: [true, 'Email Already Exist'],
//     // 1: VAZNO: SADA CEMO ZAUSTAVITI SERVER(CTRL+C) i UKUCATI U TERMINALU:'npm i validator' i POKRENUTI NAS SERVER:'npm run dev':validate:validator.isEmail,
//     validate: validator.isEmail,
//   },

//   // 1: password:{
//   password: {
//     // 1: type:String,
//     type: String,
//     // 1: required:[true, 'Please Enter Password'],
//     required: [true, 'Please Enter Password'],
//     // 1: minLength: [6, 'Password must be at least 6 characters long'],
//     minLength: [6, 'Password must be at least 6 characters long'],
//     // 1: select: false,
//     select: false,
//   },
//   // 1: name:{
//   address: {
//     // 1: type:String,
//     type: String,
//     // 1: required: true,
//     required: true,
//   },
//   // 1: city:{
//   city: {
//     // 1: type:String,
//     type: String,
//     // 1: required: true,
//     required: true,
//   },
//   // 1: contry:{
//   country: {
//     // 1: type:String,
//     type: String,
//     // 1: required: true,
//     required: true,
//   },
//   // 1: name:{
//   pinCode: {
//     // 1: type: Number,
//     type: Number,
//     // 1: required: true,
//     required: true,
//   },
//   // 1: role: {
//   role: {
//     // 1: type: String,
//     type: String,
//     // 1: enum: ['admin', 'user'],
//     enum: ['admin', 'user'],
//     // 1: default: 'user',
//     default: 'user',
//   },
//   // 1: avatar: {
//   avatar: {
//     // 1: public_id: String,
//     public_id: String,
//     // 1: url: String,
//     url: String,
//   },
//   // 1: otp: Number,
//   otp: Number,
//   // 1:(KRAJ!) otp_expire: Date,
//   otp_expire: Date,
// });

// export const User = mongoose.model('User', schema);

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

// import mongoose from 'mongoose';
// import validator from 'validator';
// // 2: SADA CEMO INSTALIRATI NOVI PAKET u TERMINALU:'npm i bcrypt' KOJI SLUZI DA NAM HASH-uje password i posle pokrenti opet server: 'npm run dev'

// // 2: import bcrypt from 'bcrypt';
// import bcrypt from 'bcrypt';

// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please Enter Name'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Please Enter Email'],
//     unique: [true, 'Email Already Exist'],
//     validate: validator.isEmail,
//   },

//   password: {
//     type: String,
//     required: [true, 'Please Enter Password'],
//     minLength: [6, 'Password must be at least 6 characters long'],
//     select: false,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   pinCode: {
//     type: Number,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'user'],
//     default: 'user',
//   },
//   avatar: {
//     public_id: String,
//     url: String,
//   },
//   otp: Number,
//   otp_expire: Date,
// });
// // 2: VAZNO: MORAMO KORISTITI EXPRESSION F-ju jer ARROW -fja nema '.this': schema.pre('save', async function() {
// schema.pre('save', async function () {
//   // 2: Ovde pogadjamo svaki password:                                  console.log(this.password);
//   // console.log(this.password);

//   // 2:  await bcrypt.hash(this.password, 10);
//   this.password = await bcrypt.hash(this.password, 10);
// });

// // 2: schema.methods.pomparePassword = async function (enteredPassword) {};
// schema.methods.pomparePassword = async function (enteredPassword) {
//   //N 2: return await bcrypt.compare(enteredPassword, this.password)  IDEMO u user.js(controllers)
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// export const User = mongoose.model('User', schema);

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

// import mongoose from 'mongoose';
// import validator from 'validator';
// import bcrypt from 'bcrypt';
// // 1: import jwt from 'jsonwebtoken';
// import jwt from 'jsonwebtoken';

// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please Enter Name'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Please Enter Email'],
//     unique: [true, 'Email Already Exist'],
//     validate: validator.isEmail,
//   },

//   password: {
//     type: String,
//     required: [true, 'Please Enter Password'],
//     minLength: [6, 'Password must be at least 6 characters long'],
//     select: false,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   pinCode: {
//     type: Number,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'user'],
//     default: 'user',
//   },
//   avatar: {
//     public_id: String,
//     url: String,
//   },
//   otp: Number,
//   otp_expire: Date,
// });

// schema.pre('save', async function () {
//   this.password = await bcrypt.hash(this.password, 10);
// });

// schema.methods.pomparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // 1: schema.methods.generateToken = function () {
// schema.methods.generateToken = function () {
//   //N 1: return jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{   IDEMO U config.env
//   return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
//     //N 3: expiresIn:'15d', IDEMO u user.js(controllers)
//     expiresIn: '15d',
//   });
// };

// export const User = mongoose.model('User', schema);

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

import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Name'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter Email'],
    unique: [true, 'Email Already Exist'],
    validate: validator.isEmail,
  },

  password: {
    type: String,
    required: [true, 'Please Enter Password'],
    minLength: [6, 'Password must be at least 6 characters long'],
    select: false,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  avatar: {
    public_id: String,
    url: String,
  },
  otp: Number,
  otp_expire: Date,
});

// 3: schema.pre('save', async function (next) {
schema.pre('save', async function (next) {
  // 3: if (!this.isModified('password')) return next();
  if (!this.isModified('password')) return next();

  // 3: IDEMO U POSTMAN KLIKNEMO PRVO 'Send' NA 'Login' pa na 'Get My Profile' i to sve radi pa idemo na PUT URL: 'http://localhost:5000/api/v1/user/updateprofile' i sacuvamo ga kao Update Profile u folderu 'Profile' i Sacuvacemo  PUT URL:'http://localhost:5000/api/v1/user/changepassword' kao Change Password u folderu 'Profile'

  //N 3: IDEMO u user.js(controllers)

  this.password = await bcrypt.hash(this.password, 10);
});

schema.methods.pomparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

schema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
};

export const User = mongoose.model('User', schema);
