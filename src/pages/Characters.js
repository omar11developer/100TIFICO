import getData from "../utils/getData";
import getHash from "../utils/getHash";


const Characters = async () => {
    const id = getHash();
    const character = await getData(id);
const view = `
    <div class="nav">
        <h1><span>${character.name}</span></h1>
        <div class="hr"></div>
    </div>
    <div class="Characters-inner ">
        
        <articule class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
        
        </articule>
        <articule class="Characters-card">
            <h3>Episodes: <span class="Characters-card--span">${character.episode.length}</span></h3>
            <h3>Status: <span class="Characters-card--span">${character.status}</span></h3>
            <h3>Species: <span class="Characters-card--span">${character.species}</span></h3>
            <h3>Gender: <span class="Characters-card--span">${character.gender}</span></h3>
            <h3>Origin: <span class="Characters-card--span">${character.origin.name}</span></h3>
            <h3>Last Location: <span class="Characters-card--span">${character.location.name}</span></h3>
        </articule>
    </div>
    <a href="/" class="btn-regresar">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
    </a>
`;
return view;

}
export default Characters;