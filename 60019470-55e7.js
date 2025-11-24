httpRequest({
  method: "POST",
  url: require("Storage").read("telegrame.txt") + "/sendMessage",
  data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าพร้อมทำงานแล้ว",
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

LoopbackB.on("data", function (data) {
  setTimeout(httpRequest, 1000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: " + data,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
});
