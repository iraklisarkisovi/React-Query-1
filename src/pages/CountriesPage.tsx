import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchData } from "../queries/useFetchCountries";
import Form from "../Components/Form"
import { useNavigate } from "react-router";

const CountriesPage: React.FC = () => {
  const navigator = useNavigate()
  const [filteredData, setFilteredData] = useState<any[]>([]); 
  const { data, isLoading, error } = useQuery({
    queryFn: fetchData,
    queryKey: ["countries"],
  });

  const handleSearch = (searchTerm: string) => {
    if (data) {
      const filtered = data.filter((country: any) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
 
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: Unable to fetch data</h1>;

  return (
    <>
      <Form onSearch={handleSearch} />
      {filteredData.length > 0
        ? filteredData.map(({ name, independent }: any) => (
            <button onClick={() => navigator(`/country/${name.common}`)}>
              <div key={name.common}>
                <h1>{name.common}</h1>
                <h2>{`(${name.official})`}</h2>
                <h2>{independent ? "Independent" : "Not Independent"}</h2>
              </div>
            </button>
          ))
        : data?.map(({ name, independent }: any) => (
            <button onClick={() => navigator(`/country/${name.common}`)}>
              <div key={name.common}>
                <h1>{name.common}</h1>
                <h2>{`(${name.official})`}</h2>
                <h2>{independent ? "Independent" : "Not Independent"}</h2>
              </div>
            </button>
          ))}
    </>
  );
};

export default CountriesPage;
