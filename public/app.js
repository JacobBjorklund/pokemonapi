fetchapi()

document.addEventListener('click', () => {
    fetchapi()
})

async function fetchapi() {
    let input = document.querySelector('input').value
    const res = await fetch(`/api/pokemon?name=${input}`)
    const data = await res.json()

    RenderTable(data)
    function RenderTable(json) {
        document.querySelector('#parent').innerHTML = `
        ${json.map(pokemon => `<div class="style">
        <h1>${pokemon.name}</h1>
        <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
        </div>
        
        `).join('')}
        `
    }
}