"use client";
import React, { useEffect, useRef } from "react";
import AddDoctor from "./AddDoctor";
import Doctors from "./Doctors";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchDoctors } from "@/store/slices/doctorSlice";
import Loading from "@/components/Loading";
import PageHeader from "@/components/PageHeader";

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

  return (
    <div className="h-screen w-full ">
      <PageHeader title="Doctors" contextAction={<AddDoctor />} />
      <div className="flex h-full flex-col">
        <div className="mb-28 flex-grow overflow-auto">
          {doctors.length > 0 ? (
            <Doctors allDoctors={doctors} />
          ) : (
            loading && <Loading className="text-5xl text-gray-800 " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
