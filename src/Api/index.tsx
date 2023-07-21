import axios from "axios";
import { ICategory, IProduct } from "../Common";
interface IProps {
  method: string;
  url: string;
  data?: IProduct | ICategory;
  id?: string;
}

const API_BASE_URL = "http://localhost:8080/api";
const fetchData = async (props: IProps) => {
  let response;
  switch (props.method) {
    case "get":
      response = await axios.get(`${API_BASE_URL}${props.url}`);
      break;
    case "getOne":
      response = await axios.get(`${API_BASE_URL}${props.url}/${props.id}`);
      break;
    case "post":
      response = await axios.post(`${API_BASE_URL}${props.url}`, props.data);
      break;
    case "put":
      response = await axios.put(
        `${API_BASE_URL}${props.url}/${props.id}`,
        props.data
      );
      break;
    case "delete":
      response = await axios.delete(`${API_BASE_URL}${props.url}/${props.id}`);
      break;
    default:
      throw new Error(`Unsupported HTTP method: ${props.method}`);
      break;
  }
  return response.data;
};
export default fetchData;
