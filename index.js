

let jobLeads = []
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")
const ulEl = document.getElementById("ul-el")
const leadsInLocalStorage = JSON.parse(localStorage.getItem("jobLeads"))

if(leadsInLocalStorage) {
  jobLeads = leadsInLocalStorage
  render(jobLeads)
}


tabBtn.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    jobLeads.push(tabs[0].url)
    localStorage.setItem("jobLeads", JSON.stringify(jobLeads))
    render(jobLeads)
  })
})
deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  jobLeads = []
  render(jobLeads)
})

saveBtn.addEventListener("click", () => {
  jobLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("jobLeads", JSON.stringify(jobLeads))
  render(jobLeads)
})

function render(leads) {
  let listItems = ""
  for(let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${leads[i]}">${leads[i]}</a>
      </li>`
    console.log(leads[i])
  }
  ulEl.innerHTML = listItems
}
