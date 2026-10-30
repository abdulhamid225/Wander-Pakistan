/* WANDER PAKISTAN — vanilla JavaScript, no dependencies */
"use strict";

const destinations = [
  { id: "hunza", name: "Hunza Valley", region: "Gilgit-Baltistan", category: "mountains", image: "images/hunza-valley.webp", alt: "Mountain valley beneath a wide sky", description: "A breathtaking valley of dramatic peaks, terraced orchards, welcoming villages, and centuries of living heritage.", best: "April–October (conditions vary)", duration: "4–6 days", highlights: ["Baltit Fort", "Altit Fort", "Attabad Lake", "Karimabad"], detail: "Explore historic forts, sip local tea with mountain views, walk through Karimabad, and make time for the changing light on the surrounding peaks." },
  { id: "skardu", name: "Skardu", region: "Gilgit-Baltistan", category: "mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82", alt: "Towering mountain range", description: "A gateway to immense mountain scenery, cold deserts, quiet lakes, and high-altitude adventure.", best: "May–October (route dependent)", duration: "5–7 days", highlights: ["Shangrila Lake", "Shigar Fort", "Katpana Cold Desert", "Upper Kachura"], detail: "Combine lakes and desert landscapes with local food, heritage architecture, and flexible time to enjoy the mountain environment." },
  { id: "fairy", name: "Fairy Meadows", region: "Gilgit-Baltistan", category: "mountains", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=82", alt: "Green alpine landscape and mountain reflections", description: "A celebrated alpine meadow with extraordinary views toward the Nanga Parbat massif.", best: "Late spring–early autumn, weather permitting", duration: "3–4 days", highlights: ["Meadow walks", "Nanga Parbat views", "Stargazing", "Local guesthouses"], detail: "This is a more adventurous trip involving a rugged jeep track and hiking. Check access, weather, and local guidance before travelling." },
  { id: "attabad", name: "Attabad Lake", region: "Gilgit-Baltistan", category: "lakes", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=82", alt: "Clear lake surrounded by mountain slopes", description: "Striking blue water framed by steep mountains, with scenic stops along the Karakoram Highway.", best: "May–October, subject to conditions", duration: "1–2 days", highlights: ["Lake viewpoints", "Boat trips where available", "Karakoram Highway", "Passu"], detail: "Enjoy the lake from designated viewpoints, ask local operators about safe activities, and leave time for the villages and landscapes nearby." },
  { id: "deosai", name: "Deosai National Park", region: "Gilgit-Baltistan", category: "wildlife", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82", alt: "Open highland landscape under a broad sky", description: "A vast high-altitude plateau known for open horizons, seasonal wildflowers, and fragile wildlife habitat.", best: "Summer access is weather dependent", duration: "1–2 days", highlights: ["Sheosar Lake", "Highland scenery", "Wildlife watching", "Photography"], detail: "Travel with a responsible local guide, keep your distance from wildlife, and verify park access and road conditions before setting out." },
  { id: "naltar", name: "Naltar Valley", region: "Gilgit-Baltistan", category: "lakes", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=82", alt: "Forest and mountain scenery", description: "A forested mountain valley with colorful lakes and peaceful scenery away from busier routes.", best: "Late spring–autumn, access dependent", duration: "2–3 days", highlights: ["Naltar Lakes", "Pine forests", "Mountain photography", "Local jeep routes"], detail: "Plan for a bumpy mountain-road journey and confirm transport, weather, and access with local sources before departure." },
  { id: "naran", name: "Naran & Kaghan", region: "Khyber Pakhtunkhwa", category: "lakes", image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=82", alt: "Mountain lake beneath a cloudy sky", description: "A classic northern escape of pine forests, river views, mountain roads, and famous alpine lakes.", best: "Late spring–early autumn, road dependent", duration: "3–5 days", highlights: ["Saif-ul-Malook", "Kaghan Valley", "Kunhar River", "Lulusar Lake"], detail: "Popular in summer, this region rewards early starts and flexible plans. Check traffic, road access, and lake excursions locally." },
  { id: "swat", name: "Swat Valley", region: "Khyber Pakhtunkhwa", category: "lakes", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=82", alt: "Lush green forest landscape", description: "Green valleys, riverside towns, forested hills, and a rich cultural history in northern Khyber Pakhtunkhwa.", best: "Spring–autumn, depending on activities", duration: "3–5 days", highlights: ["Malam Jabba", "Mingora", "Swat Museum", "Kalam region"], detail: "Pair scenic drives with cultural stops and river walks. Confirm local conditions and access before travelling to upper valley areas." },
  { id: "murree", name: "Murree & Galiyat", region: "Punjab / Khyber Pakhtunkhwa", category: "mountains", image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=82", alt: "Pine trees and forested hills", description: "Cool hill air, pine-covered slopes, and short nature escapes within reach of northern Punjab.", best: "Year-round; winter weather can affect access", duration: "2–3 days", highlights: ["Patriata", "Ayubia trails", "Nathia Gali", "Forest walks"], detail: "Visit on weekdays if possible, respect forest paths, and check weather and traffic conditions during holidays and winter." },
  { id: "neelum", name: "Neelum Valley", region: "Azad Jammu & Kashmir", category: "lakes", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=82", alt: "Dense green valley forest", description: "A lush river valley of forests, mountain villages, and winding roads in Azad Jammu & Kashmir.", best: "Spring–autumn, conditions permitting", duration: "4–6 days", highlights: ["Keran", "Sharda", "Arang Kel", "Riverside viewpoints"], detail: "Road travel can take longer than expected. Check current access requirements and local advice, and keep your itinerary flexible." },
  { id: "mohenjo", name: "Mohenjo-daro", region: "Sindh", category: "culture", image: "images/mohenjo-daro.png.webp", alt: "Historic brick and stone architecture", description: "Discover the remains of a remarkable Indus Valley Civilization city and its enduring archaeological legacy.", best: "Cooler months are generally more comfortable", duration: "1–2 days", highlights: ["Archaeological site", "Museum", "Indus Valley history", "Larkana region"], detail: "Plan around heat and site opening guidance. Follow preservation rules and avoid touching or climbing on ancient structures." },
  { id: "hingol", name: "Hingol & Kund Malir", region: "Balochistan", category: "coast", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=82", alt: "Waves breaking along a rugged coastline", description: "A striking mix of coastal scenery, sculpted landscapes, and wide-open spaces along the Makran coast.", best: "Cooler months; verify local access", duration: "2–4 days", highlights: ["Kund Malir", "Hingol landscapes", "Makran Coastal Highway", "Coastal photography"], detail: "Remote coastal travel needs careful preparation. Confirm security advice, fuel, communications, and access with trusted local sources before departure." }
];

const packages = [
  { id: "pkg-hunza", name: "Hunza: Valleys & Forts", destination: "Hunza Valley", region: "north", regionLabel: "Gilgit-Baltistan", duration: 6, price: 48500, image: destinations[0].image, description: "A relaxed route through mountain villages, historic forts, and iconic Karakoram viewpoints.", highlights: ["Karimabad", "Altit Fort", "Attabad Lake"], plan: ["Day 1: Arrive and settle in", "Days 2–3: Karimabad, forts, and local culture", "Day 4: Attabad Lake and nearby viewpoints", "Days 5–6: Flexible scenic stops and return"], note: "Illustrative per-person estimate. Transport, lodging, meals, and inclusions must be confirmed." },
  { id: "pkg-skardu", name: "Skardu: Lakes & Landscapes", destination: "Skardu", region: "north", regionLabel: "Gilgit-Baltistan", duration: 7, price: 62000, image: destinations[1].image, description: "Explore highland scenery, heritage sites, cold desert landscapes, and peaceful lakes.", highlights: ["Shigar Fort", "Upper Kachura", "Katpana"], plan: ["Day 1: Arrive and acclimatize", "Days 2–3: Skardu and nearby lakes", "Day 4: Shigar heritage", "Day 5: Cold desert landscape", "Days 6–7: Flexible excursions and return"], note: "Illustrative per-person estimate; access and transport costs vary by season." },
  { id: "pkg-fairy", name: "Fairy Meadows Escape", destination: "Fairy Meadows", region: "north", regionLabel: "Gilgit-Baltistan", duration: 4, price: 39000, image: destinations[2].image, description: "A short, adventurous mountain escape with meadow walks and views toward Nanga Parbat.", highlights: ["Jeep track", "Meadow hike", "Mountain views"], plan: ["Day 1: Travel to the trailhead area", "Day 2: Local transport and hike to meadow", "Day 3: Guided walks and scenic time", "Day 4: Return journey"], note: "Illustrative estimate. Trekking, jeep transport, weather, and physical demands need advance planning." },
  { id: "pkg-naran", name: "Naran & Kaghan Highlights", destination: "Naran and Kaghan", region: "kpk", regionLabel: "Khyber Pakhtunkhwa", duration: 5, price: 28500, image: destinations[6].image, description: "River valleys, mountain viewpoints, and alpine lake excursions when access allows.", highlights: ["Kunhar River", "Kaghan Valley", "Lake excursion"], plan: ["Day 1: Travel and settle in", "Days 2–3: Valley exploration", "Day 4: Lake or scenic excursion, subject to access", "Day 5: Return"], note: "Illustrative estimate. Lake access and roads can be seasonal and must be verified." },
  { id: "pkg-swat", name: "Swat: Green Valley Break", destination: "Swat Valley", region: "kpk", regionLabel: "Khyber Pakhtunkhwa", duration: 4, price: 26500, image: destinations[7].image, description: "A restorative break with forest scenery, cultural stops, and mountain-town exploration.", highlights: ["Mingora", "Malam Jabba", "Swat Museum"], plan: ["Day 1: Arrive and explore locally", "Day 2: Scenic mountain excursion", "Day 3: Culture and nature", "Day 4: Return"], note: "Illustrative estimate. Verify regional conditions and inclusions before travel." },
  { id: "pkg-neelum", name: "Neelum Valley Slow Travel", destination: "Neelum Valley", region: "azad", regionLabel: "Azad Jammu & Kashmir", duration: 6, price: 42000, image: destinations[9].image, description: "A scenic road journey through forested slopes, river villages, and mountain viewpoints.", highlights: ["Keran", "Sharda", "Village walks"], plan: ["Day 1: Journey to the valley", "Days 2–4: Explore villages and scenery", "Day 5: Flexible local excursions", "Day 6: Return"], note: "Illustrative estimate. Travel times, access, and any local requirements should be checked." },
  { id: "pkg-murree", name: "Murree & Galiyat Weekend", destination: "Murree and Galiyat", region: "punjab", regionLabel: "Punjab / Khyber Pakhtunkhwa", duration: 3, price: 18500, image: destinations[8].image, description: "A simple hill-country getaway with forest walks, cool air, and scenic viewpoints.", highlights: ["Nathia Gali", "Ayubia trails", "Patriata"], plan: ["Day 1: Arrive and explore Murree", "Day 2: Galiyat forest walks", "Day 3: Slow morning and return"], note: "Illustrative estimate. Holiday traffic and accommodation can change overall costs." },
  { id: "pkg-balochistan", name: "Balochistan Coast & Landscapes", destination: "Hingol and Kund Malir", region: "balochistan", regionLabel: "Balochistan", duration: 3, price: 33500, image: destinations[11].image, description: "A carefully planned coastal road trip through dramatic scenery and the Makran coastline.", highlights: ["Kund Malir", "Hingol landscapes", "Coastal road"], plan: ["Day 1: Depart with a trusted local operator", "Day 2: Coastal and landscape stops", "Day 3: Return with planned fuel and rest stops"], note: "Illustrative estimate. Confirm security advice, route access, fuel, and operator arrangements before departure." }
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90", alt: "A dramatic mountain range", caption: "THE HIGH NORTH — BIG SKIES AND HIGH PEAKS" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=90", alt: "A tranquil alpine lake and forest", caption: "STILL WATERS — FIND A MOMENT OF QUIET" },
  { src: "images/mohenjo-daro.png.webp", alt: "Historic stone architecture", caption: "OLD SOULS — STORIES HELD IN STONE" },
  { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=90", alt: "Waves breaking along a shore", caption: "THE COASTLINE — WHERE LAND MEETS SEA" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90", alt: "Green valley and mountain reflections", caption: "GREEN HORIZONS — ROOM TO BREATHE" }
];

const destinationGrid = document.querySelector("#destination-grid");
const destinationFilter = document.querySelector("#destination-filter");
const destinationEmpty = document.querySelector("#destination-empty");
const packageGrid = document.querySelector("#package-grid");
const packageEmpty = document.querySelector("#package-empty");
let activeCategory = "all";
let activeGalleryIndex = 0;
const savedDestinations = new Set();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function formatPKR(amount) {
  return "PKR " + new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(amount);
}
function renderDestinations() {
  const query = destinationFilter.value.trim().toLowerCase();
  const visible = destinations.filter(place => {
    const matchesQuery = [place.name, place.region, place.description, place.category].join(" ").toLowerCase().includes(query);
    const matchesCategory = activeCategory === "all" || place.category === activeCategory || (activeCategory === "road" && ["mountains", "lakes", "coast"].includes(place.category)) || (activeCategory === "wildlife" && ["wildlife", "coast", "mountains"].includes(place.category));
    return matchesQuery && matchesCategory;
  });
  destinationGrid.innerHTML = visible.map((place, index) => `
    <article class="destination-card" data-destination="${place.id}">
      <div class="card-image-wrap"><img src="${place.image}" alt="${escapeHTML(place.alt)}" loading="lazy"><span class="card-number">${String(destinations.indexOf(place) + 1).padStart(2, "0")} / 12</span>
      <button class="card-save ${savedDestinations.has(place.id) ? "saved" : ""}" type="button" data-save="${place.id}" aria-label="${savedDestinations.has(place.id) ? "Remove" : "Save"} ${escapeHTML(place.name)}" aria-pressed="${savedDestinations.has(place.id)}">${savedDestinations.has(place.id) ? "♥" : "♡"}</button></div>
      <div class="card-location">${escapeHTML(place.region)}</div><h3>${escapeHTML(place.name)}</h3><p>${escapeHTML(place.description)}</p>
      <button class="card-link" type="button" data-open-destination="${place.id}">Explore destination <span>→</span></button>
    </article>`).join("");
  destinationGrid.querySelectorAll(".destination-card").forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    if (typeof revealObserver !== "undefined") revealObserver.observe(element);
    else element.classList.add("is-revealed");
  });
  destinationEmpty.hidden = visible.length > 0;
}
function renderPackages() {
  const region = document.querySelector("#package-region").value;
  const duration = document.querySelector("#package-duration").value;
  const budget = document.querySelector("#package-budget").value;
  const sort = document.querySelector("#package-sort").value;
  let visible = packages.filter(item => {
    const matchesRegion = region === "all" || item.region === region;
    const matchesDuration = duration === "all" || (duration === "short" && item.duration <= 4) || (duration === "medium" && item.duration >= 5 && item.duration <= 7) || (duration === "long" && item.duration >= 8);
    const matchesBudget = budget === "all" || (budget === "low" && item.price < 30000) || (budget === "mid" && item.price >= 30000 && item.price <= 60000) || (budget === "high" && item.price > 60000);
    return matchesRegion && matchesDuration && matchesBudget;
  });
  if (sort === "low-high") visible.sort((a, b) => a.price - b.price);
  if (sort === "high-low") visible.sort((a, b) => b.price - a.price);
  packageGrid.innerHTML = visible.map(item => `
    <article class="package-card"><div class="package-image"><img src="${item.image}" alt="${escapeHTML(item.destination)} landscape" loading="lazy"><span class="package-duration">${item.duration} DAYS</span></div>
      <div class="package-body"><span class="package-region-label">${escapeHTML(item.regionLabel)}</span><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description)}</p>
      <div class="package-highlights">${item.highlights.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="package-footer"><div class="package-price"><small>Illustrative from / person</small><b>${formatPKR(item.price)}</b></div><button class="package-view" type="button" data-open-package="${item.id}">View package ↗</button></div></div></article>`).join("");
  packageGrid.querySelectorAll(".package-card").forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    if (typeof revealObserver !== "undefined") revealObserver.observe(element);
    else element.classList.add("is-revealed");
  });
  packageEmpty.hidden = visible.length > 0;
}
function openDestination(id) {
  const place = destinations.find(item => item.id === id);
  if (!place) return;
  document.querySelector("#dialog-content").innerHTML = `
    <img class="dialog-hero" src="${place.image.replace("w=900", "w=1400")}" alt="${escapeHTML(place.alt)}">
    <div class="dialog-body"><p class="eyebrow"><span></span> ${escapeHTML(place.region)}</p><h2 id="dialog-title">${escapeHTML(place.name)}</h2>
    <div class="dialog-meta"><span>Suggested stay: ${escapeHTML(place.duration)}</span><span>Best time: ${escapeHTML(place.best)}</span></div>
    <p>${escapeHTML(place.description)}</p><p>${escapeHTML(place.detail)}</p><h3>Worth exploring</h3><ul>${place.highlights.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
    <p><strong>Planning note:</strong> Conditions, opening times, access, and transport can change. Confirm current local guidance before travelling.</p>
    <a class="button button-dark" href="#trip-planner" data-dialog-plan>Plan around this place <span>↗</span></a></div>`;
  showDialog("#detail-dialog");
}
function openPackage(id) {
  const item = packages.find(pkg => pkg.id === id);
  if (!item) return;
  document.querySelector("#dialog-content").innerHTML = `
    <img class="dialog-hero" src="${item.image.replace("w=900", "w=1400")}" alt="${escapeHTML(item.destination)} landscape">
    <div class="dialog-body"><p class="eyebrow"><span></span> SAMPLE TRAVEL PACKAGE · ${escapeHTML(item.regionLabel)}</p><h2 id="dialog-title">${escapeHTML(item.name)}</h2>
    <div class="dialog-meta"><span>${item.duration} days</span><span>${formatPKR(item.price)} / person (illustrative)</span></div><p>${escapeHTML(item.description)}</p><h3>Suggested outline</h3><ul>${item.plan.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul><h3>Highlights</h3><p>${item.highlights.map(escapeHTML).join(" · ")}</p><p><strong>Estimate disclaimer:</strong> ${escapeHTML(item.note)} No booking, reservation, or payment is made on this website.</p><a class="button button-dark" href="#trip-planner" data-dialog-plan>Use this as inspiration <span>↗</span></a></div>`;
  showDialog("#detail-dialog");
}
function showDialog(selector) {
  const dialog = document.querySelector(selector);
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  document.body.classList.add("dialog-open");
}
function closeDialog(dialog) {
  if (dialog.open && typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
  if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
}
function openGallery(index) {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  document.querySelector("#lightbox-image").src = item.src;
  document.querySelector("#lightbox-image").alt = item.alt;
  document.querySelector("#lightbox-caption").textContent = item.caption;
  document.querySelector("#lightbox-counter").textContent = `${activeGalleryIndex + 1} / ${galleryItems.length}`;
  showDialog("#lightbox-dialog");
}
function moveGallery(direction) { openGallery(activeGalleryIndex + direction); }

destinationFilter.addEventListener("input", renderDestinations);
document.querySelector("#destination-categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll("#destination-categories .pill").forEach(pill => {
    const selected = pill === button;
    pill.classList.toggle("active", selected);
    pill.setAttribute("aria-pressed", String(selected));
  });
  renderDestinations();
});
document.querySelectorAll("#package-region, #package-duration, #package-budget, #package-sort").forEach(select => select.addEventListener("change", renderPackages));
document.addEventListener("click", event => {
  const save = event.target.closest("[data-save]");
  if (save) {
    const id = save.dataset.save;
    if (savedDestinations.has(id)) savedDestinations.delete(id); else savedDestinations.add(id);
    renderDestinations();
    return;
  }
  const destinationButton = event.target.closest("[data-open-destination]");
  if (destinationButton) { openDestination(destinationButton.dataset.openDestination); return; }
  const packageButton = event.target.closest("[data-open-package]");
  if (packageButton) { openPackage(packageButton.dataset.openPackage); return; }
  if (event.target.closest("[data-dialog-plan]")) {
    event.preventDefault();
    closeDialog(document.querySelector("#detail-dialog"));
    document.querySelector("#trip-planner").scrollIntoView({ behavior: "smooth" });
    document.querySelector("#search-destination").focus({ preventScroll: true });
  }
  const legalButton = event.target.closest("[data-legal]");
  if (legalButton) {
    event.preventDefault();
    const kind = legalButton.dataset.legal;
    document.querySelector("#legal-content").innerHTML = kind === "privacy"
      ? `<h2>Privacy Policy</h2><p>This demo website does not send form entries to a server or store newsletter subscriptions. Search and filter actions run in your browser. A deployed version may load third-party images and fonts; their providers may receive standard request data.</p><p>Before collecting real visitor information, add a privacy policy that accurately describes your hosting, analytics, forms, retention, and contact process.</p>`
      : `<h2>Terms of Use</h2><p>Wander Pakistan is a travel discovery demo, not a booking platform. Destination information, suggested itineraries, and sample prices are for general inspiration only and are not live offers.</p><p>Verify access, safety, permits, road conditions, weather, costs, and local guidance independently before travel. No reservations or payments are processed through this website.</p>`;
    showDialog("#legal-dialog");
  }
});
document.querySelector("#travel-search").addEventListener("submit", event => {
  event.preventDefault();
  const query = document.querySelector("#search-destination").value.trim();
  const date = document.querySelector("#travel-date").value;
  const travelers = document.querySelector("#travelers").value;
  const feedback = document.querySelector("#search-feedback");
  if (date && date < new Date().toISOString().slice(0, 10)) {
    feedback.textContent = "Please choose today or a future date.";
    document.querySelector("#travel-date").focus();
    return;
  }
  destinationFilter.value = query;
  activeCategory = "all";
  document.querySelectorAll("#destination-categories .pill").forEach(pill => {
    const selected = pill.dataset.category === "all";
    pill.classList.toggle("active", selected);
    pill.setAttribute("aria-pressed", String(selected));
  });
  renderDestinations();
  const resultCount = destinationGrid.querySelectorAll(".destination-card").length;
  feedback.textContent = resultCount
    ? `Found ${resultCount} destination${resultCount === 1 ? "" : "s"} to explore${date ? ` for your trip starting ${new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}` : ""} · ${travelers} traveler${travelers === "1" ? "" : "s"}.`
    : "No exact matches yet. Try a broader place name or clear the destination field.";
  document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#newsletter-email");
  const feedback = document.querySelector("#newsletter-feedback");
  const email = input.value.trim();
  feedback.classList.remove("error", "success");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    feedback.textContent = "Please enter a valid email address to continue.";
    feedback.classList.add("error");
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  feedback.textContent = "Thanks! This demo validated your email, but it does not store or send subscriptions.";
  feedback.classList.add("success");
  input.value = "";
});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !expanded);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));
document.querySelectorAll("[data-gallery]").forEach(button => button.addEventListener("click", () => openGallery(Number(button.dataset.gallery))));
document.querySelector(".lightbox-prev").addEventListener("click", () => moveGallery(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveGallery(1));
document.querySelectorAll("dialog .dialog-close").forEach(button => button.addEventListener("click", () => closeDialog(button.closest("dialog"))));
document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("close", () => {
    if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
  });
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeDialog(dialog);
  });
});
document.addEventListener("keydown", event => {
  if (!document.querySelector("#lightbox-dialog").open) return;
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});
document.querySelectorAll(".category-card").forEach(button => button.addEventListener("click", () => {
  const category = button.dataset.category;
  activeCategory = category === "road" || category === "wildlife" ? category : category;
  destinationFilter.value = "";
  document.querySelectorAll("#destination-categories .pill").forEach(pill => {
    const selected = pill.dataset.category === activeCategory;
    pill.classList.toggle("active", selected);
    pill.setAttribute("aria-pressed", String(selected));
  });
  renderDestinations();
  document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
}));
document.querySelector("#tips-footer-link").addEventListener("click", () => {
  document.querySelector(".tips-section").id = "travel-tips";
});

