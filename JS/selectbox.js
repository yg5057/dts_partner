document.addEventListener("DOMContentLoaded", () => {
    const selectTrigger = document.getElementById("selectTrigger");
    const optionsContainer = document.getElementById("optionsContainer");
  
    selectTrigger.addEventListener("click", () => {
      optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
    });
  
    const options = optionsContainer.querySelectorAll(".option");
    options.forEach(option => {
      option.addEventListener("click", () => {
        selectTrigger.querySelector("span").textContent = option.textContent;
        optionsContainer.style.display = "none";
      });
    });
  
    document.addEventListener("click", event => {
      if (!selectTrigger.contains(event.target) && !optionsContainer.contains(event.target)) {
        optionsContainer.style.display = "none";
      }
    });
  });
  