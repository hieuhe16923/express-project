import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
   {
      userId: {
         type: String
      },
      userEmail: {
         type: String
      },
      tourName: {
         type: String,
         required: true,
      },
      fullName: {
         type: String,
         required: true,
      },
      adult: {
         type: Number,
         required: true
      },
      children: {
         type: Number,
         required: true
      },
      baby: {
         type: Number,
         required: true
      },
      phone: {
         type: Number,
         required: true
      },
      bookAt: {
         type: Date,
         required: true
      },
      status: {
         type: String,
         default: 'pending', // giá trị mặc định là 'pending'
         enum: ['pending', 'confirmed', 'cancelled'] // các giá trị hợp lệ cho status
      },
      price: {
         type: Number,
         required: true
      },
      hotelId: {
         type: String, // thêm trường hotelId
         required: true
      },
      extraBed: {
         type: Number,
         required: true
      },
      roomQuantity: {
         type: Number,
      },
      restaurantId: {
         type: String, // thêm trường restaurantId
         required: true
      }
   },
   { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
