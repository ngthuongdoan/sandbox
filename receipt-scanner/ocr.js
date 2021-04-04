const { createWorker } = require("tesseract.js");
const path = require("path");

const worker = createWorker({
  langPath: path.join(__dirname, "lang-data"),
  logger: (m) => console.log(m),
});

module.exports = {
  async loading() {
    await worker.load();
    await worker.loadLanguage("extravie");
    await worker.initialize("extravie");

    return worker;
  },
  async translate(img) {
    console.log(img);
    const {
      data: { text },
    } = await worker.recognize(img);
    return text;
  },
};
