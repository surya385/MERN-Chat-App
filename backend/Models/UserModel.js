import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.objectId;

const User = mongoose.Schema(
  {
        name: {
            type: String,
          required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true, 
        },
        pic: {
            type: String,
            default:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106"
        }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", User);
