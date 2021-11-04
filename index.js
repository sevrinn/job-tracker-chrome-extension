let jobLeads = []
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsInLocalStorage = JSON.parse(localStorage.getItem("jobLeads"))

if(leadsInLocalStorage) {
  jobLeads = leadsInLocalStorage
  renderLeads()
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  jobLeads = []
  renderLeads()
})

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
