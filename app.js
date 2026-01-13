const form = document.getElementById("entryForm");
const list = document.getElementById("entries");
const exportBtn = document.getElementById("exportCsv");

async function refresh() {
  list.innerHTML = "";
  const entries = await getEntries();

  entries.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.date} | ${e.description} | ${e.amount} | ${e.type}`;
    list.appendChild(li);
  });

  exportBtn.onclick = () => exportToCSV(entries);
}

form.onsubmit = async e => {
  e.preventDefault();

  const entry = {
    date: date.value,
    description: description.value,
    amount: parseFloat(amount.value),
    type: type.value
  };

  await saveEntry(entry);
  form.reset();
  refresh();
};

refresh();

