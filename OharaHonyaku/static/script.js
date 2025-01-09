const fromText = document.querySelector(".fromText");
const toText = document.querySelector(".toText");
const fromLang = document.querySelector(".fromLang");
const toLang = document.querySelector(".toLang");
const btn = document.querySelector(".btn");

let fromVal = "ja-JP";
let toVal = "en-US";


fromLang.addEventListener("change", () => {
    fromLangVal = fromLang.value;
  });
  toLang.addEventListener("change", () => {
    toLangVal = toLang.value;
  });
// https://mymemory.translated.net/doc/spec.php
btn.addEventListener("click", () => {
    let sentence = fromText.value;

    if (!sentence) return;
    fetch(
      `https://api.mymemory.translated.net/get?q=${sentence}&langpair=${fromLangVal}|${toLangVal}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return (toText.value = data.responseData.translatedText);
      });
  });