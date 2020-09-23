const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    let salida = {
      nombre: "Pepe",
      edad: 29,
      url: req.url,
    };
    // res.write("hola Mundo");
    res.write(JSON.stringify(salida));
    res.end();
  })
  .listen(8080, () => {
    console.log("server en puerto 8080");
  });