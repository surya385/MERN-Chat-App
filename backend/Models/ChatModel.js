import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.objectId;

const Chat = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: Boolean,
    users: [
      {
        type: objectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: objectId,
      ref: "message",
    },
    groupAdmin: {
      type: objectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("chat", Chat);
