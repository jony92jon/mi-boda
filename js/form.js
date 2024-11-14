const confirmDialogID = document.querySelector("#confirmDialogID");
const closeDialogID = document.querySelector("#closeDialogID");
const modal = document.querySelector("#modal");

function openModal() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

confirmDialogID.addEventListener("click", openModal);
closeDialogID.addEventListener("click", closeModal);

const form = document.querySelector("#formulario_asistencia");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());

  const API_BASE_URL =
    false === "development"
      ? "http://localhost:3000/submit"
      : "https://fjumvjxo8d.execute-api.eu-central-1.amazonaws.com/Prod/submit";

  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      form.reset();
      closeModal();
      window.location.href = "success.html";
    } else {
      throw new Error("Error al enviar el formulario");
    }
  } catch (error) {
    console.error("Error:", error);
    alert(
      "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
    );
  }
});
