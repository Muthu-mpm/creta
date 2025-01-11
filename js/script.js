// const password = "creta2024#";
// let input = prompt("please enter the password");
// while (input !== password) {
//   input = prompt("please enter the password");
// }
// data layer
function getDevicePlatform() {
  const platform = navigator.platform || "Unknown";
  return platform.toUpperCase();
}
function getUtmParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function getGAClientId() {
  try {
    // If Google Analytics is available and the `ga` function is initialized
    if (window.ga && window.ga.getAll) {
      const trackers = window.ga.getAll();
      if (trackers.length > 0) {
        return trackers[0].get("clientId");
      }
    }

    // Fallback to reading `_ga` cookie if available
    const gaCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("_ga="));
    if (gaCookie) {
      const parts = gaCookie.split(".");
      return parts.slice(-2).join("."); // Extract the client ID (usually in the format "123456.7890123456")
    }
  } catch (error) {
    console.error("Error fetching GA Client ID:", error);
  }
  return "unknown";
}

// const dataLayer = [];
document.addEventListener("DOMContentLoaded", function () {
  const gaClientId = getGAClientId(); // Get GA Client ID dynamically

  // Push data layer event
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "Landed_on_Page",
    pageName: "Creta Electric",
    pageType: "Product Page",
    ga_client_id: gaClientId,
  });

  console.log("Data Layer event pushed on page load:", window.dataLayer);
});

function dataLayerFunc(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "CretaEV_Submit_Interest",
    buttonTitle: buttonText,
    carModel: "creta ev",
    ga_client_id: gaClientId,
  });
  console.log("Data Layer event pushed:", window.dataLayer);

  // Navigate to the intended link
  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");
}

function brochureDownload(e) {
  e.preventDefault();
  window.VWO = window.VWO || [];
  VWO.event =
    VWO.event ||
    function () {
      VWO.push(["event"].concat([].slice.call(arguments)));
    };

  VWO.event("download_e-brochure", {
    model_name: "creta_electric",
    url_location: window.location.href,
  });
  console.log("download_e-brochure event pushed:", window.VWO);
  // Navigate to the intended link
  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");
}

$(document).ready(function () {
  // onTop = getElementOnTop();
  setTimeout(() => {
    $("#hero-heading").addClass("onScreen");
  }, 1000);
  setTimeout(() => {
    $("#hero-subheading").addClass("onScreen");
  }, 1500);
  setTimeout(() => {
    $(".header-wrapper").addClass("onScreen");
  }, 2000);
  setTimeout(() => {
    $("div#root").addClass("onScreen");
  }, 2200);
});
