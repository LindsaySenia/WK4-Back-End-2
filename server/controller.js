const { getMovies } = require('../../../Demos/back-end-2-demo/server/controller');
const houses = require('./db.json');
var globalId = 4;

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let houseIndex = houses.findIndex((house) => house.id === +req.params.id);
        houses.splice(houseIndex, 1);
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        let newHouse = {
            id: globalId,
            title,
            rating,
            imageURL,
        };
        houses.push(newHouse);
        res.status(200).send(houses);
        globalId ++
    },
    updateHouse: (req, res) => {
        let houseId = req.params.id;
        let houseIndex = houses.findIndex((house) => house.id === +req.params.id);
        if (req.body.type === 'plus') {
            houses[houseIndex].price += 10000
        } else if (
            req.body.type === 'minus') {
            houses[houseIndex].price -= 10000
            }
        res.status(200).send(houses);
    },
}