import React, { useEffect, useState } from "react";
import { PetContainer } from "./components/card/Card";
import "./App.scss";
import { Pet } from "./types/pet";
import { Filters } from "./components/filters/Filters";
import { Navbar } from "./components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getTokenSourceMapRange } from "typescript";
import { getPetsData } from "./features/pet-slice";
const { ACCESS_KEY } = process.env;

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState([]);
  // const [token, setToken] = useState([]);
  // const pets: any = useAppSelector((state: any) => state.petsReducer.pets);
  // const aois: any = useAppSelector((state) => state.aoiReducer.aois);
  const dispatch = useAppDispatch();
  const getData = async () => {
    // console.log("env ",process.env.REACT_APP_ACCESS_KEY);
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body: "grant_type=client_credentials&client_id=oFuLxIrG3hzGEkWZK4l2g6wCGka7cB26zCaQMhadSNGY2ULNwx&client_secret=1m3M9RwAhyftyT7cMpepg8FoWK2TyKcy5gUqVkFv",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        return fetch("https://api.petfinder.com/v2/animals", {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setPets(data.animals);
      })
      .catch(function (err) {
        console.log("something went wrong", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="logo">
        <img className="logo-img" src="./logo.png" alt="logo" />
      </div>
      <hr />
      <div className="header margin-left-15">
        <div className="navbar margin-bottom-5">
          <Navbar />
        </div>
        <div className="filters margin-right-30 flex">
          <Filters />
        </div>
      </div>
      <div className="body margin-left-15">
        {pets.map((pet: Pet) => {
          return <PetContainer pet={pet} key={pet.id} />;
        })}
      </div>
    </div>
  );
}
