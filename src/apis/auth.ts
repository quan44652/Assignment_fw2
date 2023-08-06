import instance from "./instance";
import { Iauth } from './../interfaces/auth';

export const addAccount = (data: Iauth)=>{
    return instance.post("/signup", data)
}
export const checkOneAccount = (data: Iauth) => {
  return instance.post("/signin", data);
};

