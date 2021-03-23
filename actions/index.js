import jsonPlaceholder from "../apis/jsonPlaceholder";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
