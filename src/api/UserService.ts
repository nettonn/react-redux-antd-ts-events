import axios from "axios";
import { IUser } from "../models/IUser";
// import { sleep } from "../utils/functions";

export default class UserService {
  static async getUsers() {
    // await sleep(1000);
    return axios.get<IUser[]>("./users.json");
  }
}
