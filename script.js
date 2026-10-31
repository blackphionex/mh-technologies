document.getElementById("year").textContent = new Date().getFullYear();

const ideaButton = document.getElementById("idea-button");
if (ideaButton) {
  ideaButton.addEventListener("click", () => {
    const type = document.getElementById("idea-type").value;
    const details = document.getElementById("idea-details").value.trim();
    const result = document.getElementById("idea-result");
    const summary = details ? ` Your starting point: “${details}”` : "";
    result.textContent = `Great place to start: ${type}.${summary} MH Technologies can review the idea, identify a practical first step, and discuss what is feasible.`;
  });
}
