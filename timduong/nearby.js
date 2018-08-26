// const mlways = require ('../models/mlways');
var Waypoints = require ('../models/waypoints');

async function nearestPoint(Lat, Lng) {
    near = {}
    await Waypoints.find({}, (err, points) =>{
        var map = []

        points.forEach((point) => {
            var newpoint = {}
            newpoint.key = point
            let lat = Number(point.lat)
            let lng = Number(point.lng)
            newpoint.value = (Lat-lat)*(Lat-lat) + (Lng-lng)*(Lng-lng)
            map.push(newpoint)
        })

        var min = map[0]

        map.forEach((object) => {
            min = (min.value > object.value) ? object : min
        })

        near = min
        console.log('trong await',near);
    })
    console.log('ngoai await',near);
    return near.key._id;
}
 
module.exports = nearestPoint;