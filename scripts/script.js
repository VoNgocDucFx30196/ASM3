const sections = ["experience", "education", "activities", "hobbies", "language", "skills"];

for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i]);
    const button = document.getElementById(sections[i] + "-button");

    section.addEventListener("mouseenter", () => {
        button.classList.remove("hide");
    });

    section.addEventListener("mouseleave", () => {
        button.classList.add("hide");
    });
}




function CheckEmail() {
  const email = document.getElementById("email").value;
  const info = document.getElementById("infomation");
  const form = document.getElementById("form");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    form.className = "hide";
    info.className = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

function toggleInfo(id) {
    document.getElementById(id).classList.toggle("hide-info");
    document.getElementById(id+'-content').classList.toggle("hide");
    const experienceButton = document.getElementById(id+'-button');
    if (experienceButton.textContent === "Show More") {
        experienceButton.textContent = "Show Less";
    } else {
        experienceButton.textContent = "Show More";
    }
}
