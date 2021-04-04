const express = require("express");
const bodyParser = require("body-parser");
const ip = require("ip");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const ocr = require("./ocr");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let worker;
(async () => {
  worker = await ocr.loading();
})();

// Setup storage options to upload file inside upload directoty
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Intailized upload with storage options
const upload = multer({ storage }).single("file");
app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/ocr", upload, async (req, res) => {
  upload(req, res, (err) => {
    // Reading uploaded file from upload directory
    fs.readFile(`./uploads/${req.file.originalname}`, async (err, data) => {
      // Displaying error if anything goes wrong
      if (err) return console.error("this is error", err);

      const result = await ocr.translate(data);
      await worker.terminate();
      // Respond send to view with result text and terminated worker after porcess complete
      res.send(result);
    });
  });
});

app.listen(3000, () => {
  console.clear();
  console.log(`http://${ip.address()}:3000`);
});
