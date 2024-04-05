import { toast } from "@/components/ui/use-toast";

export const handleApiError = (error: any) => {
  const errorMessage = error?.response?.data?.message || "An error occurred";
  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });
  throw errorMessage;
};
