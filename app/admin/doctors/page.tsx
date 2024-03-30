"use client";
import React, { useEffect, useRef, useState } from "react";
import AddDoctor from "./AddDoctor";
import Doctors from "./Doctors";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchDoctors } from "@/store/slices/doctorSlice";
import FullLoading from "@/components/FullLoading";

const Page = () => {
  const doctorRef = useRef(false);
  const dispatch = useDispatch<AppDispatch>();
  const doctors = useSelector((state: RootState) => state.doctors.data);
  const loading = useSelector((state: RootState) => state.doctors.loading);
  useEffect(() => {
    if (doctorRef.current === false) {
      dispatch(fetchDoctors());
    }
    return () => {
      doctorRef.current = true;
    };
  }, [doctors]);

  if (loading) {
    return <FullLoading />;
  }

  return (
    <div className="h-screen w-full overflow-auto">
      <div className="flex justify-between border-b bg-muted p-8 shadow-sm">
        <h1 className="text-4xl font-extrabold">Doctors</h1>
        <AddDoctor />
      </div>
      <div className="h-full w-full ">
        {doctors && <Doctors allDoctors={doctors} />}
      </div>
    </div>
  );
};

export default Page;
