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

// 2: import mongoose from 'mongoose';
import mongoose from 'mongoose';

// 2: const schema = new mongoose.Schema({});
const schema = new mongoose.Schema({
  // 2: category:{
  category: {
    // 2: type:String,
    type: String,
    // 2: equired: [true,'Please Enter Category']
    required: [true, 'Please Enter Category'],
  },
});

// 2:(KRAJ!) export const Order = mongoose.model('Order', schema);
export const Category = mongoose.model('Category', schema);
