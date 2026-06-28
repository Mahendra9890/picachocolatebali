const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appPath = path.join(__dirname, "..", "assets", "js", "app.js");
const source = fs.readFileSync(appPath, "utf8");
let testElements = [];

function loadApp() {
  const sandbox = {
    console,
    window: {
      addEventListener() {},
      dispatchEvent() {},
      scrollY: 0,
      innerHeight: 800,
      scrollTo() {},
    },
    document: {
      readyState: "complete",
      documentElement: { setAttribute() {} },
      body: { insertAdjacentHTML() {} },
      addEventListener() {},
      querySelectorAll(selector) {
        if (selector === "[data-id][data-en]") {
          return testElements;
        }
        if (selector === ".lang-toggle") {
          return [];
        }
        return [];
      },
      getElementById() {
        return null;
      },
      querySelector() {
        return null;
      },
      createElement() {
        return {};
      },
    },
    localStorage: {
      getItem() {
        return "id";
      },
      setItem() {},
    },
    IntersectionObserver: class {
      observe() {}
      unobserve() {}
    },
    CustomEvent: class {
      constructor(type, init) {
        this.type = type;
        this.detail = init?.detail;
      }
    },
    setTimeout,
    clearTimeout,
    URLSearchParams,
  };

  sandbox.global = sandbox;
  sandbox.globalThis = sandbox;

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: appPath });
  return sandbox;
}

const sandbox = loadApp();
const { applyLanguage } = sandbox;

const sameValueElement = {
  dataset: { id: "Find Us", en: "Find Us" },
  textContent: "Find Us",
};
const differentValueElement = {
  dataset: { id: "Cari Kami", en: "Find Us" },
  textContent: "Cari Kami",
};

testElements = [sameValueElement, differentValueElement];
applyLanguage("en");

assert.equal(sameValueElement.textContent, "Find Us");
assert.equal(differentValueElement.textContent, "Find Us");

console.log("app language test passed");
