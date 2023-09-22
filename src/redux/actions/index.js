export const QUERY_PARAM = "QUERY_PARAM";
export const SET_SEARCH = "SET_SEARCH";

export const setQueryParam = (param) => ({ type: QUERY_PARAM, payload: param });
export const setSearch = (param) => ({ type: SET_SEARCH, payload: param });

export const search = (searchQuery) => {
  return async (dispatch) => {
    console.log("here");
    if (searchQuery.length > 2) {
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
          method: "GET",
        }); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songs = result.data; // gets the songs info
          dispatch(setSearch(songs));
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      //else just hide the section!
      document.querySelector("#searchResults").style.display = "none";
    }
  };
};
