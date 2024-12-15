import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchNamedData } from '../queries/useFetchCountries';
import { useParams } from 'react-router';

const CountryPage:React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const {data, error, isLoading} = useQuery({
    queryKey: ['country'],
    queryFn: fetchNamedData,
  });

  console.log(data);
  if(isLoading) return <h1>Loading...</h1>
  if (error) return <h1>oops! something went wrong</h1>;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default CountryPage
