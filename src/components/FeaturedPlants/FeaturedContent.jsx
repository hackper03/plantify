import React, { createContext, useContext } from "react";
import Category from "./Categry";
import { useState, useEffect } from "react";
import axios from "axios";

export const FeaturedContent = createContext();
export const FeaturedProvider = (props) => {
  const [category, setCategory] = useState([]);
  const [plants, setPlants] = useState([]);
  const [categoryID, setCategoryID] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);
  useEffect(() => {
    if (categoryID === 0) {
      axios
        .get("http://localhost:8080/plants")
        .then((response) => {
          setPlants(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the plants!", error);
        });
    } else {
      axios
        .get(`http://localhost:8080/plant/category/${categoryID}`)
        .then((response) => {
          setPlants(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the plants!", error);
        });
    }
  }, [categoryID]);
  console.log(plants)
  return (
    <FeaturedContent.Provider
      value={{ category, plants, categoryID, setCategoryID }}
    >

      {props.children}
    </FeaturedContent.Provider>
  );
};
export default FeaturedProvider;
