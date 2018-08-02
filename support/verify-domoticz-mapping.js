// Verify that there are domoticz mappings for every device.
const devices = require('zigbee-shepherd-converters').devices;
const domoticz = require('../lib/domoticz');

let failed = false;
devices.forEach((d) => {
    if (!domoticz.mapping[d.model]) {
        console.error(`Missing domoticz mapping for '${d.model}'`);
        failed = true;
    }
});

process.exit(failed ? 1 : 0);