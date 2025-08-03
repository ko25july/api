(function () {
  const dataJSON = require("Storage").readJSON("data.json", true);
  const urlObject = url.parse(dataJSON.PROXY_SERVER + "https://api.telegram.org/bot7584978954:AAFRYIHVRrriWDCK5syHUrTLQeyg1J8Agic/sendMessage", true);

  let body = "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าเชื่อมต่อแล้ว (60019470-55E7)";

  urlObject.protocol = "http"; // Ensure the protocol is set to HTTP to avoid issues with HTTPS

  if (dataJSON.HTTP_AUTHORIZATION && dataJSON.HTTP_AUTHORIZATION.length > 0) {
    urlObject.headers = Object.assign(urlObject.headers, { "Authorization": dataJSON.HTTP_AUTHORIZATION });
  }

  urlObject.headers = Object.assign(urlObject.headers, { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": body.length });

  const req = require("http").request(urlObject, function(res) {
    res.on("data", function(data) {
      console.log("HTTP> " + data);
    });
    res.on("close", function(data) {
      console.log("Connection closed");
    });
    res.on("error", function(error) {
      console.error(error);
    });
  });
  req.write(body);
  req.end();
})();
