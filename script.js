function changeImage() {
    if (
      document.getElementById("123").src ===
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
    ) {
      document.getElementById("123").src =
        "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementById("switch").innerHTML = "Desligar";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");
    } else if (
      document.getElementById("123").src ===
      "https://i.postimg.cc/6QyTynzr/bulb-on.png"
    ) {
      document.getElementById("123").src =
        "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      document.getElementById("switch").innerHTML = "Ligar";
      document.getElementById("main").classList.add("lightoff");
      document.getElementById("main").classList.remove("lighton");
    }
  }
  
  document.getElementById("switch").addEventListener("click", changeImage);
  
  