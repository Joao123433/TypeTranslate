var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const textTranslate = document.querySelector("#text-traslate");
function fetchText(text, translateFrom, translateTo) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`);
        const result = yield response.json();
        if (result.responseStatus === 200) {
            return result;
        }
        return Promise.reject("Erro inesperado");
    });
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
function traslate(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        ev.preventDefault();
        errorInput();
        clearInformation();
        try {
            const inputText = getInput();
            const selects = getSelects();
            const response = yield fetchText(inputText, selects[0].value, selects[1].value);
            settingTextTransalate(response);
        }
        catch (error) {
            setError(error);
        }
    });
}
document.querySelector("form").addEventListener("submit", traslate);
