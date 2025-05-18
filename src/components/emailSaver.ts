// emailSaver.js

export function saveEmailAsJson(email) {
  const data = {
    email: email,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);


  const prefix = email.split("@")[0];
  link.download = `signup-${prefix}.json`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
