document.addEventListener("DOMContentLoaded", () => {
  const fromText = document.querySelector(".fromText");
  const toText = document.querySelector(".toText");
  const fromLang = document.querySelector(".fromLang");
  const toLang = document.querySelector(".toLang");
  const btn = document.querySelector(".btn");

  // デフォルトの言語を設定
  let fromLangVal = fromLang.value || "ja-JP";
  let toLangVal = toLang.value || "en-US";

  fromLang.addEventListener("change", () => {
    fromLangVal = fromLang.value;
  });

  toLang.addEventListener("change", () => {
    toLangVal = toLang.value;
  });

  btn.addEventListener("click", () => {
    let sentence = fromText.value;

    if (!sentence) return;

    if (fromLangVal === "null" || toLangVal === "null") {
      alert("翻訳する言語を選択してください");
      return;
    }

    fetch(`https://api.mymemory.translated.net/get?q=${sentence}&langpair=${fromLangVal}|${toLangVal}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toText.value = data.responseData.translatedText;
      })
      .catch((error) => console.error('Error:', error));
  });
});
