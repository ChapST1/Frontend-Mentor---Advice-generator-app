//variables
const phraseId = document.getElementById("advice-id-content")
const phrase = document.getElementById("advice-content")
const btn = document.getElementById("btn")

//Events
window.addEventListener("load", async () => {
    showData()
})

btn.addEventListener("click", () => {
    showData()
})


//functions 
async function getData() {
    const apiUrl = "https://api.adviceslip.com/advice"
    const res = await fetch(apiUrl)
    const data = await res.json()

    return data
}
async function showData() {
    clearData()
    const data = await getData()
    addData(data)
}
function addData(obj) {
    phraseId.textContent = `ADVICE #${obj.slip.id}`
    phrase.textContent = `"${obj.slip.advice}"`
}
function loader() {
    if(phrase.textContent === "" && phraseId.textContent === "") {
        phrase.textContent = "Loading..."
        phraseId.textContent = "Loading..."
    }
}
function clearData(){
    phrase.textContent = ""
    phraseId.textContent = ""
    loader()
}