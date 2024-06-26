
export function fileToArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    if (file.type !== "application/pdf") {
      reject(new Error("Invalid file type, please load a PDF."));

      return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      resolve(event.target.result);
    });

    reader.addEventListener("error", (error) => {
      reject(new Error(error));
    });

    reader.readAsArrayBuffer(file);
  });
}

export function processFiles(files) {
  return Promise.all(files.map(fileToArrayBuffer));
}
