document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const accountNumber = document.getElementById("accountNumber");
  
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(accountNumber.textContent);
        console.log("Copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  });