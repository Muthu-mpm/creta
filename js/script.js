// const password = "xyxFoh-midpym-4zehce";
// let input = prompt("please enter the password");
// while (input !== password) {
//   input = prompt("please enter the password");
// }
// let deductor = window.innerWidth < 768 ? 144.5 : 134;

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
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer;
  // Push data layer event
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "Landed_on_Page",
    pageName: window.location.href,
    pageType: "Microsite",
    ga_client_id: gaClientId,
    referringURL: referringURL,
  });

  console.log("Landed_on_Page event pushed on page load:", window.dataLayer);
});

function dataLayerFunc(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "CretaEV_Submit_Interest",

    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
  });
  console.log("Data Layer event pushed:", window.dataLayer);

  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");
}
function getSectionName() {
  // Example logic: Use URL path segments
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  return pathSegments.length > 0
    ? pathSegments[pathSegments.length - 1]
    : "Homepage";
}
function HomeBanner_Click_Req_a_test_drive(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "HomeBanner_Click_Req_a_test_drive",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log(
    "HomeBanner_Click_Req_a_test_drive event pushed:",
    window.dataLayer
  );

  const href = e.currentTarget.getAttribute("href");
  window.location.href = href;
}
function Sticky_Nav_Prices_click(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Sticky_Nav_Prices_click",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log("Sticky_Nav_Prices_click event pushed:", window.dataLayer);

  const href = e.currentTarget.getAttribute("href");
  window.location.href = href;
}
function Sticky_Nav_3DConfig_click(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Sticky_Nav_3DConfig_click",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log("Sticky_Nav_3DConfig_click event pushed:", window.dataLayer);

  const href = e.currentTarget.getAttribute("href");
  window.location.href = href;
}
function iOS_app_download_link(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "iOS_app_download_link",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log("iOS_app_download_link event pushed:", window.dataLayer);

  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");
}
function Android_app_download_link(e) {
  e.preventDefault(); // Prevent default link behavior for now
  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Android_app_download_link",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log("Android_app_download_link event pushed:", window.dataLayer);

  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");
}
// Load the YouTube IFrame API
function loadYouTubeAPI() {
  return new Promise((resolve) => {
    const existingScript = document.querySelector(
      "script[src='https://www.youtube.com/iframe_api']"
    );
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      console.log("YouTube API already loaded");
    }

    window.onYouTubeIframeAPIReady = resolve; // Resolve promise when API is ready
  });
}

// Initialize YouTube Players for All IFrames with a Specific Class
async function initYouTubePlayers() {
  await loadYouTubeAPI(); // Ensure API is loaded

  // Select all iframes with the specified class
  const iframes = document.querySelectorAll(".youtube-iframe");
  iframes.forEach((iframe) => {
    const player = new YT.Player(iframe, {
      events: {
        onStateChange: (event) => onPlayerStateChange(event, iframe),
      },
    });

    console.log("YouTube player initialized for:", iframe);
  });
}

// Handle YouTube Player State Changes
function onPlayerStateChange(event, iframe) {
  if (event.data === YT.PlayerState.PLAYING) {
    const buttonText = "Video Play Click"; // Replace with dynamic text if needed
    const gaClientId = getGAClientId();
    const sectionName = getSectionName(); // Define logic to extract section name
    const referringURL = document.referrer || "Direct";

    // Push to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "Video_Play_Click",
      pageName: window.location.href,
      pageType: "Microsite",
      buttonTitle: buttonText,
      carModel: "creta electric",
      ga_client_id: gaClientId,
      sectionName: sectionName,
      referringURL: referringURL,
    });

    console.log("Video_Play_Click event pushed:", window.dataLayer);
  }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initYouTubePlayers();
});

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

  const href = e.currentTarget.getAttribute("href");
  window.open(href, "_blank");

  const buttonText = e.target.innerText; // Capture the button text
  const gaClientId = getGAClientId();
  const sectionName = getSectionName(); // Define logic to extract section name
  const referringURL = document.referrer || "Direct";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "CretaEV_brochuredownload",
    pageName: window.location.href,
    pageType: "Microsite",
    buttonTitle: buttonText,
    carModel: "creta electric",
    ga_client_id: gaClientId,
    sectionName: sectionName,
    referringURL: referringURL,
  });
  console.log("CretaEV_brochuredownload event pushed:", window.dataLayer);
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

  function setSectionContainerTop(i) {
    // let deductor = window.innerWidth < 768 ? 750 : 10;

    $(".parallax-breakpoint").each(function (e, t) {
      const n = $(t),
        s =
          i -
          n.outerHeight() -
          document.querySelector(".bottom-tag-wrapper").clientHeight +
          document.querySelector(".header-wrapper").clientHeight;
      e > 0 && n.css({ top: s, "z-index": e + 10 });
    });
  }

  window.addEventListener("scroll", function () {
    // console.log("scroed");

    const n = $(window).innerHeight();
    setSectionContainerTop(n);
  });

  // const handleResize = () => {
  //   deductor = window.innerWidth < 768 ? 250 : 100;
  // };

  // handleResize();
  // window.addEventListener("resize", handleResize);
});
