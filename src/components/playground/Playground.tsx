"use client";
import React, { useState, useEffect } from "react";
import { socket } from "@/socket";
import PitchForm from "../pitch-form/PitchForm";
import CityBox from "../city-box/CityBox";
import axios from "axios";
import { CityPitch, NewPitch } from "./types";
import Loader from "../loader/Loader";

const Playground = () => {
  const [city, setCity] = useState<string>("");
  const [oldPitches, setOldPitches] = useState<CityPitch[]>([]);
  const [oldPitchesLoader, setOldPitchesLoader] = useState<boolean>(true);
  const [latestPitches, setLatestPitches] = useState<NewPitch[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const handleNewPitch = (pitch: NewPitch) => {
      console.log("Incoming Pitch: ", pitch);
      let temp_pitches = [...latestPitches];
      console.log("Existing Pitch: ", temp_pitches[0]);
      temp_pitches[0].city = pitch.city;
      temp_pitches[0].createdAt = pitch.createdAt;
      temp_pitches[0].isLoading = false;
      temp_pitches[0].pitch = pitch.pitch;
      setLatestPitches(temp_pitches);
    };

    const handleError = (error: any) => {
      setErrorMessage(`Error: ${error}`);
    };

    setOldPitchesLoader(false);

    socket.on("pitchUpdate", handleNewPitch);
    socket.on("error", handleError);

    return () => {
      socket.off("pitchUpdate", handleNewPitch);
      socket.off("error", handleError);
    };
  }, [latestPitches]);

  useEffect(() => {
    const getExistingPitches = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/chat-gpt/pitches`
      );
      console.log(response);
      setOldPitches(response.data);
    };

    getExistingPitches();
  }, []);

  const sendCityName = (cityName: string) => {
    let latestPitch: NewPitch = {
      city: cityName,
      pitch: "",
      isLoading: true,
      createdAt: null,
    };
    setLatestPitches([latestPitch, ...latestPitches]);
    socket.emit("requestPitch", { city: cityName });
    setCity("");
  };

  return (
    <div className="w-[100%] flex flex-col gap-5 overflow-auto max-h-[80vh] border-2 border-gray-300 rounded-lg shadow-sm p-4">
      <PitchForm value={city} setValue={setCity} sendCityName={sendCityName} />

      <h3 className="text-2xl font-extrabold">New Generated Pitches</h3>
      {latestPitches.map((pitch, index) => (
        <CityBox
          key={index}
          cityName={pitch.city}
          cityPitch={pitch.pitch}
          isLoading={pitch.isLoading}
          createdAt={pitch.createdAt}
        />
      ))}
      <h3 className="text-2xl font-extrabold">Old Generated Pitches</h3>
      {oldPitchesLoader && <Loader />}
      {oldPitches.map((pitch, index) => (
        <CityBox
          key={index}
          cityName={pitch.city}
          cityPitch={pitch.pitch}
          isLoading={oldPitchesLoader}
          createdAt={pitch.createdAt}
        />
      ))}
    </div>
  );
};

export default Playground;
