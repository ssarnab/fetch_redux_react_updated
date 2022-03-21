import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import { apiCallBegan } from "../../api";
// import moment from "moment";

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    postsRequested: (posts) => {
      posts.loading = true;
    },
    postsReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
      posts.lastFetch = Date.now();
    },

    postsRequestFailed: (posts) => {
      posts.loading = false;
    },
    // command - event
    postsAdded: (posts, action) => {
      posts.list.push(action.payload);
    },
  },
});

export const { postsAdded, postsReceived, postsRequested, postsRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
const url = '/posts';
export const loadPosts = () => (dispatch, getState) => {
  //   const { lastFetch } = getState().entities.bugs;

  //   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  //   if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
    })
  );
};

// export const addBug = (bug) =>
//   apiCallBegan({
//     url,
//     method: "post",
//     data: bug,
//     onSuccess: bugAdded.type,
//   });

// export const resolveBug = (id) =>
//   apiCallBegan({
//     // /bugs
//     // PATCH /bugs/1
//     url: url + "/" + id,
//     method: "patch",
//     data: { resolved: true },
//     onSuccess: bugResolved.type,
//   });

// export const assignBugToUser = (bugId, userId) =>
//   apiCallBegan({
//     url: url + "/" + bugId,
//     method: "patch",
//     data: { userId },
//     onSuccess: bugAssignedToUser.type,
//   });

// Selector

// Memoization
// bugs => get unresolved bugs from the cache

// export const getBugsByUser = (userId) =>
//   createSelector(
//     (state) => state.entities.bugs,
//     (bugs) => bugs.filter((bug) => bug.userId === userId)
//   );

// export const getUnresolvedBugs = createSelector(
//   (state) => state.entities.bugs,
//   (state) => state.entities.projects,
//   (bugs, projects) => bugs.list.filter((bug) => !bug.resolved)
// );
