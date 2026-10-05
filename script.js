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

// Popup function to display appropriate window
const popupWindow = $("#popupWindow");
const popupTitle = $("#popupWindow > .title > h2");
const popupContent = $("#popupWindow > .content");
const backgroundWindow = $("body");
const popups = {
  P1: `
<h2>Portfolio Website</h2>
<p>This is my main portfolio website which i made using html,css&js</p>
<h4>Skills Learnt :</h4>
<p>HTML ▓▓▓▓▓▓▓▓▓▒ 90%
CSS  ▓▓▓▓▓▓▓▓▓▒ 90%
JS   ▓▓▓▓▓▓▓▓▒▒ 80%</p>
<a class="btn" href="https://jayeshwarhadi.github.io/Portfolio/" target="_blank">Visit Website</a>
\n<a class="btn" href="https://github.com/jayeshwarhadi/Portfolio" target="_blank">See Project Code</a>
<img class="onlyImg" src="Assets/portfolio.webp" alt="" srcset="" />`,
  P2: `
<h2>Hirelens</h2>
<span class="warning">[Archived]</span>
<p>An AI Interviewer which interactively converses with the user and
involves the user into verbal and coding rounds then analyzes his posture
and gives feedback . next round consists of HR which gives feedback on the
resume of the user</p>
<h4>Skills Learnt :</h4>
<p>TypeScript (React) ▓▓▓▓▓▒▒▒▒▒ 50%
HTML               ▓▓▓▓▓▓▓▓▓▒ 10%</p>
<a class="btn" href="https://hire-lens-10.vercel.app/" target="_blank">Visit Website</a>
\n<a class="btn" href="https://github.com/jayeshwarhadi/HireLens" target="_blank">See Project Code</a>
\n<a class ="btn" href="https://devpost.com/software/hirelens" target="_blank">Devpost Project Profile</a> <span class="warning">~ Has Demo Video</span>
<img class="onlyImg" src="Assets/hirelens.webp" alt="" srcset="" />`,
  C: `
<p>NAME                    DOMAIN/TYPE    COMMENTS            LINK</p> 
Google PromptWars       Hack2Skill     Appreciation        <a class="warning" target="_blank" href="https://drive.google.com/file/d/1gWLubbzcZ6yi_IdKtnItJSEHnxGPpRlQ/view?usp=sharing" class="link">Click Me</a>
Google FundMyCrazy      Ideathon       Participation       <a class="warning" target="_blank" href="https://drive.google.com/file/d/1azBLD_GMYJEsDIKYM8rO7X7UJbJF4sCz/view?usp=sharing" class="link">Click Me</a>
Smart India Hackathon   SIH2026        Participation       <a class="warning" target="_blank" href="https://drive.google.com/file/d/1jYYMKyZH5NAD1yNVMWQCjPu_T7vhJLIg/view?usp=sharing" class="link">Click Me</a>
Google GenAI Hackathon  Hack2Skill     Participation       <a class="warning" target="_blank" href="https://drive.google.com/file/d/1BDjlliaKvPZVT2euxRVbLkIpGfIoICUY/view?usp=sharing" class="link">Click Me</a>
Python Programing       Reliance F.    Course Completion   <a class="warning" target="_blank" href="https://drive.google.com/file/d/1r2j0fmWCmtPYPyDD5DhDDFd7BaSnDI-C/view?usp=sharing" class="link">Click Me</a>
Human Values            Reliance F.    Course Completion   <a class="warning" target="_blank" href="https://drive.google.com/file/d/16oZonJRUYSUVWai6cX6RiYip1cFqa7b6/view?usp=sharing" class="link">Click Me</a>
Elite Coders  \`26       SummerofCode   Participation       <a class="warning" target="_blank" href="https://drive.google.com/file/d/1kbWGQDMe1EC6i3AAhSHqsQaqD7oQpngy/view?usp=sharing" class="link">Click Me</a>
Tata Crucible Quiz      Unstop&TATA    Participation       <a class="warning" target="_blank" href="https://drive.google.com/file/d/1E24-I9agji4np9wyVQH7j7AHU9_aRD5j/view?usp=sharing" class="link">Click Me</a>

<p>Thanks for showing interest in my Certifications :D</p>`,
};
function showPopup(popup_id) {
  backgroundWindow.addClass("no-scroll");
  if (popup_id === "P1") {
    popupTitle.text("projects@portfolio ~ jayesh.sh");
  } else if (popup_id === "P2") {
    popupTitle.text("projects@portfolio ~ jayesh.sh");
  } else if (popup_id === "C") {
    popupTitle.text("certifications@portfolio ~ jayesh.sh");
  }
  popupContent.html(popups[popup_id]);
  popupWindow.show();
}

