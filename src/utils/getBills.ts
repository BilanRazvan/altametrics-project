import axios from "axios";
import { apiAddress, password, username } from "../config";

interface IProps {
  page: number;
  limit: number;
}

export const getBills = async ({ page, limit }: IProps) => {
  return axios
    .get(
      `${apiAddress}/documents?search=type:bill&page=${page}&limit=${limit}`,
      {
        auth: {
          username,
          password,
        },

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};
