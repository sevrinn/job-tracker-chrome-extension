let saveBtn = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let jobLeads = ["www.google.com", "www.sevwelker.com", "www.caskstore.com"]

saveBtn.addEventListener("click", () => {
  jobLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

const renderLeads = () => {
  for(let i = 0; i < jobLeads.length; i++) {
    console.log(jobLeads[i])
  }
}
