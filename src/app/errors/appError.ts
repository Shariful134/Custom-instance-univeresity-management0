export class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
// যখন একটি সাবক্লাস (যেমন AppError) প্যারেন্ট ক্লাস
// (যেমন Error) থেকে উত্তরাধিকারসূত্রে তৈরি করা হয়, তখন super()
//  ব্যবহার করে প্যারেন্টের কনস্ট্রাক্টরকে কল করতে হয়।
