import { IService } from "@/types";
import { model, models, Schema } from "mongoose";

const serviceSchema = new Schema<IService>(
  {
    serviceName: { type: String, required: true },
    serviceDescription: { type: String, required: true },
    serviceImage: { type: String, required: true },
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

const serviceModel = models.User || model("Service", serviceSchema);
export default serviceModel;
