import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "@/types";

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  },
);

UserSchema.pre<IUser>("save", async function (next) {
  //   if (!this.isModified("password")) {
  //     return next();
  //   }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error: any) {
    next(error);
  }
});

const userModel = models.User || model("User", UserSchema);
export default userModel;
