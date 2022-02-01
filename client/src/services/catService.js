export const CatService = {
    searchBreeds(searchQuery) {
        return fetch(`/api/breeds/search?name=${searchQuery}`).then((res) => res.json())
    },
    fetchBreedDetails(breedId) {
        return fetch(`/api/breeds/${breedId}`).then((res) => res.json())
    }
}

export default CatService;