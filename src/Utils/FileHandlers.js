export function forceDownloadFile(data) {
  const blob = new Blob([data], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "text.json";
  anchor.click();
  window.URL.revokeObjectURL(url);
  anchor.remove();
}

export function forceUploadFile() {
  //<input type="file" id="file-input">
  const input = document.createElement("input");
  input.type = "file";
  input.id = "file-input";
  input.accept = "application/json";
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      const fr = new FileReader();
      fr.onload = function (e) {
        const result = JSON.parse(e.target.result);
        console.log(result);
        const textEditor = document.querySelector("#editor");
        textEditor.innerHTML = result.htmlContent;
      };
      fr.readAsText(input.files.item(0));
    }
  });
  input.click();
}
