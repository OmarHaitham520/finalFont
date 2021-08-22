import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
} from "./actionCreator";


export function fetchProducts() {
  debugger;
  fetch(`http://64b5-2c0f-fc89-802e-14b6-78e9-c5c-fbb6-396a.ngrok.io/hedoom`)
  .then((response) => response.json())
  .then((data) => {
    console.log("dataaaaa", data);
  })
  .catch((err) => console.log(err));
}
