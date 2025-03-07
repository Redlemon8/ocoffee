// Gestion Toast erreur coté client section admin 

const visitors = document.querySelectorAll(".visitor");
const toast = document.getElementById("toast");


visitors.forEach(visitor => {
  visitor.addEventListener("click", restrictedAction);
});

function restrictedAction(event) {
  event.preventDefault();
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}







