export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER YOU'RE FINISHED DEVELOPING
  // token:
  // "BQD1D7HCetnVgIWMWho-ABoauEjiE_emC4mJ5C1LFlFR3xLj0GJIY7ZQHXez99opt8cmdopVmYbI-_fd8QDjsHipsvA5fR8LhHPATlnJ3fccO8gwrVCc9GLkCWkcJlbMv_Ta4LHAhjC3HeECGfnZcnrzVMdnCsFOZCnnei9hfhL_gFC9wjiDsW5_XrglbJ9DT4Ee1ETOlv_0VPDarns4HCkyUC-zihl1LL44LplNklu2Bh4Onn_GdSu5OJR2Mv8LFLevzgSMTmU",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
