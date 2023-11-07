/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderSlot, e as renderHead, f as renderComponent, m as maybeRenderHead, A as AstroError, g as ImageMissingAlt, s as spreadAttributes, u as unescapeHTML } from '../astro_adb5f796.mjs';
import 'clsx';
import { g as getImage$1 } from '../astro-assets-services_8a8a8481.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'html-escaper';

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/clinton/Developer/Astro/projexts/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!--- Boxicons --><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><!--- Devicon --><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"><!--- EmailJS --><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script><script type="text/javascript">\n        emailjs.init("WomS_LkyxmJG0ZgR4");\n        <\/script>', "", "</head><body>", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/clinton/Developer/Astro/projexts/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  const navitems = ["Mission", "Technologies", "Projects", "Contact"];
  return renderTemplate`${maybeRenderHead()}<nav class="flex md:justify-between p-2 w-full opacity-80 z-[100] fixed bg-transparent shadow-black"><a href="/#Home"><h1 class="xl:text-9xl font-bold lg:text-7xl md:text-5xl xs:text-4xl font-Bebas text-white">
NMEREOLE
</h1></a><ul class="invisible xl:visible lg:visible md:visible xl:text-xl lg:text-xl md:text-lg xs:text-md mr-6">${navitems.map((item) => renderTemplate`<li class="text-white text-2xl py-2 hover:cursor-pointer hover:underline hover:scale-110 hover:ease-out hover:duration-300"><a${addAttribute("/#" + item, "href")}>${item}</a></li>`)}</ul></nav>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/Nav.astro", void 0);

const socials = [
  {
    logo: "bx bxl-github",
    link: "https://github.com/Clinton-Nmereole",
  },
  {
    logo: "bx bxl-linkedin-square",
    link: "https://www.linkedin.com/in/chinedum-nmereole/",
  },
  {
    logo: "bx bx-globe",
    link: "https://main--chinedumnmereole.netlify.app/",
  },
];

const technologies = [
  {
    text: "HTML",
    logo: "bx bxl-html5",
  },
  {
    text: "CSS",
    logo: "bx bxl-css3",
  },
  {
    text: "JavaScript",
    logo: "bx bxl-javascript",
  },
  {
    text: "TypeScript",
    logo: "bx bxl-typescript",
  },
  {
    text: "Java",
    logo: "bx bxl-java",
  },
  {
    text: "Python",
    logo: "bx bxl-python",
  },
  {
    text: "Golang",
    logo: "bx bxl-go-lang",
  },
  {
    text: "SQL",
    logo: "bx bxl-postgresql",
  },
  {
    text: "C++",
    logo: "bx bxl-c-plus-plus",
  },
  {
    text: "Docker",
    logo: "bx bxl-docker",
  },
  {
    text: "Git",
    logo: "bx bxl-git",
  },
];

const projects = [
  {
    img: "/images/website1.jpg",
    title: "GoBank",
    explanation: "A JSON API for a personal bank system.",
    link: "https://github.com/Clinton-Nmereole/GoBankAPI",
  },
  {
    img: "/images/tickbeth.jpg",
    title: "TickBeth",
    explanation: "Ticketing System for organizations.",
    link: "https://github.com/Clinton-Nmereole/TickBeth",
  },
  {
    img: "/images/website3.jpg",
    title: "Website 3",
    explanation: "Explanation",
    link: "",
  },
  {
    img: "/images/website4.jpg",
    title: "Website 4",
    explanation: "Explanation",
    link: "",
  },
];

const $$Astro$7 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/home/clinton/Developer/Astro/projexts/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"@astrojs/vercel/build-image-service","config":{"sizes":[640,750,828,1080,1200,1920,2048,3840],"domains":[],"remotePatterns":[]}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$6 = createAstro();
const $$ProjectCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProjectCarousel;
  let i = 0;
  return renderTemplate`${maybeRenderHead()}<div class="w-screen h-screen z-[1] justify-center items-center" data-astro-cid-n2fcsbob><div class="flex flex-col min-w-full h-full justify-start items-start" project-title data-astro-cid-n2fcsbob>${projects.map((project) => renderTemplate`<div class="carousel w-full overflow-hidden"${addAttribute(`${i + 1}`, "id")} data-astro-cid-n2fcsbob><div class="flex py-5 justify-between w-full hover:opacity-90 hover:translate-x-4 duration-300 rounded-3xl" data-astro-cid-n2fcsbob><h2 class="lg:text-9xl text-3xl py-5 sm:ml-32 ml-2 border-t-white border-solid border-t-4 font-Rotten" data-astro-cid-n2fcsbob>${project.title}</h2><a${addAttribute(project.link, "href")} target="_blank" data-astro-cid-n2fcsbob>${renderComponent($$result, "Image", $$Image, { "src": project.img, "width": 400, "height": 400, "alt": project.title, "id": `${i}`, "class": "hidden border-2 border-white rounded-full", "data-astro-cid-n2fcsbob": true })}</a><h2 class="md:text-2xl text-xs py-5 mr-12 border-t-white border-solid border-t-4 font-Rotten " data-astro-cid-n2fcsbob>${project.explanation}</h2></div><span class="hidden" data-astro-cid-n2fcsbob>${i = i + 1}</span></div>`)}</div></div>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/ProjectCarousel.astro", void 0);

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col min-w-full h-full mt-20 justify-start items-start">${renderComponent($$result, "ProjectCarousel", $$ProjectCarousel, {})}</div>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/Projects.astro", void 0);

