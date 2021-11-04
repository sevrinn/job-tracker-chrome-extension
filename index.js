let jobLeads = []
let saveBtn = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let leadsInLocalStorage = JSON.parse(localStorage.getItem("jobLeads"))

if(leadsInLocalStorage) {
  jobLeads = leadsInLocalStorage
  renderLeads()
}

saveBtn.addEventListener("click", () => {
  jobLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("jobLeads", JSON.stringify(jobLeads))
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for(let i = 0; i < jobLeads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href='https://${jobLeads[i]}'>${jobLeads[i]}</a>
      </li>`
    console.log(jobLeads[i])
  }
  ulEl.innerHTML = listItems
}
