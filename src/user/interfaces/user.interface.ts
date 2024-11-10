export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface UpdateUserDto {
    firstName?: string;
    lastName?: string;
    email?: string;
  }
  