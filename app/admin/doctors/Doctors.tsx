"use client";
import { IDoctorProfile } from "@/components/DoctorProfileCard";
import DoctorProfileCard from "./DoctorProfileCard";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DoctorForm from "./DoctorForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { toast } from "@/components/ui/use-toast";
import { deleteDoctor, updateDoctor } from "@/store/slices/doctorSlice";

const Doctors = ({ allDoctors }: { allDoctors: IDoctorProfile[] }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = async (data: IDoctorProfile) => {
    try {
      await dispatch(updateDoctor(data));
      toast({
        title: "Doctor details updated!",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error updating doctor",
        variant: "destructive",
      });
    }
  };

  const handleDeleteDoctor = async (data: any) => {
    try {
      await dispatch(deleteDoctor(data._id));
      toast({
        title: "Doctor data deleted!",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error deleting doctor",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <div className="h-screen w-full">
        <div className="flex flex-wrap items-center justify-center gap-8 overflow-auto p-10">
          {allDoctors.map((doctor: IDoctorProfile, index: number) => (
            <div
              key={index}
              onClick={() => {
                setSelectedDoctor(index);
              }}
            >
              <DialogTrigger>
                <DoctorProfileCard
                  index={index}
                  profileImage={doctor.profileImage}
                  name={doctor.name}
                  qualification={doctor.qualification}
                  designation={doctor.designation}
                  workPlace={doctor.workPlace}
                  extraAttributes={doctor.extraAttributes}
                />
              </DialogTrigger>
            </div>
          ))}
        </div>
      </div>
      <DialogContent
        className=" sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Edit Doctor</DialogTitle>
          <DialogDescription>
            Enter the details for the doctor
          </DialogDescription>
        </DialogHeader>
        <DoctorForm
          onSubmit={handleFormSubmit}
          initialData={allDoctors[selectedDoctor]}
          onDelete={handleDeleteDoctor}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Doctors;
