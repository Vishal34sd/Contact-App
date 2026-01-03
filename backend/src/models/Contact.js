import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: 
    { type: String, 
      required: true ,
      trim : true ,
      minLength : 3},
    email: 
    { type: String,
      required: true ,
      unique : true },
    phone: 
    { type: String, required: true },
    message: 
    { type: String , 
      maxLength : 50
     }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
