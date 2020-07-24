import axios from "axios";

export const showDataApi = (data) => {
  return axios
    .post("http://localhost:4000/api/showall", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const search = (data) => {
  return axios
    .post(`http://localhost:4000/api/search/${data.name}`, data)
    .then((res) => {
      if (res.data) {
        return res.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
