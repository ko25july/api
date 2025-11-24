httpRequest({
  method: "POST",
  url: require("Storage").read("telegrame.txt") + "/sendMessage",
  data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: พร้อมทำงานแล้ว",
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

LoopbackB.on("data", function (data) {
  data = data.replaceAll(" [J", "");

  if (data.startsWith("httpRequest")) return;

  setTimeout(httpRequest, 3000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: " + data,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
});

setTimeout(function () {
  LoopbackA.setConsole();
}, 10000);
