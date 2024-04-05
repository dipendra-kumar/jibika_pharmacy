"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addDoctor } from "@/store/slices/doctorSlice";
import DoctorForm from "./DoctorForm";
import { IDoctorProfile } from "@/@types";

function AddDoctor() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = async (data: IDoctorProfile) => {
    try {
      await dispatch(addDoctor(data));
      toast({
        title: "New doctor added",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error adding the doctor",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          className=" flex gap-2 border border-primary bg-primary-foreground font-bold hover:bg-primary hover:text-primary-foreground"
          variant="outline"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus /> <span> Add Doctor </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Add a Doctor</DialogTitle>
          <DialogDescription>
            Enter the details for the doctor
          </DialogDescription>
        </DialogHeader>
        <DoctorForm onSubmit={handleFormSubmit} />
      </DialogContent>
    </Dialog>
  );
}

export default AddDoctor;
