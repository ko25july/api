(function () {
  require("code.js").httpRequest({
    url: require("code.js").readJSON().TELEGRAME_URL,
    data: require("code.js").readJSON().TELEGRAME_DATA,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
})();
