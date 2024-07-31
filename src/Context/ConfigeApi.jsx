/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ConfigContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [change, SetChanges] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.dr-eissa.com/api/v1/config"
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ConfigContext.Provider value={{ apiData, setApiData, isLoading, change, SetChanges }}>
      {children}
    </ConfigContext.Provider>
  );
};
