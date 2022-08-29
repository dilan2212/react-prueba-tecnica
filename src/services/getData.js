import axios from "axios";

export const getData =async() => {
 return axios.get(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json").then(res=>res);
  };