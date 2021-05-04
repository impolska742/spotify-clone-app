import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run Code based on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );
    }
  }, []);

  // console.log(user);
  // console.log("I HAVE A TOKEN ==> ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
