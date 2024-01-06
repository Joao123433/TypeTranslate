const textTranslate: HTMLElement = document.querySelector("#text-traslate")

interface Translate {
  responseData: {
    translatedText: string
  }
}

async function fetchText(text: string, translateFrom: string, translateTo: string) {
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`)
  if(response.ok) {
    return response.json()
  }

  return Promise.reject("Erro ao Traduzir")
}

function getInput() {
  const input: HTMLInputElement = document.querySelector("#text")
  if(input.value !== "") {
    return input.value
  }

  throw new Error("Insira um texto para ser traduzido")
}

function clearInformation() {
  textTranslate.innerHTML = ""
}

function errorInput() {
  try {
    getInput()
  } catch(error) {
    setError(error)
  }
}

function getSelects() {
  const selects: NodeListOf<HTMLInputElement> = document.querySelectorAll("#idiomas")
  return selects
}

function setError(error: string) {
  textTranslate.innerHTML = error
}

function settingTextTransalate(response: Translate) {
  textTranslate.innerHTML = response.responseData.translatedText
}
 
async function traslate(ev: { preventDefault: () => void }) {
  ev.preventDefault()
  errorInput()
  clearInformation()

  try {
    const inputText = getInput()
    const selects = getSelects()
    const response: Translate = await fetchText(inputText, selects[0].value, selects[1].value)
    settingTextTransalate(response)
  } catch(error) {
    setError(error.message)
  }
}

document.querySelector("form").addEventListener("submit", traslate)