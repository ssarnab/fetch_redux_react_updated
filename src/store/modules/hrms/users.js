import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import { apiCallBegan } from "../../api";
// import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    
  },
  reducers: {
    usersRequested: (users) => {
      users.loading = true;
    },

    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },

    usersRequestFailed: (users) => {
      users.loading = false;
    },
    // command - event
    usersAdded: (users, action) => {
      users.list.push(action.payload);
    },
  },
});

export const { usersAdded, usersReceived, usersRequested, usersRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
const url = '/users';
export const loadUsers = () => (dispatch, getState) => {
//   const { lastFetch } = getState().entities.bugs;

//   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
//   if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
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
