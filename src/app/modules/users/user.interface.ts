export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  status:'blocked'|'in-progress'
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
};

export type TNewUser = {
  id:string;
  password: string;
  role: string;
}
