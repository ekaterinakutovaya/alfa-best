import { axiosInstance } from "lib/axios";

export default async function handler(req, res) {
  try {
    const res = await axiosInstance.get("home_menu");
    console.log(res.data);
    res.status(200).json(res);
  } catch (error) {
    console.error(error);
  }
}
