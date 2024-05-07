import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface GlobalData {
  updated: number;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

interface CountryData {
  country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

const fetchGlobalData = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/all");
  return response.data;
};

const fetchCountryData = async (country: string) => {
  const response = await axios.get(
    `https://disease.sh/v3/covid-19/countries/${country}`
  );
  return response.data;
};

const GlobalMap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: globalData, isLoading: globalLoading } = useQuery<GlobalData>(
    "globalData",
    fetchGlobalData
  );
  const { data, isLoading, isError } = useQuery<CountryData>(
    ["countryData", searchTerm],
    () => fetchCountryData(searchTerm),
    {
      enabled: !!searchTerm,
    }
  );

  return (
    <div className="text-center my-8 py-5 border-t border-gray-400">
      {globalLoading && (
        <div className="text-gray-600">Loading global data...</div>
      )}
      {globalData && (
        <div className="mb-4">
          <h2 className="text-xl font-bold">Global COVID-19 Data:</h2>
          <ul className="list-none py-4 font-semibold text-gray-500">
            <li>Total Cases: {globalData.cases.toLocaleString()}</li>
            <li>Total Deaths: {globalData.deaths.toLocaleString()}</li>
            <li>Total Recovered: {globalData.recovered.toLocaleString()}</li>
            <li>Active Cases: {globalData.active.toLocaleString()}</li>
          </ul>
        </div>
      )}
      <h2 className="text-xl font-bold mb-8 block">
        Country-wise COVID-19 Data:
      </h2>
      <input
        className="text-center border border-gray-300 rounded px-4 py-2 mb-4"
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {data && (
        <>
          <div className="h-[30rem] w-full" style={{ padding: "1.5rem 0rem" }}>
            <MapContainer
              center={[data.countryInfo.lat, data.countryInfo.long]}
              zoom={4}
              className="h-full w-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                key={data.countryInfo._id}
                position={[data.countryInfo.lat, data.countryInfo.long]}
              >
                {/* direction="left" offset={[0, -20]}  */}

                <Popup className="p-4">
                  <div>
                    <h2 className="text-lg font-bold mb-2">{data.country}</h2>
                    <p>
                      <span className="font-bold">Cases:</span> {data.cases}
                    </p>
                    <p>
                      <span className="font-bold">Deaths:</span> {data.deaths}
                    </p>
                    <p>
                      <span className="font-bold">Recovered:</span>{" "}
                      {data.recovered}
                    </p>
                    <p>
                      <span className="font-bold">Active Cases:</span>{" "}
                      {data.active}
                    </p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default GlobalMap;
