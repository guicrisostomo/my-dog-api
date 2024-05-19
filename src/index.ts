import express from "express";

import find from "local-devices";
// import os from "os";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // const interfaces = os.networkInterfaces();
  // const network = Object.keys(interfaces).map((name) => interfaces[name]);

  // const devices = network.flat() as os.NetworkInterfaceInfo[];

  // const localDevices = devices
  //   .filter(
  //     (device) =>
  //       device.family === "IPv4" &&
  //       !device.internal &&
  //       (device.address?.startsWith("192.168") ||
  //         device.address?.startsWith("10.0") ||
  //         device.address?.startsWith("172.16"))
  //   )
  //   .map((device) => device.address);

  // const ipFirstInterval = localDevices[0].split(".").slice(0, 3).join(".");

  // const ipRange = `${ipFirstInterval}.1-${ipFirstInterval}.255`;

  find({
    address: "192.168.100.1-192.168.100.255",
    skipNameResolution: false,
  }).then((devices) => {
    // const devicesIp = devices.map((device) => device.ip);
    // const devicesIpFiltered = devicesIp.filter((device) =>
    //   device.startsWith(ipFirstInterval)
    // );

    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        devices: devices,
      })
    );
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
