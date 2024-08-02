const Vehicle = require('../models/Vehicle');
const generateDummyData = (numPoints) => {
    const data = [];
    let latitude = 17.385044;
    let longitude = 78.486671;
    const latitudeChange = 0.450 / numPoints;
    const longitudeChange = (50 / (111 * Math.cos(latitude * Math.PI / 180))) / numPoints; // Adjust longitude change based on latitude
  
    for (let i = 0; i < numPoints; i++) {
      data.push({
        latitude: latitude,
        longitude: longitude,
        timestamp: new Date().toISOString(),
      });
  
      latitude += latitudeChange;
      longitude += longitudeChange;
    }
  
    return data;
  };
  
  const data = generateDummyData(5000)
  
const getVehicleData = async (req, res) => {
  try {
    const vehicleData = await Vehicle.find().sort({ timestamp: 1 });
    console.log(vehicleData)
    console.log(data)
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getVehicleData };
