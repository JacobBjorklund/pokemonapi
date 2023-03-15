fetchapi()

document.querySelector('#search').addEventListener('click', () => {
    fetchapi()
})

async function fetchapi() {
    let input = document.querySelector('input').value
    const res = await fetch(`/api/pokemon?name=${input}`)
    let data = await res.json()

    document.querySelector('#autist').addEventListener('click', () => {
        data = data.sort((a, b) => b.name.localeCompare(a.name))
        RenderTable(data)
    })

    document.querySelector('#Experience').addEventListener('click', () => {
        let minWeight = document.querySelector('min-Weight')
        let maxWeight = document.querySelector('max-Weight')
        let data2 = data.filter(
            pokemon => pokemon.weight >= minWeight && pokemon.weight <= maxWeight
        )
        RenderTable(data2)
    })

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