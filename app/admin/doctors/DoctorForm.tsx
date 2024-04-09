import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import InputField from "@/components/InputField";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { IDoctors } from "@/types";

interface DoctorFormProps {
  onSubmit: (data: IDoctors) => Promise<void>;
  onDelete?: (data: IDoctors) => Promise<void>;
  initialData?: IDoctors;
}

function DoctorForm({ onSubmit, initialData, onDelete }: DoctorFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IDoctors>({ defaultValues: initialData });
  const [profileImage, setProfileImage] = useState<string>(
    initialData?.profileImage || "",
  );

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key as keyof IDoctors, value);
      });
    }
  }, [initialData, setValue]);

  const submitHandler = (data: IDoctors) => {
    const formData = { ...data, profileImage };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-5"
    >
      <InputField
        id="name"
        label="Doctor Name"
        type="text"
        register={register}
        error={errors.name}
        required
      />
      <InputField
        id="qualification"
        label="Qualification"
        type="text"
        register={register}
        error={errors.qualification}
        required
      />
      <InputField
        id="designation"
        label="Designation"
        type="text"
        register={register}
        error={errors.designation}
        required
      />
      <InputField
        id="workPlace"
        label="Workplace"
        type="text"
        register={register}
        error={errors.workPlace}
        required
      />
      <InputField
        id="extraAttributes"
        label="Extra Attributes"
        type="text"
        register={register}
        error={errors.extraAttributes}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="profileImage" className="block">
          Profile Image <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center justify-around gap-2">
          {profileImage && (
            <img src={profileImage} alt="profile-image" className="h-20 w-20" />
          )}
          <UploadButton
            className="ut-button:bg-slate-600"
            endpoint={"imageUploader"}
            onClientUploadComplete={(res) => {
              setProfileImage(res[0].url);
            }}
            onUploadError={(error) => {
              toast({ title: "Error uploading image", variant: "destructive" });
            }}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {initialData && onDelete && (
          <Button
            className="w-1/2 bg-red-600 font-extrabold text-white duration-300 hover:bg-red-700"
            onClick={() => onDelete(initialData)}
          >
            Delete
          </Button>
        )}
        <Button
          type="submit"
          className="w-1/2 font-bold duration-300 hover:bg-secondary"
          disabled={!profileImage}
        >
          {initialData ? "Update " : "Add Doctor"}
        </Button>
      </div>
    </form>
  );
}

export default DoctorForm;
