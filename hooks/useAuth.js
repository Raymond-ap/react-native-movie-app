import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { X_RapidAPI_Key, X_RapidAPI_Host } from "@env";
import route from "../routes";
import axios from "axios";

const AuthContext = createContext({});

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const episodeOptions = {
    method: "GET",
    url: route.episodes,
    headers: {
      "X-RapidAPI-Key": X_RapidAPI_Key,
      "X-RapidAPI-Host": X_RapidAPI_Host,
    },
  };

  const getData = async () => {
    axios
      .request(episodeOptions)
      .then(function (response) {
        setEpisodes(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const onRefresh = useCallback(() => {
    getData();
    wait(2000).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const memoedValue = useMemo(
    () => ({
      episodes,
      loading,
    }),
    [episodes, loading]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
