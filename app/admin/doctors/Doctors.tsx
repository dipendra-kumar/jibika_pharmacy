import DoctorProfileCard from "../../../components/DoctorProfileCard";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DoctorForm from "./DoctorForm";
import { useDispatch } from "react-redux";
import { updateDoctor, deleteDoctor } from "@/store/slices/doctorSlice";
import { useToast } from "@/components/ui/use-toast";
import { IDoctors } from "@/types";
import { AppDispatch } from "@/store/store";

const Doctors = ({ allDoctors }: { allDoctors: IDoctors[] }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const { toast } = useToast();

  const handleFormSubmit = async (data: IDoctors) => {
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
          {allDoctors.map((doctor: IDoctors, index: number) => (
            <div
              key={index}
              onClick={() => {
                setSelectedDoctor(index);
                setIsModalOpen(true);
              }}
              className="cursor-pointer duration-200 hover:scale-105 hover:shadow-lg"
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
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Edit Doctor</DialogTitle>
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
