import doctorModel from "@/models/doctors";
import { Request } from "@/types/next";
import connectMongo from "@/utils/connect-mongo";
import { NextResponse } from "next/server";
import { checkAdmin } from "../auth";

export async function POST(request: Request) {
  try {
    await checkAdmin(request.user?.emailAddress);
    await connectMongo();
    const {
      name,
      qualification,
      designation,
      extraAttributes,
      workPlace,
      profileImage,
    } = await request.json();
    if (
      !name ||
      !qualification ||
      !designation ||
      !workPlace ||
      !profileImage
    ) {
      return NextResponse.json(
        {
          message: "Values required!",
        },
        {
          status: 400,
        },
      );
    }

    const newDoctor = new doctorModel({
      name,
      qualification,
      designation,
      extraAttributes,
      workPlace,
      profileImage,
    });
    await newDoctor.save();
    return NextResponse.json(
      {
        message: newDoctor,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      {
        status: 500,
      },
    );
  }
}
export async function PUT(request: Request) {
  try {
    await connectMongo();
    await checkAdmin(request.user?.emailAddress);
    const data = await request.json();
    const doctor = await doctorModel.findById(data._id);

    if (!doctor) {
      return NextResponse.json(
        {
          message: "Doctor not found!",
        },
        {
          status: 400,
        },
      );
    }

    const updatedDoctor = await doctorModel.findByIdAndUpdate(data._id, data, {
      new: true,
    });
    return NextResponse.json(
      {
        message: updatedDoctor,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectMongo();
    await checkAdmin(request.user?.emailAddress);
    const url = new URL(request.url);
    const _id = url.searchParams.get("_id");
    const doctor = await doctorModel.findById(_id);
    if (!doctor) {
      return NextResponse.json(
        {
          message: "Doctor not found!",
        },
        {
          status: 404,
        },
      );
    }
    await doctorModel.findByIdAndDelete(_id);
    return NextResponse.json(
      {
        message: { deletedDoctorId: _id },
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong!",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectMongo();
    const allDoctors = await doctorModel.find({});
    return NextResponse.json(
      {
        message: allDoctors,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      {
        status: 500,
      },
    );
  }
}
