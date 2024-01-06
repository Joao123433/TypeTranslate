const textTranslate = document.querySelector("#text-traslate");
async function fetchText(text, translateFrom, translateTo) {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`);
    const result = await response.json();
    if (result.responseStatus === 200) {
        return result;
    }
    return Promise.reject("Erro inesperado");
}
function getInput() {
    const input = document.querySelector("#text");
    if (input.value !== "") {
        return input.value;
    }
    throw new Error("Insira um texto para ser traduzido");
}
function clearInformation() {
    textTranslate.innerHTML = "";
}
function errorInput() {
    try {
        getInput();
    }
    catch (error) {
        setError(error.message);
    }
}
function getSelects() {
    const selects = document.querySelectorAll("#idiomas");
    return selects;
}
function setError(error) {
    textTranslate.innerHTML = error;
}
function settingTextTransalate(response) {
    textTranslate.innerHTML = response.responseData.translatedText;
}
async function traslate(ev) {
    ev.preventDefault();
    errorInput();
    clearInformation();
    try {
        const inputText = getInput();
        const selects = getSelects();
        const response = await fetchText(inputText, selects[0].value, selects[1].value);
        console.log(response);
        settingTextTransalate(response);
    }
    catch (error) {
        setError(error);
    }
}
document.querySelector("form").addEventListener("submit", traslate);
