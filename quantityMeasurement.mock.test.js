const assert = require("chai").assert;
const sinon = require('sinon')
//const quantitymeasurement = require("../Measurement/quantitymeasurementService");
//const unitFile = require('../Measurement/unitTypes');
const services = require('../Measurement/quantitymeasurementService');
const controller = require('../Measurement/quantitymeasurementController');

const result = {
    "length": {
        "inch": 1,
        "feet": 12,
        "yard": 36,
        "cm": 0.3937
    },
    "volumn": {
        "gallon": 3.78,
        "litre": 1,
        "ml": 1000
    }

}
// ------------ CONVERSION ------------------
describe("converting units", function () {
    beforeEach(function(){
        sinon.stub(services, 'unitConversion').yields(null, 2);
    })


afterEach(function(){
    services.unitConversion.restore();  
})
    //inches
    it("0 inch should return 0 inch", () => {
        var inch = controller.unitConversion("inch", "length", 1);
        console.log(inch);
        assert.equal(2,inch)
    }),
       // check feet to inch conversion
    it(" 1 feet equals 12 inch", () => {
        var feet = controller.unitConversion("feet", "length", 1);
        assert.equal(2, feet);
    })
})
