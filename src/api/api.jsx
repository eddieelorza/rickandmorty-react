const URL_BASE = 'https://rickandmortyapi.com/api/character'


const getCharacterByName = async(name) =>{
    try {
    const response = await fetch(`${URL_BASE}/?name=${name}`);
    if (!response.ok) {
        throw new Error('ocurrio un error')
    }
    const data = await response.json();
    return data
    } catch (error) {
        console.log('ocurrio un error')
    }
}

const getCharacterById = async(id) =>{
    try {
    const response = await fetch(`${URL_BASE}/${id}`);
    if (!response.ok) {
        throw new Error('ocurrio un error')
    }
    const data = await response.json()
    return data
    } catch (error) {
        console.log('ocurrio un error')
    }
}

const getCharacterBySpecies = async(species) =>{
    try {
    const response = await fetch(`${URL_BASE}/?species=${species}`);
    if (!response.ok) {
        throw new Error('ocurrio un error')
    }
    const data = await response.json()
    return data
    } catch (error) {
        console.log('ocurrio un error')
    }
}

const getEpisodes = async(url) =>{
    try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('ocurrio un error')
    }
    const data = await response.json()
    return data
    } catch (error) {
        console.log('ocurrio un error')
    }
}






export {getCharacterByName,getCharacterById,getCharacterBySpecies,getEpisodes}