const icons = {};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new Error(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new Error('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new Error(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new Error(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new Error(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}>${title && renderTemplate`<title>${title}</title>`}${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use ${addAttribute(`#${id}`, "xlink:href")}></use></svg>`;
}, "/home/clinton/Developer/Astro/projexts/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$3 = createAstro();
const $$TechnologyCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TechnologyCard;
  const { text, logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-16"><i${addAttribute(`${logo} text-[120px] p-1 border-gray-100/10 border-2 bg-clip-text text-transparent bg-gradient-to-t from-white via-gray/70 to-gray/90 rounded-lg`, "class")}></i>${renderComponent($$result, "Icon", $$Icon, { "name": "devicon:c" })}<span class="text-2xl ml-6 font-bold bg-clip-text text-transparent bg-gradient-to-t from-white via-gray/70 to-gray/90 rounded-lg">${text}</span></div>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/TechnologyCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$Technologies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Technologies;
  return renderTemplate`<!--========= Slider ==========-->${maybeRenderHead()}<div class="overflow-hidden whitespace-nowrap cursor-pointer" data-tech-wrapper data-astro-cid-b5kgylrc><div class="tech-card inline-block" data-astro-cid-b5kgylrc>${technologies.map((tech) => renderTemplate`<div class="inline-block m-0" data-astro-cid-b5kgylrc>${renderComponent($$result, "TechnologyCard", $$TechnologyCard, { "text": tech.text, "logo": tech.logo, "data-astro-cid-b5kgylrc": true })}</div>`)}</div></div><!-- ========== Modal ========== --><div class="w-screen h-screen bg-red/70 fixed top-0 left-0 z-[100] justify-center items-center hidden" data-tech-modal data-astro-cid-b5kgylrc><div class="tech-modal h-[70%] w-4/5 overflow-y-auto flex flex-wrap justify-center items-center gap-x-5 gap-y-4 bg-red-300" data-tech-stop data-astro-cid-b5kgylrc>${technologies.map((tech) => renderTemplate`<div class="inline-block m-0" data-astro-cid-b5kgylrc>${renderComponent($$result, "TechnologyCard", $$TechnologyCard, { "text": tech.text, "logo": tech.logo, "data-astro-cid-b5kgylrc": true })}</div>`)}</div></div>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/Technologies.astro", void 0);

const $$Astro$1 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center mx-auto py-16 xl:w-[80%] sm:w-full xs:w-[75%]"><div class="sm:w-[50%] xs:w-full"><h2 class="md:text-10xl w-fit text-5xl font-Bebas font-bold mt-36 mb-3 bg-clip-text uppercase">
Contact Me
</h2><p class="md:text-2xl text-xl mt-6 opacity-60 text-start">
Feel free to reach out for collaborations, inquires, or just to say
            hi!
</p><form autocomplete="off" class="flex flex-col py-2 mt-1" id="form"><label for="from_name" class="font-bold opacity-90 mb-1 text-start text-lg">Name</label><input type="text" class="bg-transparent border-white/50 border-2 placeholder:text-gray-500 placeholder:text-lg py-[5px] text-white rounded-md mb-4 md:w-[80%] xs:w-full" placeholder="What's your name?" required id="from_name" name="from_name"><label for="from_email" class="font-bold opacity-90 mb-1 text-start text-lg">Email</label><input type="text" class="bg-transparent border-white/50 border-2 placeholder:text-gray-500 placeholder:text-lg py-[5px] text-white rounded-md mb-4 md:w-[80%] xs:w-full" placeholder="What's your email address?" required id="from_email" name="from_email"><label for="message" class="font-bold opacity-90 mb-1 text-start text-lg">Message</label><textarea class="bg-transparent border-white/50 border-2 placeholder:text-gray-500 placeholder:text-lg py-[5px] text-white rounded-md mb-4 md:w-[80%] xs:w-full" placeholder="Type your message" required maxlength="2000" rows="5" name="message" id="message">            </textarea><button type="submit" id="button" class="bg-white text-black font-bold py-2 px-4 rounded-md mt-4 md:w-[80%] xs:w-full hover:bg-sky-400 hover:text-white hover:scale-[1.02] ease-in duration-300">
Submit
</button></form></div></section>`;
}, "/home/clinton/Developer/Astro/projexts/src/components/Form.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<main class="w-screen" data-astro-cid-j7pv25f6><div id="Home" class="w-full h-screen text-center items-center" data-astro-cid-j7pv25f6><div class="flex flex-col justify-center items-center text-center w-full h-full" data-astro-cid-j7pv25f6><h1 class="sm:text-11xl text-7xl font-Bebas font-bold py-2" data-astro-cid-j7pv25f6>
HELLO
</h1><h1 class="sm:text-9xl text-5xl font-Bebas font-bold" data-astro-cid-j7pv25f6>AND</h1><h1 class="sm:text-11xl text-6xl font-Bebas font-bold" data-astro-cid-j7pv25f6>
WELCOME
</h1><ul class="flex justify-center mt-12" data-astro-cid-j7pv25f6>${socials.map((social) => renderTemplate`<li class="mx-12 opacity-70 hover:opacity-100 duration-300" data-astro-cid-j7pv25f6><a${addAttribute(social.link, "href")} target="_blank" class="text-4xl" data-astro-cid-j7pv25f6><i${addAttribute(social.logo + " bx-lg", "class")} data-astro-cid-j7pv25f6></i></a></li>`)}</ul></div></div><div id="Mission" class="w-full h-screen text-center items-center" data-astro-cid-j7pv25f6><div class="flex justify-self-center flex-col min-w-full w-full h-full" data-astro-cid-j7pv25f6><h1 class="sm:text-10xl text-5xl font-Bebas mt-36 uppercase" data-astro-cid-j7pv25f6>
Mission
</h1><div class="flex justify-center mx-auto py-16 xl:w-[80%] sm:w-full xs:w-[75%]" data-astro-cid-j7pv25f6><p class="text-5xl font-Neue opacity-80" data-astro-cid-j7pv25f6>
As a new software engineer, I am on a mission to make a
                        meaningful impact in the world of technology. My journey
                        is driven by a core set of principles that guide my work
                        and aspirations
</p></div></div></div><div id="Technologies" class="w-full h-screen text-center items-center" data-astro-cid-j7pv25f6><div class="flex flex-col justify-self-center min-w-full w-full h-full" data-astro-cid-j7pv25f6><h1 class="sm:text-10xl text-5xl font-Bebas mt-36 uppercase" data-astro-cid-j7pv25f6>
Technologies
</h1><div class="flex justify-center items-center h-full" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Technologies", $$Technologies, { "data-astro-cid-j7pv25f6": true })}</div></div></div><div id="Projects" class="w-full h-screen text-center items-center" data-astro-cid-j7pv25f6><div class="flex flex-col md:justify-self-center justify-self-start min-w-full w-full h-full" data-astro-cid-j7pv25f6><h1 class="md:text-10xl text-5xl font-Bebas mt-36 uppercase" data-astro-cid-j7pv25f6>
Projects
</h1>${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })}</div></div><div id="Contact" class="w-full h-screen text-center items-center" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-j7pv25f6": true })}</div></main>` })}`;
}, "/home/clinton/Developer/Astro/projexts/src/pages/index.astro", void 0);

const $$file = "/home/clinton/Developer/Astro/projexts/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
