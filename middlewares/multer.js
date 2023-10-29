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

// 1: import multer from "multer";
import multer from 'multer';

// 1: const storage = multer.memoryStorage();
const storage = multer.memoryStorage();

// 1: export const singleUpload = multer().single('file');
export const singleUpload = multer({
  // 1: storage: storage,
  storage: storage,
  //N 1: }).single('file');  IDEMO u user.js(controllers)
}).single('file');
