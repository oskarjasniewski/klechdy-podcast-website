// Simple YAML parser for basic key-value pairs
function parseYAML(yamlText) {
  const lines = yamlText.split("\n");
  const result = {};
  let currentKey = null;
  let currentValue = "";
  let isMultiline = false;

  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith("#")) continue;

    if (line.includes(":") && !isMultiline) {
      if (currentKey && currentValue) {
        result[currentKey] = currentValue.trim();
      }

      const [key, ...valueParts] = line.split(":");
      currentKey = key.trim();
      const value = valueParts.join(":").trim();

      if (value === "|") {
        isMultiline = true;
        currentValue = "";
      } else if (value.startsWith("[") || value.startsWith("-")) {
        // Handle arrays - simplified for this use case
        currentValue = value;
        isMultiline = false;
      } else {
        currentValue = value.replace(/^["']|["']$/g, "");
        isMultiline = false;
      }
    } else if (isMultiline) {
      if (
        line.startsWith("-") ||
        (line.includes(":") && !line.startsWith(" "))
      ) {
        isMultiline = false;
        result[currentKey] = currentValue.trim();
        // Process this line as a new key-value pair
        const [key, ...valueParts] = line.split(":");
        currentKey = key.trim();
        currentValue = valueParts
          .join(":")
          .trim()
          .replace(/^["']|["']$/g, "");
      } else {
        currentValue += (currentValue ? "\n" : "") + line;
      }
    }
  }

  if (currentKey && currentValue) {
    result[currentKey] = currentValue.trim();
  }

  return result;
}

// Load and apply site data
async function loadSiteData() {
  try {
    const response = await fetch("/_data/site.yml");
    if (!response.ok) return;

    const yamlText = await response.text();
    const siteData = parseYAML(yamlText);

    // Update title
    if (siteData.title) {
      document.title = siteData.title;
    }

    // Update tagline
    if (siteData.tagline) {
      const taglineEl = document.querySelector(".tagline");
      if (taglineEl) taglineEl.textContent = siteData.tagline;
    }

    // Update host name
    if (siteData.host) {
      const hostEl = document.querySelector(".footer strong");
      if (hostEl) hostEl.textContent = siteData.host;
    }
  } catch (error) {
    console.log("Using default site data");
  }
}

// Load and apply about content
async function loadAboutData() {
  try {
    const response = await fetch("/_data/about.yml");
    if (!response.ok) return;

    const yamlText = await response.text();
    const aboutData = parseYAML(yamlText);

    if (aboutData.content) {
      const descriptionEl = document.querySelector(".description");
      if (descriptionEl) {
        // Convert basic markdown to HTML
        const htmlContent = aboutData.content
          .split("\n\n")
          .map((paragraph) => `<p>${paragraph.trim()}</p>`)
          .join("");
        descriptionEl.innerHTML = htmlContent;
      }
    }
  } catch (error) {
    console.log("Using default about content");
  }
}

// Load platform links
async function loadPlatformData() {
  try {
    const response = await fetch("/_data/platforms.yml");
    if (!response.ok) return;

    const yamlText = await response.text();
    // For platforms, we'll keep the current HTML structure
    // since it has custom SVG icons
  } catch (error) {
    console.log("Using default platform links");
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadSiteData();
  loadAboutData();
  loadPlatformData();
});
