const reHydrateStore = () => {
    const characters = localStorage.getItem('characters');

    return characters !== null ? JSON.parse(characters) : []
};

export { reHydrateStore }