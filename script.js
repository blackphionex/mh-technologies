document.getElementById("year").textContent = new Date().getFullYear();

const ideaButton = document.getElementById("idea-button");
if (ideaButton) {
  ideaButton.addEventListener("click", () => {
    const type = document.getElementById("idea-type").value;
    const details = document.getElementById("idea-details").value.trim();
    const result = document.getElementById("idea-result");

    const message = `Hi MH Technologies, I'd like help with ${type}.` + (details ? ` ${details}` : "");
    const mailLink = `mailto:www.yabu154@gmail.com?subject=${encodeURIComponent("New idea: " + type)}&body=${encodeURIComponent(message)}`;
    const tgLink = `https://t.me/yabavpn?text=${encodeURIComponent(message)}`;

    const makeLink = (label, href, newTab) => {
      const a = document.createElement("a");
      a.textContent = label;
      a.href = href;
      a.style.color = "inherit";
      a.style.textDecoration = "underline";
      if (newTab) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      return a;
    };

    result.textContent = "";
    result.append(`Good starting point: ${type}. Send it to us and we'll reply with a practical first step. `);
    result.append(makeLink("Send on Telegram", tgLink, true));
    result.append(" · ");
    result.append(makeLink("Send by email", mailLink, false));
  });
}
