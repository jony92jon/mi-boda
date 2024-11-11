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
