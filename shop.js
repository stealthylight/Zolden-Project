// Identifiants des étapes du formulaire
const steps = document.querySelectorAll('label');

// Fonction pour gérer les clics sur les boutons précédent et suivant
function handleButtonClicked(event) {
  const target = event.target;
  const currentIndex = Array.prototype.indexOf.call(steps, event.target.parentNode);

  if (target.classList.contains('prev')) {
    // Réduire l'index pour afficher la précédente étape
    currentIndex--;
  } else if (target.classList.contains('next')) {
    // Augmenter l'index pour afficher la suivante étape
    currentIndex++;
  }

  // Afficher la nouvelle étape
  const newStep = steps[currentIndex];
  newStep.scrollIntoView();
}

// Écouter les clics sur les boutons précédent et suivant
document.querySelectorAll('.prev, .next').forEach(button => button.addEventListener('click', handleButtonClicked));
