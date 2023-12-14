function tekshirish(uzbekcha, inglizcha) {
  const kiritilganSoz = prompt("Inglizcha tarjimasini kiriting:");

  if (kiritilganSoz.toLowerCase() === inglizcha.toLowerCase()) {
    event.target.style.backgroundColor = "green"; 
  } else {
    event.target.style.backgroundColor = "red";
  }
}
