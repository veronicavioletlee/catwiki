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
    // Search for cat breeds by breed name
    async searchCatBreeds(searchTerm) {
        try {
            let _url = `v1/breeds/search?q=${searchTerm}`;
            const response = await axiosInstance.get(_url);
            return this._convertToCatBreeds(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    // Convert input objects to CatBreed instances
    _convertToCatBreeds(data) {
        let catBreeds = [];
        data.forEach((cat) => {
            let catBreedInstance = new CatBreed(
                cat.id,
                cat.name,
                cat.description,
                cat.temperament,
                cat.origin,
                cat.life_span,
                cat.adaptability,
                cat.affection_level,
                cat.child_friendly,
                cat.grooming,
                cat.intelligence,
                cat.health_issues,
                cat.social_needs,
                cat.stranger_friendly);
            catBreeds.push(catBreedInstance);
        })
        return catBreeds;
    }
}

module.exports = CatService;