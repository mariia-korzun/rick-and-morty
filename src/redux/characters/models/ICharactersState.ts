interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: string[];
}


type ICharacters = ICharacter[]

export default interface ICharacterState {
    characters: ICharacters;
    currentPage: number;
}

export type {
    ICharacter,
    ICharacters
}


