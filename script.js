// theme toggle management
function themeTo(theme) {
  if (theme === "light") {
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--secondary", "#08cb00");
    document.documentElement.style.setProperty("--primary", "#253900");
    document.documentElement.style.setProperty("--tertiary", "#000000");
    localStorage.setItem("Theme", "light");
  } else {
    document.documentElement.style.setProperty("--background", "#000000");
    document.documentElement.style.setProperty("--secondary", "#253900");
    document.documentElement.style.setProperty("--primary", "#08cb00");
    document.documentElement.style.setProperty("--tertiary", "#0e1b02");
    localStorage.setItem("Theme", "dark");
  }
}
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  const savedTheme = localStorage.getItem("Theme");
  if (savedTheme === "light") {
    themeTo("dark");
  } else {
    themeTo("light");
  }
});

// Starter Texts
const start = document.getElementById("start");
const loadingDots = document.querySelector(".loadingDots");
window.addEventListener("load", function () {
  setTimeout(function () {
    loadingDots.style.display = "none";
    start.textContent = "Initialization Successful";
  }, 1000);
  setTimeout(() => {
    const introText = `<br>
      [+] USER: Jayesh J Warhadi<br>
      [+] ROLE: Software Developer / Tech Enthusiast<br>
      [+] STATUS: Building things for the web. (with authenticity)<br><br>
      `;
    $("#intro").html(introText);
  }, 1500);
});

// User Input and Content serve Logic
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function runProcess() {
  await delay(2000);
  $(document).ready(function () {
    $("#address").show();
    $(document).click(function () {
      $("#user-input").focus();
    });
    const commands = {
      help: "Help Done",
      about: "About Done",
      skills: "Skills Done",
      contact: "Contact Done",
    };
    $("#user-input").on("keypress", function (e) {
      if (e.which === 13) {
        // 13 is the keycode for Enter
        let rawInput = $(this).val();
        let cmd = rawInput.trim().toLowerCase();
        if (cmd === "clear") {
          // Empty out the output div completely
          $("#user-commands").empty();
        } else if (commands.hasOwnProperty(cmd)) {
          let echoLine = `guest@portfolio:<span class="location">~/commands</span>$ <span>${rawInput}</span>`;
          $("#user-commands").append(echoLine);
          // Output the matching code block
          $("#user-commands").append(
            `<div class="output-block">${commands[cmd]}</div>`,
          );
        } else if (cmd === "") {
          let echoLine = `guest@portfolio:<span class="location">~/no-input</span>$ <span>${rawInput}</span>`;
          $("#user-commands").append(echoLine);
          $("#user-commands").append(`<div></div>`);
        } else {
          // Command not found
          let echoLine = `guest@portfolio:<span class="location">~/invalid</span>$ <span>${rawInput}</span>`;
          $("#user-commands").append(echoLine);
          $("#user-commands").append(
            `<div class="output-block">Command not found: ${cmd}. Type <span class="location">'help'</span> for a list of commands.</div>`,
          );
        }
        // 4. Clear the input field for the next command
        $(this).val("");
        // 5. Automatically scroll to the bottom of the page so the user always sees the latest line
        $("html, body").animate({ scrollTop: $(document).height() }, 100);
      }
    });
  });
  await delay(3000);
}

runProcess();
