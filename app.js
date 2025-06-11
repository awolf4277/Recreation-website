// Colors to use (Bootstrap theme colors)
const bootstrapColors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

// Create a container
const container = document.createElement("div");
container.className = "container mt-5";
document.body.appendChild(container);

// Add header
const header = document.createElement("h2");
header.textContent = "Multicolored Bootstrap Components";
header.className = "mb-4 text-center";
container.appendChild(header);

// Generate Alerts
const alertSection = document.createElement("div");
alertSection.innerHTML = `<h4 class="mb-3">Alerts</h4>`;
bootstrapColors.forEach(color => {
  const alert = document.createElement("div");
  alert.className = `alert alert-${color}`;
  alert.role = "alert";
  alert.innerText = `This is a ${color} alert—check it out!`;
  alertSection.appendChild(alert);
});
container.appendChild(alertSection);

// Generate Badges
const badgeSection = document.createElement("div");
badgeSection.innerHTML = `<h4 class="mt-5 mb-3">Badges</h4>`;
bootstrapColors.forEach(color => {
  const badge = document.createElement("span");
  badge.className = `badge bg-${color} me-2`;
  badge.innerText = `${color}`;
  badgeSection.appendChild(badge);
});
container.appendChild(badgeSection);

// Generate Buttons
const buttonSection = document.createElement("div");
buttonSection.innerHTML = `<h4 class="mt-5 mb-3">Buttons</h4>`;
bootstrapColors.forEach(color => {
  const button = document.createElement("button");
  button.className = `btn btn-${color} me-2 mb-2`;
  button.innerText = `${color}`;
  buttonSection.appendChild(button);
});
container.appendChild(buttonSection);



