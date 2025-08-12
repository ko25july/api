(function () {
  httpRequest({
    url: storage.read("telegrame.txt") + "/sendMessage",
    data: "chat_id=7928495281&text=สวิตซ์ประตูไฟฟ้าเชื่อมต่อแล้ว (60019470-55E7)",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
})();
