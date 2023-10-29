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

// // 2: import mongoose from "mongoose";
// import mongoose from 'mongoose';

// // 2: const schema = new mongoose.Schema({});
// const schema = new mongoose.Schema({});

// //N 2: export const Product = mongoose.model('Product', schema); IDEMO u order.js(modals)
// export const Product = mongoose.model('Product', schema);

//
//
//
//
//
//________ 73. Creating Product Schema ________
//
//
//
//
//
//

import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  // 1: name: {
  name: {
    // 1: type: String,
    type: String,
    // 1: required: [true, '{Plesae Enter Name'],
    required: [true, '{Plesae Enter Name'],
  },
  // 1: description: {
  description: {
    // 1:  type: String,
    type: String,
    // 1: required: [true, '{Plesae Enter Description'],
    required: [true, '{Plesae Enter Description'],
  },
  // 1: price: {
  price: {
    // 1: type: Number,
    type: Number,
    // 1: required: [true, '{Plesae Enter Price'],
    required: [true, '{Plesae Enter Price'],
  },
  // 1: stock: {
  stock: {
    // 1: type: Number,
    type: Number,
    // 1: required: [true, '{Plesae Enter Stock'],
    required: [true, '{Plesae Enter Stock'],
  },
  // 1: images: [
  images: [
    {
      // 1: public_id: String,
      public_id: String,
      // 1: url: String,
      url: String,
    },
  ],
  // 1: category:{
  category: {
    // 1: type: mongoose.Schema.Types.ObjectId,
    type: mongoose.Schema.Types.ObjectId,
    // 1: ref: "Category",
    ref: 'Category',
  },
  // 1:  createdAt:{
  createdAt: {
    // 1: type: Date,
    type: Date,
    // 1: default: Date.now,
    default: Date.now,
  },
});

//N 1: SAD KREIRAMO NOVI FAJL:'category.js'  u FOLDERU: 'models' i IDEMO u: 'category.js'

export const Product = mongoose.model('Product', schema);
