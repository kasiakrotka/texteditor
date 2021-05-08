import { forceDownloadFile, forceUploadFile } from "./Utils/FileHandlers";

class ToolMenu {
  constructor() {
    this.connectButtons();
  }

  connectButtons() {
    const textEditBtns = document.querySelectorAll("#text-edit-btns button");
    textEditBtns.forEach((button) => {
      button.addEventListener("click", this.menuBtnHandler);
    });

    const exportBtn = document.getElementById("export-btn");
    const importBtn = document.getElementById("import-btn");
    exportBtn.addEventListener("click", this.exportJsonHandler);
    importBtn.addEventListener("click", this.importJsonHandler);
    /*  document.querySelector(".text-editor").addEventListener("focusin", this.textEditorFocus); */
  }

  menuBtnHandler() {
    const command = this.dataset.command;
    document.execCommand(command, false);
    /* jeszcze to ogarniemy ale chce żeby jak się uczywa jakiejs komendy to żeby się wtym znajdowało */
    /* this.classList.toggle('active-btn') */
  }

  importJsonHandler() {
    forceUploadFile();
  }

  exportJsonHandler() {
    const textEdtiroEl = document.getElementById("editor");
    const editorsContent = JSON.stringify({
      htmlContent: textEdtiroEl.innerHTML,
      textContent: textEdtiroEl.textContent
    });
    forceDownloadFile(editorsContent);
  }

  textEditorFocus() {}
}

new ToolMenu();
