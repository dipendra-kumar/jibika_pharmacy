import { model, models, Schema } from "mongoose";

export interface IDoctors {
  profileImage: string;
  name: string;
  qualification: string;
  designation: string;
  workPlace: string;
  extraAttributes: string;
}
const DoctorSchema = new Schema<IDoctors>(
  {
    profileImage: { type: String, required: true },
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    designation: { type: String, required: true },
    workPlace: { type: String, required: true },
    extraAttributes: { type: String },
  },
  {
    timestamps: true,
  }
);
const doctorModel = models.Doctor || model("Doctor", DoctorSchema);
export default doctorModel;
