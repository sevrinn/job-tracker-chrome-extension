let saveBtn = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let jobLeads = []

saveBtn.addEventListener("click", () => {
  jobLeads.push(inputEl.value)
  console.log(jobLeads)
})