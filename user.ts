export interface IUserInfo {
  id: number;
  name: string;
  email: string;
  age: number;
}

export class User {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _age: number;

  constructor(userInfo: IUserInfo) {
    const {id, name, email, age} = userInfo;
    this._id = id;
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get id(): number {
    return this._id;
  }  

  get name(): string {
    return this._name;
  }
  
  get email(): string {
    return this._email;
  }

  get age(): number {
    return this._age;
  }
} 