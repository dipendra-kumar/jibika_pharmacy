import { model, models, Schema } from "mongoose";

export interface ITestimonial {
  profileImage: string;
  name: string;
  qualification: string;
  designation: string;
  workPlace: string;
  extraAttributes: string[];
}
const TestimonialSchema = new Schema<ITestimonial>(
  {
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
const testimonialModel =
  models.Product || model("Testimonial", TestimonialSchema);
export default testimonialModel;
