import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { buildTransaction, startDeposit, finishDeposit } from "./actions";
import IState, { ICharacter } from "./models/ICharactersState";
import { reHydrateStore } from "../helpers";

const initialState: IState = {
  characters: reHydrateStore(),
  currentPage: 1
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacter(state: IState, { payload }: PayloadAction<ICharacter>): IState {
      return { ...state, characters: [...state.characters, payload] };
    },
    deleteCharacter(state: IState, { payload }: PayloadAction<ICharacter>): IState {
      const characterId = state.characters.findIndex(character => character.id === payload.id)
      return { ...state, characters: [...state.characters.slice(0, characterId), ...state.characters.slice(characterId + 1)] };
    },
    setCurrentPage(state: IState, { payload }: PayloadAction<number>): IState {
      return { ...state, currentPage: payload };
    },
  }
});

export const {
  setCharacter,
  setCurrentPage,
  deleteCharacter
} = charactersSlice.actions;

export default charactersSlice.reducer;
