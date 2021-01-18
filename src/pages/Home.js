import getData from '../utils/getData';

const Home = async() =>{
    const characters = await getData(); 
    const view = `
    <div class="Characters">
        ${characters.results.map(character =>`
        <article class="Characters-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <div class="Characters-info"><h2>${character.name}</h2><h3 class="characters-status">${character.status}<span class="${character.status}"><span></h3></div>
            </a>
        </article>
        `).join('')}
    </div>
    `
    // Con el join lo que hacemos es que nos regrese un bloque de html sin las comillas que nos genera el mapeo
    return view;
}

export default Home;