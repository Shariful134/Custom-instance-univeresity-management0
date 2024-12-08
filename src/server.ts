import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
// import { Serever } from 'http';

// let server: Serever

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

// process.on('unhandledRejection', () => {
//   console.log(`unhandledRejection is detecrted shuting down ...`);
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });
