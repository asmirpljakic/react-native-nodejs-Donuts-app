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

// // 3: import mongoose from "mongoose";
// import mongoose from 'mongoose';

// // 3: const schema = new mongoose.Schema({
// const schema = new mongoose.Schema({
//   // 3:
// });

// //N 3: export const Product = mongoose.model('Product', schema); IDEMO u database.js(data)
// export const Order = mongoose.model('Order', schema);

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

import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  // 1: shippingInfo: {
  shippingInfo: {
    // 1: address: {
    address: {
      // 1: type: String,
      type: String,
      // 1: required: true,
      required: true,
    },
    // 1: city: {
    city: {
      // 1: type: String,
      type: String,
      // 1: required: true,
      required: true,
    },
    // 1:  country: {
    country: {
      // 1: type: String,
      type: String,
      // 1: required: true,
      required: true,
    },
    // 1: pinCode: {
    pinCode: {
      // 1: type: Number,
      type: Number,
      // 1: required: true,
      required: true,
    },
  },
  // 1: orderItems: [
  orderItems: [
    {
      // 1: name: {
      name: {
        // 1: type: String,
        type: String,
        // 1: required: true,
        required: true,
      },

      // 1: price: {
      price: {
        // 1: type: Number,
        type: Number,
        // 1:  required: true,
        required: true,
      },

      // 1: quantity: {
      quantity: {
        // 1: type: Number,
        type: Number,
        // 1: required: true,
        required: true,
      },
      // 1: image: {
      image: {
        // 1: type: String,
        type: String,
        // 1: required: true,
        required: true,
      },
      // 1: product: {
      product: {
        // 1: type: mongoose.Schema.Types.ObjectId,
        type: mongoose.Schema.Types.ObjectId,
        // 1: ref: 'Product',
        ref: 'Product',
        // 1: required: true,
        required: true,
      },
    },
  ],

  // 1: user: {
  user: {
    // 1: type: mongoose.Schema.Types.ObjectId,
    type: mongoose.Schema.Types.ObjectId,
    // 1: ref: 'User',
    ref: 'User',
    // 1: required: true,
    required: true,
  },

  // 1: paymentMethod: {
  paymentMethod: {
    // 1: type: String,
    type: String,
    // 1: enum: ['COD', 'ONLINE'],
    enum: ['COD', 'ONLINE'],
    // 1: default: 'COD',
    default: 'COD',
  },

  // 1: paidAt: Date,
  paidAt: Date,
  // 1:  paymentInfo: {
  paymentInfo: {
    // 1: id: String,
    id: String,
    // 1: status: String,
    status: String,
  },

  // 1: itemsPrice: {
  itemsPrice: {
    // 1: type: Number,
    type: Number,
    // 1: requared: true,
    requared: true,
  },
  // 1: taxPrice: {
  taxPrice: {
    // 1: type: Number,
    type: Number,
    // 1:  requared: true,
    requared: true,
  },
  // 1: shippingCharges: {
  shippingCharges: {
    // 1: type: Number,
    type: Number,
    // 1: requared: true,
    requared: true,
  },
  // 1: totalAmount: {
  totalAmount: {
    // 1: type: Number,
    type: Number,
    // 1: requared: true,
    requared: true,
  },

  // 1:  orderStatus: {
  orderStatus: {
    // 1:  type: String,
    type: String,
    // 1: enum: ['Preparing', 'Shipped', 'Delivered'],
    enum: ['Preparing', 'Shipped', 'Delivered'],
    // 1: default: 'Preparing',
    default: 'Preparing',
  },

  // 1: deliveredAt: Date,
  deliveredAt: Date,
  // 1: createdAt: {
  createdAt: {
    // 1: type: Date,
    type: Date,
    // 1: (KRAJ!) default: Date.now,
    default: Date.now,
  },
});

export const Order = mongoose.model('Order', schema);
