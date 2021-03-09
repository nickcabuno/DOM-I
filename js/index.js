const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("nav a");
links.forEach(link => console.log(link.textContent));
const linksRealArray = Array.from(links)
const servicesLink = links[0];
console.log(servicesLink)
const productLink = links[1];
console.log(productLink)
const visionLink = links[2];
console.log(visionLink)
const featuresLink = links[3];
console.log(featuresLink)
const aboutLink = links[4];
console.log(aboutLink)
const contactLink = links[5];
console.log(contactLink)

servicesLink.textContent = "Services";
productLink.textContent = "Product";
visionLink.textContent = "Vision";
featuresLink.textContent = "Features";
aboutLink.textContent = "About";
contactLink.textContent = "Contact";

const titles = document.querySelectorAll('.text-content h4');
titles.forEach(link => console.log(link.textContent));
const titlesRealArray = Array.from(titles)

titles[0].textContent = "Features";
titles[1].textContent = "About";
titles[2].textContent = "Services";
titles[3].textContent = "Product";
titles[4].textContent = "Vision";

const pars = document.querySelectorAll('.text-content p');
pars.forEach(link => console.log(link.textContent));
const parsRealArray = Array.from(pars)

pars[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");

const headImg = document.getElementById("cta-img");
headImg.setAttribute("src", "img/header-img.png");

const midHead = document.querySelector(".cta-text h1")
midHead.textContent = "Dom Is Awesome";

const butt = document.querySelector(".cta-text button")
butt.textContent = "Get Started";

const bottomTitle = document.querySelector(".contact h4");
bottomTitle.textContent = "Contact";

const bottomInfo = document.querySelector(".contact p");
bottomInfo.textContent = "123 Way 456 Street";

const footerp = document.querySelector("footer");
footerp.textContent = "Copyright Great Idea! 2018";
;
