export interface IUser {
  profileImage?: string;
  fullName: string;
  emailAddress: string;
  password: string;
  address: string;
  phoneNumber: string;
  isAdmin?: boolean;
}

export interface IDoctors {
  index?: number;
  profileImage?: string;
  name: string;
  designation: string;
  qualification: string;
  extraAttributes: string;
  workPlace?: string;
}

export interface IService {
  index?: number;
  serviceImage?: string;
  serviceName: string;
  serviceDescription: string;
}
