import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.objectId;

const Message = mongoose.Schema(
  {
        sender: {
            type: objectId,
            ref: "User"
        },
        content: String,
        chat: {
            type: objectId,
            ref:"Chat"
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", Message);
