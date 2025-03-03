// ADD FORM FIELD REFERENCE MUST CONTAINE 9 NUMBERS

function isValidReference(reference) {

  const regex = /^[0-9]{9}$/;

  return regex.test(reference);
  
}

const form = document.getElementById('add-form-field');

form.addEventListener('submit', function(event) {
  const reference = document.getElementById('reference').value;


  if (!isValidReference(reference)) {
    alert("La référence doit contenir exactement 9 chiffres.");
    event.preventDefault();
  }
});

const buttonForm = document.getElementById("notAllowed");
const buttonPicture = document.getElementById("picturenotAllowed");

buttonForm.disabled = true;
buttonPicture.disabled = true;