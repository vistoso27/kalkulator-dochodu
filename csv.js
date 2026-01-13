function exportToCSV(entries) {
  const header = ["Data", "Opis", "Kwota", "Typ"];
  const rows = entries.map(e =>
    [e.date, `"${e.description}"`, e.amount, e.type].join(",")
  );

  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dane.csv";
  a.click();
}

