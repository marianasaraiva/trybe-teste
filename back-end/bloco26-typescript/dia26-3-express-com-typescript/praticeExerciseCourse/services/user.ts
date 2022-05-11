import UserModel from '../models/user';
import IUser from '../interfaces/user';

export default class UserService {
  // instancia de uma classe
  public model = new UserModel();

  public getAll = async (): Promise <IUser[]> => {
    const allUsers = await this.model.getAll();
    return allUsers;
  }
}