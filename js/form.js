import { openModal, closeModal } from "./modal.js";

const form = document.querySelector("#formulario_asistencia");
const confirmDialogID = document.querySelector("#confirmDialogID");
const modal = document.querySelector("#modal");

modal.addEventListener("click", (e) => {
  const modalDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  ) {
    closeModal();
  }
});

confirmDialogID.addEventListener("click", openModal);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());

  console.log(formDataObject, "formDataObject");

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
      if (formDataObject.asistencia === "no") {
        window.location.href = "no_going.html";
      } else {
        window.location.href = "success.html";
      }
      form.reset();
      closeModal();
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
