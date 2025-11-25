httpRequest({
  method: "POST",
  url: require("Storage").read("telegrame.txt") + "/sendMessage",
  data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: พร้อมทำงานแล้ว",
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

Serial1.on("data", function (data) {
  let index = data.indexOf("httpRequest");

  if (index >= 0) return;

  data = data.slice(index, -2).replaceAll("[J", "");

  setTimeout(httpRequest, 3000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: " + data,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
});
