import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  // Run Code based on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("Show me the user", user);

        dispatch({
          type: "SET_USER",
        });
      });
    }
    console.log("I HAVE A TOKEN ==> ", _token);
  }, []);
  return (
    <div className="app">
      {token ? <Player /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
