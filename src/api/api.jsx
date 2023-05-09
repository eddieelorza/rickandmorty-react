const URL_BASE = 'https://rickandmortyapi.com/api/character/?name='


const getCharacterByName = async(name) =>{
    try {
    const response = await fetch(`${URL_BASE}${name}`);
    if (!response.ok) {
        throw new Error('ocurrio un error')
    }
    const data = await response.json();
    return data
    } catch (error) {
        console.log('ocurrio un error')
    }
}

export default getCharacterByName