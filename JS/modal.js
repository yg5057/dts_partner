document.addEventListener("DOMContentLoaded", () => {
    const confirmButton = document.getElementById("confirm");
    const dimLayer = document.createElement("div");
    dimLayer.className = "dimLayer";
    const modalSection = document.querySelector(".modal-section");
    const cancelButton = modalSection.querySelector(".btn_close");   // 'X', '돌아가기' 버튼
   
    confirmButton.addEventListener("click", () => {
        document.body.appendChild(dimLayer);
        modalSection.style.display = "block";

        cancelButton.addEventListener("click", closeModal);      // 'X', '돌아가기' 버튼을 눌렀을때
    });

    function closeModal() {
        document.body.removeChild(dimLayer);
        modalSection.style.display = "none";
        cancelButton.removeEventListener("click", closeModal);
    }
});

