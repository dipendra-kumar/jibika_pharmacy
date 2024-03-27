import { model, models, Schema } from "mongoose";

export interface IDoctors {
  profileImage: string;
  name: string;
  qualification: string;
  designation: string;
  workPlace: string;
  extraAttributes: string[];
}
const DoctorSchema = new Schema<IDoctors>(
  {
    profileImage: String,
    name: String,
    qualification: String,
    designation: String,
    workPlace: String,
    extraAttributes: [String],
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
  }
);
const doctorModel = models.Product || model("Doctor", DoctorSchema);
export default doctorModel;
