

export const toggleFavorite = (id: number) => {
    let favs: number[] = JSON.parse(localStorage.getItem("favs") || "[]")
    if (favs.includes(id)) {
        favs = favs.filter(pokemonId => pokemonId != id)
    } else {
        favs.push(id)
    }
    localStorage.setItem("favs", JSON.stringify(favs))
}

export const checkFavorite = (id: number): boolean => {
    if (typeof window === "undefined") return false
    let favs: number[] = JSON.parse(localStorage.getItem("favs") || "[]")
    return favs.includes(id)
}