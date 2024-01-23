function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assest/avatar-light1.png")
    img.setAttribute("alt", "Avata escuro")
  } else {
    img.setAttribute("src", "assest/avatar1.png")
    img.setAttribute("alt", "Avata Light")
  }
}
