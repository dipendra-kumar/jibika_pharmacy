export interface IUser {
  profileImage?: string;
  fullName: string;
  emailAddress: string;
  password: string;
  address: string;
  phoneNumber: string;
  isAdmin?: boolean;
}

export interface IDoctorProfile {
  index: number;
  profileImage?: string;
  name: string;
  designation: string;
  qualification: string;
  extraAttributes: string;
  workPlace?: string;
  onSelect?: () => void;
}
