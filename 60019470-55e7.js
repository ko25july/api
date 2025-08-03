(function () {
  const wifi = require("Wifi");
  let oldHostName = wifi.getHostname();
  wifi.setHostname("switch")
  let newHostName = wifi.getHostname();
  console.log("Old Host Name:", `${oldHostName}.local`);
  console.log("New Host Name:", `${newHostName}.local`);
  return newHostName;
})();
