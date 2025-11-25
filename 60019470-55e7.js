httpRequest({
  method: "POST",
  url: require("Storage").read("telegrame.txt") + "/sendMessage",
  data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: พร้อมทำงานแล้ว",
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

LoopbackB.on("data", function (data) {
  if (data.includes("httpRequest")) return;

  data = data.slice(2, -2).replaceAll("[J", "");

  let idTimeout = setTimeout(httpRequest, 3000, {
    method: "POST",
    url: require("Storage").read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: " + data,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });

  if (idTimeout > 5) {
    Serial1.setConsole();

    httpRequest({
      method: "POST",
      url: require("Storage").read("telegrame.txt") + "/sendMessage",
      data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้า: หยุดการแจ้งเตือนชั่วตราว เนื่องจากเกิดข้อผิดพลาดบ่อยมากเกินไป",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    setTimeout(function () {
      LoopbackA.setConsole();
    }, 60000);
  }
});

setTimeout(function () {
  LoopbackA.setConsole();
}, 10000);
