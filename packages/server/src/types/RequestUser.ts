import { Request } from "express";

interface RequestUser extends Request {
  user?: {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    email?: string;
    profileImageId?: string;
    lastAccessedAt?: Date;
    passwordHash?: string;
    googleId?: string;
  };
}

export default RequestUser;
