import doctorModel from "@/models/doctors";
import connectMongo from "@/utils/connect-mongo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongo();
    const {
      name,
      emailAddress,
      qualification,
      designation,
      extraAttributes,
      workPlace,
      profileImage,
    } = await request.json();
    const newDoctor = new doctorModel({
      name,
      emailAddress,
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
