httpRequest({
  method: "POST",
  url: require("Storage").read("telegrame.txt") + "/sendMessage",
  data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าพร้อมทำงานแล้ว",
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

ws.on("open", function () {
  setTimeout(httpRequest, 1000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าไดัเริ่มการเชื่อมต่อแล้ว",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
});

ws.on("close", function () {
  setTimeout(httpRequest, 1000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าได้หยุดการเชื่อมต่อแล้ว",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
});
