import axios from "axios";
import { chnageText } from "../constants";
export const changeNumber = (step) => (disptach, getState) => {
  disptach({ type: "changeNumber", payload: getState().number + step });
};

export const getPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    localStorage.setItem("posts", JSON.stringify(data));
    dispatch({
      type: "success",
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const changeTitle = (index, text) => (dispatch, getState) => {
  const help = JSON.parse(JSON.stringify(getState().posts.data));
  help[index].title = text;
  localStorage.setItem("posts", JSON.stringify(help));
  dispatch({
    type: chnageText,
    payload: { data: [...help], loading: false, error: "" },
  });
};
