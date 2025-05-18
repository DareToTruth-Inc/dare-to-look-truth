// formSaver.js

export function saveApplicationToFile(data, file) {

  const info = {
    ...data,
  };

  const jsonBlob = new Blob([JSON.stringify(info, null, 2)], { type: "application/json" });
  const jsonLink = document.createElement("a");
  jsonLink.href = URL.createObjectURL(jsonBlob);
  jsonLink.download = `application-${data.fullName.replace(/\s+/g, "_") || "unknown"}.json`;
  document.body.appendChild(jsonLink);
  jsonLink.click();
  document.body.removeChild(jsonLink);


  if (file) {
    const fileLink = document.createElement("a");
    fileLink.href = URL.createObjectURL(file);
    fileLink.download = `resume-${data.fullName.replace(/\s+/g, "_") || "unknown"}-${file.name}`;
    document.body.appendChild(fileLink);
    fileLink.click();
    document.body.removeChild(fileLink);
  }
}
