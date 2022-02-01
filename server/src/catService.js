const CatBreed = require('./models/catBreed');
const axios = require('axios').default;

const CAT_API_URL   = "https://api.thecatapi.com/"
const CAT_API_KEY   = "2d458017-357b-4fe3-988b-588ebcc939df";

const axiosInstance = axios.create({
    baseURL: CAT_API_URL,
    headers: {
        'X-API-KEY': CAT_API_KEY
    }
});

class CatService {
    // Searches for cat breeds by breed name
    async searchCatBreeds(searchTerm) {
        try {
            let _url = `v1/breeds/search?q=${searchTerm}`;
            const response = await axiosInstance.get(_url);
            let breedResults = [];
            response.data.map(breed => {
                    let breedSummary = {
                        id: breed.id,
                        name: breed.name
                    };
                    breedResults.push(breedSummary);
                }
            );
            return breedResults;
        } catch (e) {
            console.log(e);
        }
    }

    // Gets specified cat breed by id
    async getCatBreed(breedId) {
        try {
            let _url = `v1/images/search?breed_id=${breedId}`;
            const response = await axiosInstance.get(_url);
            switch (response.data.length) {
                case 0: return {};
                case 1: return this._mapToBreedDetail(response.data[0]);
                default: console.log(`Error retrieving breed details. More than 1 breed found for breed id ${breedId}`)
            }
        } catch (e) {
            console.log(e)
        }
    }

    // Converts the Cat API image search response to a CatBreed object with only the required info
    _mapToBreedDetail(breedData) {
        return new CatBreed(
            breedData.breeds[0].id,
            breedData.breeds[0].name,
            breedData.breeds[0].description,
            breedData.url,
            breedData.breeds[0].temperament,
            breedData.breeds[0].origin,
            breedData.breeds[0].life_span,
            breedData.breeds[0].adaptability,
            breedData.breeds[0].affection_level,
            breedData.breeds[0].child_friendly,
            breedData.breeds[0].grooming,
            breedData.breeds[0].intelligence,
            breedData.breeds[0].health_issues,
            breedData.breeds[0].social_needs,
            breedData.breeds[0].stranger_friendly);
    }
}

module.exports = CatService;