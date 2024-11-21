document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");
  const accountNumber = document.getElementById("accountNumber");

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(accountNumber.textContent);
      console.log("Copied to clipboard");

      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.remove("-translate-y-full", "opacity-0");
      }, 100);

      setTimeout(() => {
        toast.classList.add("-translate-y-full", "opacity-0");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 300);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });
});
