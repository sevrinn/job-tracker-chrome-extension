let saveBtn = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let jobLeads = ["www.google.com", "www.sevwelker.com", "www.caskstore.com"]

saveBtn.addEventListener("click", () => {
  jobLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

const renderLeads = () => {
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
