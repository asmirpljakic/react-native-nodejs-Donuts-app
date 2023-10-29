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

// // 4: import mongoose from 'mongoose';
// import mongoose from 'mongoose';

// // 4: xport const connectDB = async () => {
// export const connectDB = async () => {
//   // 4: try {
//   try {
//     // 4: const {connection} =await mongoose.connect(process.env.MONGO_URI)
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);

//     // 4: console.log(`Server connected to databas ${connection.host.name}`);
//     console.log(`Server connected to databas ${connection.host.name}`);

//     // 4: catch (error) {}
//   } catch (error) {
//     //N 4: console.log('Some Error Occurred', error); IDEMO u config.env
//     console.log('Some Error Occurred', error);
//     process.exit(1);
//   }
// };

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

import mongoose from 'mongoose';
// 2: Da vidimo sta nam ispisuje:
// console.log(process.env.MONGO_URI);
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI,
      // 2:{}
      {
        // 2:dbName: 'Kroffne',
        dbName: 'Kroffne',
      }
    );
    // 2:(KRAJ!) MENJAMO:${connection.host.name} u ${connection.host}:            console.log(`Server connected to databas ${connection.host}`);
    console.log(`Server connected to databas ${connection.host}`);
  } catch (error) {
    console.log('Some Error Occurred', error);
    process.exit(1);
  }
};
