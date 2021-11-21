
//The Services That The User Can Get
const homeVisit = 'homeVisit'
const phoneCall = 'phoneCall'
const storeVisit = 'storeVisit'

//The Problem Type
const stolen = [homeVisit, storeVisit]
const broken = [homeVisit, phoneCall, storeVisit]
const noWifi = [homeVisit, phoneCall, storeVisit]

//The Devices
const fridge = {stolen, broken}
const smartPhone = {stolen, broken, noWifi}

//The All Services
const services = {
    fridge, 
    smartPhone
}

//This function gets the services that the user needs 
function getServices(deviceType, problemType) {
    if (!services[deviceType] || !services[deviceType][problemType]) {
        return []
    }
    return services[deviceType][problemType]
}

//Exporting the function 
module.exports = {
    getServices
}