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

  console.log("Datos del formulario:", formDataObject);

  try {
    // TODO: Reemplazar con la URL de la API
    const response = await fetch("https://fakeapi.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      alert("¡Gracias por confirmar tu asistencia!");
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
