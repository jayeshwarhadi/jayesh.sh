// theme toggle management
function themeTo(theme) {
  if (theme === "light") {
    document.documentElement.style.setProperty("--highlights", "#08cb00");
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--secondary", "#08cb00");
    document.documentElement.style.setProperty("--primary", "#253900");
    document.documentElement.style.setProperty("--tertiary", "#000000");
    localStorage.setItem("Theme", "light");
  } else {
    document.documentElement.style.setProperty("--highlights", "#ffffff");
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
const now = new Date();
const istDateTime = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
const userLocalDate = now.toLocaleString("en-IN");
let myStatus = "Unknown";
if (now.getHours < 5 && now.getHours > 22) {
  myStatus = "Sleeping zzz";
} else {
  myStatus = "Awake :D";
}
window.addEventListener("load", function () {
  setTimeout(function () {
    loadingDots.style.display = "none";
    start.textContent = `Initialization Successful at ${userLocalDate}`;
  }, 1000);
  setTimeout(() => {
    const introText = `
      [+] USER: Jayesh J Warhadi
      [+] ROLE: Software Developer / Tech Enthusiast
      [+] LOCATION: Pune IST (GMT+5:30)
      [+] MY TIME: ${istDateTime} in Pune and is probably ${myStatus}
      [+] STATUS: Building things for the web. (with authenticity)

type 'help' for commands`;
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
      help: `
clear - clean the mess on your screen :B
about - learn more about me :D
contact - reach out to me
projects - see what i am working on :P
certifications - see what i have achieved
skills - get to know my skills`,
      about: `    
I'm a <span class="highlight">developer</span> who loves turning complex problems into elegant, 
efficient code. I specialize in <span class="highlight">building good, scalable applications 
and learning new technologies</span> along the way. 

When I'm not in the terminal or VS Code, you can find me making <a href="#" class="link">something in blender</a>
or scrolling through <a href="https://www.linkedin.com/in/jayeshwarhadi/" target="_blank" class="link">LinkedIn.</span></a>`,
      contact: `
EMAIL:      <a href="mailto:jayesh.warhadi2005@gmail.com" class="link">jayesh.warhadi2005@gmail.com</a>
GITHUB:     <a href="github.com/jayeshwarhadi" class="link">github.com/jayeshwarhadi</a>
LINKEDIN:   <a href="linkedin.com/in/jayeshwarhadi" class="link">linkedin.com/in/jayeshwarhadi</a>
STATUS:     <span class="highlight">Accepting freelance projects and Internships</span>

I'm always open to discussing new projects, creative ideas, 
or opportunities to be part of your visions.

Email me directly at <a class="link" href="mailto:jayesh.warhadi2005@gmail.com">jayesh.warhadi2005@gmail.com</a> 
for more infomation and availability.`,
      projects: `Projects Done`,
      certifications: `Certifications Done`,
      skills: `Skills Done`,
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