/* Hero carousel: manual controls plus gentle auto-advance */
const heroSlides = [
  {
    image: 'url("images/hunza-valley.webp")',
    label: "Dramatic mountain peaks and a turquoise lake in northern Pakistan",
    position: "center 48%"
  },
  {
    image: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=88")',
    label: "A peaceful mountain lake surrounded by dramatic green slopes",
    position: "center 52%"
  },
  {
    image: 'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=88")',
    label: "Ocean waves meeting the rugged coastline",
    position: "center 55%"
  }
];
const heroImage = document.querySelector(".hero-image");
const heroDots = [...document.querySelectorAll("[data-hero-slide]")];
const heroCurrent = document.querySelector("#hero-slide-current");
const heroPrev = document.querySelector(".hero-prev");
const heroNext = document.querySelector(".hero-next");
let heroIndex = 0;
let heroTimer;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[heroIndex];
  heroImage.classList.add("is-changing");
  window.setTimeout(() => {
    heroImage.style.backgroundImage = slide.image;
    heroImage.style.backgroundPosition = slide.position;
    heroImage.setAttribute("aria-label", slide.label);
    heroImage.classList.remove("is-changing");
  }, 180);
  heroDots.forEach((dot, dotIndex) => {
    const selected = dotIndex === heroIndex;
    dot.classList.toggle("active", selected);
    dot.setAttribute("aria-pressed", String(selected));
  });
  heroCurrent.textContent = String(heroIndex + 1).padStart(2, "0");
}
function startHeroAutoplay() {
  if (reduceMotion) return;
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 6500);
}
heroPrev.addEventListener("click", () => { showHeroSlide(heroIndex - 1); startHeroAutoplay(); });
heroNext.addEventListener("click", () => { showHeroSlide(heroIndex + 1); startHeroAutoplay(); });
heroDots.forEach(dot => dot.addEventListener("click", () => {
  showHeroSlide(Number(dot.dataset.heroSlide));
  startHeroAutoplay();
}));
document.querySelector(".hero").addEventListener("mouseenter", () => window.clearInterval(heroTimer));
document.querySelector(".hero").addEventListener("mouseleave", startHeroAutoplay);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) window.clearInterval(heroTimer);
  else startHeroAutoplay();
});
startHeroAutoplay();

/* Staggered scroll reveals with a no-JavaScript-friendly fallback */
const revealTargets = document.querySelectorAll(
  ".section-heading, .destination-card, .category-card, .featured-photo, .featured-copy, .package-card, .experience-tile, .gallery-item, .why-item, .tips-list details, .testimonial, .newsletter-inner"
);
revealTargets.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
});
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add("is-revealed"));
}

/* The circular WANDER sticker appears after the visitor moves down the page */
const brandSticker = document.querySelector(".brand-sticker");
function updateStickerVisibility() {
  brandSticker.classList.toggle("is-visible", window.scrollY > 420);
}
window.addEventListener("scroll", updateStickerVisibility, { passive: true });
updateStickerVisibility();


document.querySelector("#year").textContent = new Date().getFullYear();
renderDestinations();
renderPackages();