// User Input and Content serve Logic
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function runProcess() {
  await delay(2000);
  $(document).ready(function () {
    $("#address").show();
    $(document).keydown(function () {
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
      projects: `
<span class="highlight">NAME                 TECH STACK            STATUS         LINK</span> 
<span id="P1" style="cursor: pointer;" class="link">Portfolio</span>            [Vanilla JS, CSS]     [Completed]    <a target="_blank" href="https://hire-lens-10.vercel.app/" class="link">[https://jayeshwarhadi.github.io/Portfolio/]</a>
<span id="P2" style="cursor: pointer;" class="link">HireLens</span>             [React, Node.js]      [Archived]     <a target="_blank" href="https://hire-lens-10.vercel.app/" class="link">[https://hire-lens-10.vercel.app/]</a>

<span class="link">Click</span> on any Project's Name to open detailed overview.`,
      certifications: `
<span class="highlight">NAME                    DOMAIN/TYPE    COMMENTS            LINK</span> 
Machine Learning        NPTEL          Elite 67%           <a target="_blank" href="https://drive.google.com/file/d/1cyMSfvIW72hD_0nVodz-L6iVXFX5-DMM/view?usp=sharing" class="link">Click Me</a>
Database Management     NPTEL          Participation 50%   <a target="_blank" href="https://drive.google.com/file/d/1u-YivkdQZx-DNyJqAho3Aqr_ra-OGTJG/view?usp=sharing" class="link">Click Me</a>
Website Development     Udemy          Course Completion   <a target="_blank" href="https://drive.google.com/file/d/1MWFTD6pSbX2_zo_jfQcjWB_aafvzgTu_/view?usp=sharing" class="link">Click Me</a>
Google GenAI Hackathon  Hack2Skill     Participation       <a target="_blank" href="https://drive.google.com/file/d/1BDjlliaKvPZVT2euxRVbLkIpGfIoICUY/view?usp=sharing" class="link">Click Me</a>
Python V. Internship    Eduskill       Virtual Internship  <a target="_blank" href="https://drive.google.com/file/d/1M4_Jybsgg2Skw0guqaRdgIj_DwNI_n9y/view?usp=sharing" class="link">Click Me</a>
UI/UX V. Internship     Eduskill       Virtual Internship  <a target="_blank" href="https://drive.google.com/file/d/16hqo7aB1HnuehvqF8bBhzoFGJNRpw35c/view?usp=sharing" class="link">Click Me</a>
<span class="highlight">These are few of my Best Certificates</span>

<a id="C" class="link" style="cursor:pointer">Click here</a> to view full list of Certificates from Google, Hack2Skill, Reliance, Unstop ,etc.`,
      skills: `<p>
HTML         ▓▓▓▓▓▓▓▓▓▒ 90%  _
CSS          ▓▓▓▓▓▓▓▓▓▒ 90%  _|
JS           ▓▓▓▓▓▓▓▓▒▒ 80%  _|=  <a href="https://drive.google.com/file/d/1MWFTD6pSbX2_zo_jfQcjWB_aafvzgTu_/view?usp=sharing">Udemy Webdev Course</a>
JQuery       ▓▓▓▓▓▓▓▓▒▒ 80%  _|   by Hitesh Choudhary
3D Modelling ▓▓▓▓▓▒▒▒▒▒ 50%
Harmonium    ▓▓▓▓▓▒▒▒▒▒ 50%</p>`,
    };
    $("#user-input").on("keypress", function (e) {
      if (e.which === 13) {
        // 13 is the keycode for Enter
        let rawInput = $(this).val();
        let cmd = rawInput.trim().toLowerCase();
        let acceptedcmd = [
          "certificate",
          "certificates",
          "certification",
          "project",
          "skill",
          "social",
          "socials",
        ];
        if (cmd === "clear") {
          // Empty out the output div completely
          $("#user-commands").empty();
        } else if (commands.hasOwnProperty(cmd) || acceptedcmd.includes(cmd)) {
          let echoLine = `guest@portfolio:<span class="location">~/commands</span>$ <span>${rawInput}</span>`;
          $("#user-commands").append(echoLine);
          // Output the matching code block
          if (
            cmd === "certifications" ||
            acceptedcmd.slice(0, 3).includes(cmd)
          ) {
            $("#user-commands").append(
              `<div class="output-block">${commands["certifications"]}</div>`,
            );
          } else if (cmd === "projects" || cmd === "project") {
            $("#user-commands").append(
              `<div class="output-block">${commands["projects"]}</div>`,
            );
          } else if (cmd === "skills" || cmd === "skill") {
            $("#user-commands").append(
              `<div class="output-block">${commands["skills"]}</div>`,
            );
          } else if (
            cmd === "contact" ||
            acceptedcmd.slice(5, 7).includes(cmd)
          ) {
            $("#user-commands").append(
              `<div class="output-block">${commands["contact"]}</div>`,
            );
          } else {
            $("#user-commands").append(
              `<div class="output-block">${commands[cmd]}</div>`,
            );
          }
          $("#P1,#P2,#C").click(function (e) {
            showPopup(e.target.id);
          });
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

$("#closePopup").click(function () {
  $("body").removeClass("no-scroll");
  popupWindow.hide();
});
