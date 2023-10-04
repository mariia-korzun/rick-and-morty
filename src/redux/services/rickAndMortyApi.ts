import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { ICharacter } from "../characters/models/ICharactersState";

const HOST: string = 'https://rickandmortyapi.com';

const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: `${HOST}/api/`,
    timeout: 10000,
  }),
  {
    maxRetries: 1,
  },
);

interface ICharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IGetCharactersResponse {
  info: {
    count: number;
    pages: number;
  };
  results: ICharacterResponse[]
}

interface IGetCharactersTransformedResponse {
  pages: number;
  characters: ICharacterResponse[]
}

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery,
  endpoints: (builder) => ({
    getCharacters: builder.query<IGetCharactersTransformedResponse, number>({
      query: (page: number) => ({
        url: `character/?page=${page}`,
      }),
      transformResponse: ({ results, info: { pages } }: IGetCharactersResponse) => {
        const characters = results.map(({ id, name, status, species, gender, image }) => {
          return { id, name, status, species, gender, image }
        });

        return {
          characters,
          pages
        } as IGetCharactersTransformedResponse
      },
    }),
    getCharacter: builder.query<ICharacter, number>({
      query: (id: number) => ({
        url: `character/${id}`,
      }),
      transformResponse: ({ id, name, status, species, gender, image, episode  }: ICharacterResponse) => {
        return {
          id, name, status, species, gender, image, episode
        } as ICharacter
      },
    }),
  }),
});
