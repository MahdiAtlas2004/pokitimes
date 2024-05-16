import { combineReducers } from "@reduxjs/toolkit";

const initState = {
  posts: [
    { id: 1, title: "Sky Fall", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque explicabo soluta, unde provident, rem omnis voluptas quidem sit nesciunt laborum minima quo officiis quisquam incidunt quia aspernatur distinctio et vel?" },
    { id: 2, title: "Last Kingdom", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque explicabo soluta, unde provident, rem omnis voluptas quidem sit nesciunt laborum minima quo officiis quisquam incidunt quia aspernatur distinctio et vel?" },
    { id: 3, title: "Shawshank Redemption", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque explicabo soluta, unde provident, rem omnis voluptas quidem sit nesciunt laborum minima quo officiis quisquam incidunt quia aspernatur distinctio et vel?" }
  ],
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    // Handle your actions here if any
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
