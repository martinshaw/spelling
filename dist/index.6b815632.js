// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1G5n2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kuM8f":[function(require,module,exports) {
/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: app.ts
Created:  2024-03-01T21:04:55.992Z
Modified: 2024-03-01T21:04:55.993Z

Description: description
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _10000WithoutUnder5CharsJson = require("./wordlists/mit/10000-without-under-5-chars.json");
var _10000WithoutUnder5CharsJsonDefault = parcelHelpers.interopDefault(_10000WithoutUnder5CharsJson);
class SpellingApp {
    constructor(){
        this.selectedWord = null;
        this.currentEntryFieldInputValue = "";
        this.listenAgainCounter = 0;
        this.score = 0;
        this.focusEntryFieldInput = ()=>this.entryFieldInputElement.focus();
        this.getNewWord = ()=>(0, _10000WithoutUnder5CharsJsonDefault.default)[Math.floor(Math.random() * (0, _10000WithoutUnder5CharsJsonDefault.default).length)];
        this.onNewWordSelected = (word)=>this.selectedWord = word;
        this.addElements();
        this.addEventListeners();
    }
    addElement(selector, errorMessage, setterCallback) {
        const element = document.querySelector(selector);
        if (element === null) throw new Error(errorMessage);
        setterCallback(element);
    }
    addElements() {
        this.addElement("div#wordlist", "Wordlist element not found", (element)=>this.wordlistElement = element);
        this.addElement("#entry__field", "Entry field element not found", (element)=>this.entryFieldElement = element);
        this.addElement("#entry__field input", "Entry field input element not found", (element)=>this.entryFieldInputElement = element);
        this.addElement("#entry__start", "Entry start element not found", (element)=>this.entryStartElement = element);
        this.addElement("#entry__start button", "Entry start button element not found", (element)=>this.entryStartButtonElement = element);
        this.addElement("#score", "Score element not found", (element)=>this.scoreElement = element);
    }
    addEventListeners() {
        this.entryFieldInputElement.addEventListener("input", (event)=>this.onEntryFieldInputValueChange(event.target.value));
        this.entryFieldInputElement.addEventListener("keyup", (event)=>this.onEntryFieldInputKeyUpEvent(event));
        this.entryFieldInputElement.addEventListener("blur", (event)=>this.focusEntryFieldInput());
        this.entryStartButtonElement.addEventListener("click", (event)=>this.nextWord());
    }
    speakSelectedWord() {
        if (this.selectedWord === null) return;
        speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance();
        msg.voice = speechSynthesis.getVoices().filter((voice)=>voice.lang.startsWith("en-")).sort((a, b)=>(a.localService ? 0 : 1) - (b.localService ? 0 : 1))[0];
        msg.rate = 1;
        msg.text = this.selectedWord;
        speechSynthesis.speak(msg);
    }
    addSelectedWordToWordlist() {
        const wordElement = document.createElement("div");
        wordElement.classList.add("wordlist__word");
        wordElement.textContent = this.selectedWord;
        this.wordlistElement.appendChild(wordElement);
    }
    increaseScore() {
        this.score++;
        this.scoreElement.textContent = this.score.toLocaleString();
    }
    onEntryFieldInputValueChange(value) {
        this.currentEntryFieldInputValue = value;
        if (this.currentEntryFieldInputValue !== this.selectedWord) return;
        this.increaseScore();
        this.addSelectedWordToWordlist();
        this.nextWord();
    }
    onEntryFieldInputKeyUpEvent(event) {
        if (event.key !== "ArrowDown") return;
        if (this.listenAgainCounter > 0) return this.nextWord();
        this.listenAgainCounter++;
        this.speakSelectedWord();
    }
    resetEntryFieldInput() {
        this.onEntryFieldInputValueChange("");
        this.entryFieldInputElement.value = "";
    }
    nextWord() {
        if (this.selectedWord === null) {
            this.entryFieldElement.classList.remove("hidden");
            this.entryStartElement.classList.add("hidden");
        }
        this.listenAgainCounter = 0;
        const word = this.getNewWord();
        this.focusEntryFieldInput();
        this.onNewWordSelected(word);
        this.speakSelectedWord();
        this.resetEntryFieldInput();
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    try {
        new SpellingApp();
    } catch (error) {
        console.error(error);
    }
});

},{"./wordlists/mit/10000-without-under-5-chars.json":"96Vox","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96Vox":[function(require,module,exports) {
module.exports = JSON.parse('["aaron","abandoned","aberdeen","abilities","ability","aboriginal","abortion","about","above","abraham","abroad","absence","absent","absolute","absolutely","absorption","abstract","abstracts","abuse","academic","academics","academy","accent","accept","acceptable","acceptance","accepted","accepting","accepts","access","accessed","accessibility","accessible","accessing","accessories","accessory","accident","accidents","accommodate","accommodation","accommodations","accompanied","accompanying","accomplish","accomplished","accordance","according","accordingly","account","accountability","accounting","accounts","accreditation","accredited","accuracy","accurate","accurately","accused","acdbentity","achieve","achieved","achievement","achievements","achieving","acids","acknowledge","acknowledged","acoustic","acquire","acquired","acquisition","acquisitions","acres","acrobat","across","acrylic","acting","action","actions","activated","activation","active","actively","activists","activities","activity","actor","actors","actress","actual","actually","acute","adams","adaptation","adapted","adapter","adapters","adaptive","adaptor","added","addiction","adding","addition","additional","additionally","additions","address","addressed","addresses","addressing","adelaide","adequate","adidas","adipex","adjacent","adjust","adjustable","adjusted","adjustment","adjustments","admin","administered","administration","administrative","administrator","administrators","admission","admissions","admit","admitted","adobe","adolescent","adopt","adopted","adoption","adrian","adult","adults","advance","advanced","advancement","advances","advantage","advantages","adventure","adventures","adverse","advert","advertise","advertisement","advertisements","advertiser","advertisers","advertising","advice","advise","advised","advisor","advisors","advisory","advocacy","advocate","adware","aerial","aerospace","affair","affairs","affect","affected","affecting","affects","affiliate","affiliated","affiliates","affiliation","afford","affordable","afghanistan","afraid","africa","african","after","afternoon","afterwards","again","against","agencies","agency","agenda","agent","agents","aggregate","aggressive","aging","agree","agreed","agreement","agreements","agrees","agricultural","agriculture","ahead","aimed","aircraft","airfare","airline","airlines","airplane","airport","airports","alabama","alarm","alaska","albania","albany","albert","alberta","album","albums","albuquerque","alcohol","alert","alerts","alexander","alexandria","alfred","algebra","algeria","algorithm","algorithms","alias","alice","alien","align","alignment","alike","alive","allah","allan","alleged","allen","allergy","alliance","allied","allocated","allocation","allow","allowance","allowed","allowing","allows","alloy","almost","alone","along","alpha","alphabetical","alpine","already","alter","altered","alternate","alternative","alternatively","alternatives","although","aluminium","aluminum","alumni","always","amanda","amateur","amazing","amazon","amazoncom","amazoncouk","ambassador","amber","ambien","ambient","amend","amended","amendment","amendments","amenities","america","american","americans","americas","amino","among","amongst","amount","amounts","ampland","amplifier","amsterdam","anaheim","analog","analyses","analysis","analyst","analysts","analytical","analyze","analyzed","anatomy","anchor","ancient","andale","anderson","andorra","andrea","andreas","andrew","andrews","angel","angela","angeles","angels","anger","angle","angola","angry","animal","animals","animated","animation","anime","annex","annie","anniversary","annotated","annotation","announce","announced","announcement","announcements","announces","annoying","annual","annually","anonymous","another","answer","answered","answering","answers","antarctica","antenna","anthony","anthropology","antibodies","antibody","anticipated","antigua","antique","antiques","antivirus","antonio","anxiety","anybody","anymore","anyone","anything","anytime","anyway","anywhere","apache","apart","apartment","apartments","apnic","apollo","apparatus","apparel","apparent","apparently","appeal","appeals","appear","appearance","appeared","appearing","appears","appendix","apple","appliance","appliances","applicable","applicant","applicants","application","applications","applied","applies","apply","applying","appointed","appointment","appointments","appraisal","appreciate","appreciated","appreciation","approach","approaches","appropriate","appropriations","approval","approve","approved","approx","approximate","approximately","april","aquarium","aquatic","arabia","arabic","arbitrary","arbitration","arcade","architect","architects","architectural","architecture","archive","archived","archives","arctic","areas","arena","argentina","argue","argued","argument","arguments","arise","arising","arizona","arkansas","arlington","armed","armenia","armor","armstrong","arnold","around","arrange","arranged","arrangement","arrangements","array","arrest","arrested","arrival","arrivals","arrive","arrived","arrives","arrow","arthritis","arthur","article","articles","artificial","artist","artistic","artists","artwork","aruba","asbestos","ascii","ashley","asian","aside","asked","asking","aspect","aspects","aspnet","assault","assembled","assembly","assess","assessed","assessing","assessment","assessments","asset","assets","assign","assigned","assignment","assignments","assist","assistance","assistant","assisted","assists","associate","associated","associates","association","associations","assume","assumed","assumes","assuming","assumption","assumptions","assurance","assure","assured","asthma","astrology","astronomy","athens","athletes","athletic","athletics","atlanta","atlantic","atlas","atmosphere","atmospheric","atomic","attach","attached","attachment","attachments","attack","attacked","attacks","attempt","attempted","attempting","attempts","attend","attendance","attended","attending","attention","attitude","attitudes","attorney","attorneys","attract","attraction","attractions","attractive","attribute","attributes","auburn","auckland","auction","auctions","audience","audio","audit","auditor","august","aurora","austin","australia","australian","austria","authentic","authentication","author","authorities","authority","authorization","authorized","authors","automated","automatic","automatically","automation","automobile","automobiles","automotive","autos","autumn","availability","available","avatar","avenue","average","aviation","avoid","avoiding","award","awarded","awards","aware","awareness","awesome","awful","azerbaijan","babes","babies","bachelor","backed","background","backgrounds","backing","backup","bacon","bacteria","bacterial","badge","badly","baghdad","bahamas","bahrain","bailey","baker","baking","balance","balanced","ballet","balloon","ballot","balls","baltimore","banana","bands","bandwidth","bangbus","bangkok","bangladesh","banking","bankruptcy","banks","banned","banner","banners","baptist","barbados","barbara","barbie","barcelona","barely","bargain","bargains","barnes","barrel","barrier","barriers","barry","baseball","based","baseline","basement","basename","bases","basic","basically","basics","basin","basis","basket","basketball","baskets","batch","bathroom","bathrooms","baths","batman","batteries","battery","battle","battlefield","beach","beaches","beads","beans","bearing","bears","beast","beastality","beastiality","beatles","beats","beautiful","beautifully","beauty","beaver","became","because","become","becomes","becoming","bedding","bedford","bedroom","bedrooms","before","began","begin","beginner","beginners","beginning","begins","begun","behalf","behavior","behavioral","behaviour","behind","beijing","being","beings","belarus","belfast","belgium","belief","beliefs","believe","believed","believes","belize","belkin","belle","belly","belong","belongs","below","belts","bench","benchmark","beneath","beneficial","benefit","benefits","benjamin","bennett","berkeley","berlin","bermuda","bernard","berry","beside","besides","bestiality","bestsellers","better","betting","betty","between","beverage","beverages","beverly","beyond","bhutan","bible","biblical","bibliographic","bibliography","bicycle","bidder","bidding","bigger","biggest","bikes","bikini","billing","billion","bills","billy","binary","binding","bingo","biodiversity","biographies","biography","biological","biology","biotechnology","birds","birmingham","birth","birthday","bishop","bitch","bizarre","bizrate","black","blackberry","blackjack","blacks","blade","blades","blair","blake","blame","blank","blanket","blast","bleeding","blend","bless","blessed","blind","blink","block","blocked","blocking","blocks","blogger","bloggers","blogging","blogs","blond","blonde","blood","bloody","bloom","bloomberg","blowing","blowjob","blowjobs","blues","bluetooth","board","boards","boating","boats","bobby","bodies","bolivia","bondage","bonds","bones","bonus","boobs","booking","bookings","bookmark","bookmarks","books","bookstore","boolean","boost","booth","boots","booty","border","borders","bored","boring","borough","bosnia","boston","bother","botswana","bottle","bottles","bottom","bought","boulder","boulevard","bound","boundaries","boundary","bouquet","boutique","bowling","boxed","boxes","boxing","bracelet","bracelets","bracket","bradford","bradley","brain","brake","brakes","branch","branches","brand","brandon","brands","brass","brave","brazil","brazilian","breach","bread","break","breakdown","breakfast","breaking","breaks","breast","breasts","breath","breathing","breed","breeding","breeds","brian","brick","bridal","bride","bridge","bridges","brief","briefing","briefly","briefs","bright","brighton","brilliant","bring","bringing","brings","brisbane","bristol","britain","britannica","british","britney","broad","broadband","broadcast","broadcasting","broader","broadway","brochure","brochures","broke","broken","broker","brokers","bronze","brook","brooklyn","brooks","brother","brothers","brought","brown","browse","browser","browsers","browsing","bruce","brunei","brunette","brunswick","brush","brussels","brutal","bryan","bryant","bubble","bucks","budapest","buddy","budget","budgets","buffalo","buffer","bufing","build","builder","builders","building","buildings","builds","built","bukkake","bulgaria","bulgarian","bullet","bulletin","bumper","bunch","bundle","bunny","burden","bureau","buried","burke","burlington","burner","burning","burns","burst","burton","buses","business","businesses","busty","butler","butter","butterfly","button","buttons","butts","buyer","buyers","buying","bytes","cabin","cabinet","cabinets","cable","cables","cache","cached","cadillac","cakes","calcium","calculate","calculated","calculation","calculations","calculator","calculators","calendar","calendars","calgary","calibration","calif","california","called","calling","calls","calvin","cambodia","cambridge","camcorder","camcorders","camel","camera","cameras","cameron","cameroon","campaign","campaigns","campbell","camping","camps","campus","canada","canadian","canal","canberra","cancel","cancellation","cancelled","cancer","candidate","candidates","candle","candles","candy","cannon","canon","canvas","canyon","capabilities","capability","capable","capacity","capital","capitol","captain","capture","captured","carbon","cardiac","cardiff","cardiovascular","cards","career","careers","careful","carefully","carey","cargo","caribbean","caring","carlo","carlos","carmen","carnival","carol","carolina","caroline","carpet","carried","carrier","carriers","carries","carroll","carry","carrying","carter","cartoon","cartoons","cartridge","cartridges","cases","casey","cashiers","casino","casinos","casio","cassette","casting","castle","casual","catalog","catalogs","catalogue","catalyst","catch","categories","category","catering","cathedral","catherine","catholic","cattle","caught","cause","caused","causes","causing","caution","cayman","cedar","ceiling","celebrate","celebration","celebrities","celebrity","celebs","cells","cellular","celtic","cement","cemetery","census","center","centered","centers","central","centre","centres","cents","centuries","century","ceramic","ceremony","certain","certainly","certificate","certificates","certification","certified","chain","chains","chair","chairman","chairs","challenge","challenged","challenges","challenging","chamber","chambers","champagne","champion","champions","championship","championships","chance","chancellor","chances","change","changed","changelog","changes","changing","channel","channels","chaos","chapel","chapter","chapters","character","characteristic","characteristics","characterization","characterized","characters","charge","charged","charger","chargers","charges","charging","charitable","charity","charles","charleston","charlie","charlotte","charm","charming","charms","chart","charter","charts","chase","chassis","cheap","cheaper","cheapest","cheat","cheats","check","checked","checking","checklist","checkout","checks","cheers","cheese","chelsea","chemical","chemicals","chemistry","cheque","cherry","chess","chest","chester","chevrolet","chevy","chicago","chick","chicken","chicks","chief","child","childhood","children","childrens","chile","china","chinese","chips","chocolate","choice","choices","choir","cholesterol","choose","choosing","chorus","chose","chosen","chris","christ","christian","christianity","christians","christina","christine","christmas","christopher","chrome","chronic","chronicle","chronicles","chrysler","chubby","chuck","church","churches","cialis","cigarette","cigarettes","cincinnati","cindy","cinema","cingular","circle","circles","circuit","circuits","circular","circulation","circumstances","circus","cisco","citation","citations","cited","cities","citizen","citizens","citizenship","citysearch","civic","civil","civilian","civilization","claim","claimed","claims","claire","clara","clarity","clark","clarke","class","classes","classic","classical","classics","classification","classified","classifieds","classroom","clause","clean","cleaner","cleaners","cleaning","cleanup","clear","clearance","cleared","clearing","clearly","clerk","cleveland","click","clicking","clicks","client","clients","cliff","climate","climb","climbing","clinic","clinical","clinics","clinton","clips","clock","clocks","clone","close","closed","closely","closer","closes","closest","closing","closure","cloth","clothes","clothing","cloud","clouds","cloudy","clubs","cluster","clusters","cnetcom","coach","coaches","coaching","coalition","coast","coastal","coated","coating","cocks","codes","coding","coffee","cognitive","cohen","coins","coleman","colin","collaboration","collaborative","collapse","collar","colleague","colleagues","collect","collectables","collected","collectible","collectibles","collecting","collection","collections","collective","collector","collectors","college","colleges","collins","cologne","colombia","colon","colonial","colony","color","colorado","colored","colors","colour","colours","columbia","columbus","column","columnists","columns","combat","combination","combinations","combine","combined","combines","combining","combo","comedy","comes","comfort","comfortable","comic","comics","coming","command","commander","commands","comment","commentary","commented","comments","commerce","commercial","commission","commissioner","commissioners","commissions","commit","commitment","commitments","committed","committee","committees","commodities","commodity","common","commonly","commons","commonwealth","communicate","communication","communications","communist","communities","community","compact","companies","companion","company","compaq","comparable","comparative","compare","compared","comparing","comparison","comparisons","compatibility","compatible","compensation","compete","competent","competing","competition","competitions","competitive","competitors","compilation","compile","compiled","compiler","complaint","complaints","complement","complete","completed","completely","completing","completion","complex","complexity","compliance","compliant","complicated","complications","complimentary","comply","component","components","composed","composer","composite","composition","compound","compounds","comprehensive","compressed","compression","compromise","computation","computational","compute","computed","computer","computers","computing","concentrate","concentration","concentrations","concept","concepts","conceptual","concern","concerned","concerning","concerns","concert","concerts","conclude","concluded","conclusion","conclusions","concord","concrete","condition","conditional","conditioning","conditions","condo","condos","conduct","conducted","conducting","conference","conferences","conferencing","confidence","confident","confidential","confidentiality","config","configuration","configure","configured","configuring","confirm","confirmation","confirmed","conflict","conflicts","confused","confusion","congo","congratulations","congress","congressional","conjunction","connect","connected","connecticut","connecting","connection","connections","connectivity","connector","connectors","conscious","consciousness","consecutive","consensus","consent","consequence","consequences","consequently","conservation","conservative","consider","considerable","consideration","considerations","considered","considering","considers","consist","consistency","consistent","consistently","consisting","consists","console","consoles","consolidated","consolidation","consortium","conspiracy","const","constant","constantly","constitute","constitutes","constitution","constitutional","constraint","constraints","construct","constructed","construction","consult","consultancy","consultant","consultants","consultation","consulting","consumer","consumers","consumption","contact","contacted","contacting","contacts","contain","contained","container","containers","containing","contains","contamination","contemporary","content","contents","contest","contests","context","continent","continental","continually","continue","continued","continues","continuing","continuity","continuous","continuously","contract","contracting","contractor","contractors","contracts","contrary","contrast","contribute","contributed","contributing","contribution","contributions","contributor","contributors","control","controlled","controller","controllers","controlling","controls","controversial","controversy","convenience","convenient","convention","conventional","conventions","convergence","conversation","conversations","conversion","convert","converted","converter","convertible","convicted","conviction","convinced","cookbook","cooked","cookie","cookies","cooking","cooler","cooling","cooper","cooperation","cooperative","coordinate","coordinated","coordinates","coordination","coordinator","copied","copies","copper","copying","copyright","copyrighted","copyrights","coral","cordless","cornell","corner","corners","cornwall","corporate","corporation","corporations","corps","corpus","correct","corrected","correction","corrections","correctly","correlation","correspondence","corresponding","corruption","cosmetic","cosmetics","costa","costs","costume","costumes","cottage","cottages","cotton","could","council","councils","counsel","counseling","count","counted","counter","counters","counties","counting","countries","country","counts","county","couple","coupled","couples","coupon","coupons","courage","courier","course","courses","court","courtesy","courts","cover","coverage","covered","covering","covers","cowboy","crack","cradle","craft","crafts","craig","craps","crash","crawford","crazy","cream","create","created","creates","creating","creation","creations","creative","creativity","creator","creature","creatures","credit","credits","creek","crest","cricket","crime","crimes","criminal","crisis","criteria","criterion","critical","criticism","critics","croatia","crops","cross","crossing","crossword","crowd","crown","crucial","crude","cruise","cruises","crystal","cubic","cuisine","cultural","culture","cultures","cumshot","cumshots","cumulative","curious","currencies","currency","current","currently","curriculum","cursor","curtis","curve","curves","custody","custom","customer","customers","customise","customize","customized","customs","cutting","cyber","cycle","cycles","cycling","cylinder","cyprus","czech","daddy","daily","dairy","daisy","dakota","dallas","damage","damaged","damages","dance","dancing","danger","dangerous","daniel","danish","danny","darkness","darwin","database","databases","dated","dates","dating","daughter","daughters","david","davidson","davis","dayton","deadline","deadly","dealer","dealers","dealing","deals","dealt","dealtime","death","deaths","debate","debian","deborah","debug","debut","decade","decades","december","decent","decide","decided","decimal","decision","decisions","declaration","declare","declared","decline","declined","decor","decorating","decorative","decrease","decreased","dedicated","deemed","deeper","deeply","default","defeat","defects","defence","defend","defendant","defense","defensive","deferred","deficit","define","defined","defines","defining","definitely","definition","definitions","degree","degrees","delaware","delay","delayed","delays","delegation","delete","deleted","delhi","delicious","delight","deliver","delivered","delivering","delivers","delivery","delta","deluxe","demand","demanding","demands","democracy","democrat","democratic","democrats","demographic","demonstrate","demonstrated","demonstrates","demonstration","denial","denied","denmark","dennis","dense","density","dental","dentists","denver","department","departmental","departments","departure","depend","dependence","dependent","depending","depends","deployment","deposit","deposits","depot","depression","depth","deputy","derby","derek","derived","descending","describe","described","describes","describing","description","descriptions","desert","deserve","design","designated","designation","designed","designer","designers","designing","designs","desirable","desire","desired","desktop","desktops","desperate","despite","destination","destinations","destiny","destroy","destroyed","destruction","detail","detailed","details","detect","detected","detection","detective","detector","determination","determine","determined","determines","determining","detroit","deutsch","deutsche","deutschland","devel","develop","developed","developer","developers","developing","development","developmental","developments","develops","deviant","deviation","device","devices","devil","devon","devoted","diabetes","diagnosis","diagnostic","diagram","dialog","dialogue","diameter","diamond","diamonds","diana","diane","diary","dicke","dicks","dictionaries","dictionary","diego","diesel","dietary","differ","difference","differences","different","differential","differently","difficult","difficulties","difficulty","diffs","digest","digit","digital","dildo","dildos","dimension","dimensional","dimensions","dining","dinner","diploma","direct","directed","direction","directions","directive","directly","director","directories","directors","directory","dirty","disabilities","disability","disable","disabled","disagree","disappointed","disaster","discharge","disciplinary","discipline","disciplines","disclaimer","disclaimers","disclose","disclosure","disco","discount","discounted","discounts","discover","discovered","discovery","discrete","discretion","discrimination","discs","discuss","discussed","discusses","discussing","discussion","discussions","disease","diseases","dishes","disks","disney","disorder","disorders","dispatch","dispatched","display","displayed","displaying","displays","disposal","disposition","dispute","disputes","distance","distances","distant","distinct","distinction","distinguished","distribute","distributed","distribution","distributions","distributor","distributors","district","districts","disturbed","diverse","diversity","divide","divided","dividend","divine","diving","division","divisions","divorce","doctor","doctors","doctrine","document","documentary","documentation","documentcreatetextnode","documented","documents","dodge","doing","dollar","dollars","dolls","domain","domains","domestic","dominant","dominican","donald","donate","donated","donation","donations","donna","donor","donors","doors","dosage","double","doubt","douglas","dover","download","downloadable","downloadcom","downloaded","downloading","downloads","downtown","dozen","dozens","draft","dragon","drain","drainage","drama","dramatic","dramatically","drawing","drawings","drawn","draws","dream","dreams","dress","dressed","dresses","dressing","dried","drill","drilling","drink","drinking","drinks","drive","driven","driver","drivers","drives","driving","dropped","drops","drove","drugs","drums","drunk","dryer","dubai","dublin","duncan","duplicate","durable","duration","durham","during","dutch","duties","dying","dylan","dynamic","dynamics","eagle","eagles","earlier","earliest","early","earned","earning","earnings","earrings","earth","earthquake","easier","easily","easter","eastern","eating","ebony","ebook","ebooks","eclipse","ecological","ecology","ecommerce","economic","economics","economies","economy","ecuador","eddie","edgar","edges","edinburgh","edited","editing","edition","editions","editor","editorial","editorials","editors","edmonton","educated","education","educational","educators","edward","edwards","effect","effective","effectively","effectiveness","effects","efficiency","efficient","efficiently","effort","efforts","egypt","egyptian","eight","either","ejaculation","elder","elderly","elect","elected","election","elections","electoral","electric","electrical","electricity","electro","electron","electronic","electronics","elegant","element","elementary","elements","elephant","elevation","eleven","eligibility","eligible","eliminate","elimination","elite","elizabeth","ellen","elliott","ellis","elsewhere","elvis","emacs","email","emails","embassy","embedded","emerald","emergency","emerging","emily","eminem","emirates","emission","emissions","emotional","emotions","emperor","emphasis","empire","empirical","employ","employed","employee","employees","employer","employers","employment","empty","enable","enabled","enables","enabling","enclosed","enclosure","encoding","encounter","encountered","encourage","encouraged","encourages","encouraging","encryption","encyclopedia","endangered","ended","endif","ending","endless","endorsed","endorsement","enemies","enemy","energy","enforcement","engage","engaged","engagement","engaging","engine","engineer","engineering","engineers","engines","england","english","enhance","enhanced","enhancement","enhancements","enhancing","enjoy","enjoyed","enjoying","enlarge","enlargement","enormous","enough","enquiries","enquiry","enrolled","enrollment","ensemble","ensure","ensures","ensuring","enter","entered","entering","enterprise","enterprises","enters","entertaining","entertainment","entire","entirely","entities","entitled","entity","entrance","entrepreneur","entrepreneurs","entries","entry","envelope","environment","environmental","environments","enzyme","epinions","epinionscom","episode","episodes","epson","equal","equality","equally","equation","equations","equilibrium","equipment","equipped","equity","equivalent","ericsson","erotic","erotica","error","errors","escape","escort","escorts","especially","essay","essays","essence","essential","essentially","essentials","essex","establish","established","establishing","establishment","estate","estates","estimate","estimated","estimates","estimation","estonia","eternal","ethernet","ethical","ethics","ethiopia","ethnic","eugene","europe","european","euros","evaluate","evaluated","evaluating","evaluation","evaluations","evanescence","evans","evening","event","events","eventually","every","everybody","everyday","everyone","everything","everywhere","evidence","evident","evolution","exact","exactly","examination","examinations","examine","examined","examines","examining","example","examples","exams","exceed","excel","excellence","excellent","except","exception","exceptional","exceptions","excerpt","excess","excessive","exchange","exchanges","excited","excitement","exciting","exclude","excluded","excluding","exclusion","exclusive","exclusively","excuse","execute","executed","execution","executive","executives","exempt","exemption","exercise","exercises","exhaust","exhibit","exhibition","exhibitions","exhibits","exist","existed","existence","existing","exists","exotic","expand","expanded","expanding","expansion","expansys","expect","expectations","expected","expects","expedia","expenditure","expenditures","expense","expenses","expensive","experience","experienced","experiences","experiencing","experiment","experimental","experiments","expert","expertise","experts","expiration","expired","expires","explain","explained","explaining","explains","explanation","explicit","explicitly","exploration","explore","explorer","exploring","explosion","export","exports","exposed","exposure","express","expressed","expression","expressions","extend","extended","extending","extends","extension","extensions","extensive","extent","exterior","external","extra","extract","extraction","extraordinary","extras","extreme","extremely","fabric","fabrics","fabulous","faced","faces","facial","facilitate","facilities","facility","facing","factor","factors","factory","facts","faculty","failed","failing","fails","failure","failures","fairfield","fairly","fairy","faith","fallen","falling","falls","false","familiar","families","family","famous","fancy","fantastic","fantasy","fares","farmer","farmers","farming","farms","fascinating","fashion","faster","fastest","fatal","father","fathers","fatty","fault","favor","favorite","favorites","favors","favour","favourite","favourites","fears","feature","featured","features","featuring","february","federal","federation","feedback","feeding","feeds","feeling","feelings","feels","fellow","fellowship","female","females","fence","ferrari","ferry","festival","festivals","fetish","fever","fewer","fiber","fibre","fiction","field","fields","fifteen","fifth","fifty","fight","fighter","fighters","fighting","figure","figured","figures","filed","filename","files","filing","filled","filling","filme","films","filter","filtering","filters","final","finally","finals","finance","finances","financial","financing","findarticles","finder","finding","findings","findlaw","finds","finest","finger","fingering","fingers","finish","finished","finishing","finite","finland","finnish","fioricet","fired","firefox","fireplace","fires","firewall","firewire","firms","firmware","first","fiscal","fisher","fisheries","fishing","fisting","fitness","fitted","fitting","fixed","fixes","fixtures","flags","flame","flash","flashers","flashing","flavor","fleece","fleet","flesh","flexibility","flexible","flickr","flight","flights","float","floating","flood","floor","flooring","floors","floppy","floral","florence","florida","florist","florists","flour","flower","flowers","flows","floyd","fluid","flush","flyer","flying","focal","focus","focused","focuses","focusing","folder","folders","folding","folks","follow","followed","following","follows","fonts","foods","footage","football","footwear","forbes","forbidden","force","forced","forces","forecast","forecasts","foreign","forest","forestry","forests","forever","forge","forget","forgot","forgotten","formal","format","formation","formats","formatting","formed","former","formerly","forming","forms","formula","forth","fortune","forty","forum","forums","forward","forwarding","fossil","foster","fotos","fought","found","foundation","foundations","founded","founder","fountain","fourth","fraction","fragrance","fragrances","frame","framed","frames","framework","framing","france","franchise","francis","francisco","frank","frankfurt","franklin","fraser","fraud","frederick","freebsd","freedom","freelance","freely","freeware","freeze","freight","french","frequencies","frequency","frequent","frequently","fresh","friday","fridge","friend","friendly","friends","friendship","front","frontier","frontpage","frost","frozen","fruit","fruits","fucked","fucking","fujitsu","fully","function","functional","functionality","functioning","functions","fundamental","fundamentals","funded","funding","fundraising","funds","funeral","funky","funny","furnished","furnishings","furniture","further","furthermore","fusion","future","futures","fuzzy","gabriel","gadgets","gained","gains","galaxy","galleries","gallery","gambling","gamecube","games","gamespot","gaming","gamma","gangbang","garage","garbage","garcia","garden","gardening","gardens","garlic","garmin","gasoline","gates","gateway","gather","gathered","gathering","gauge","gazette","gender","genealogy","general","generally","generate","generated","generates","generating","generation","generations","generator","generators","generic","generous","genes","genesis","genetic","genetics","geneva","genius","genome","genre","genres","gentle","gentleman","gently","genuine","geographic","geographical","geography","geological","geology","geometry","george","georgia","gerald","german","germany","getting","ghana","ghost","giant","giants","gibraltar","gibson","gifts","gilbert","girlfriend","girls","given","gives","giving","glance","glasgow","glass","glasses","glenn","global","globe","glory","glossary","gloves","glucose","gnome","goals","going","golden","gonna","goods","google","gordon","gorgeous","gospel","gossip","gothic","gotta","gotten","gourmet","governance","governing","government","governmental","governments","governor","grace","grade","grades","gradually","graduate","graduated","graduates","graduation","graham","grain","grammar","grams","grand","grande","granny","grant","granted","grants","graph","graphic","graphical","graphics","graphs","grass","grateful","gratis","gratuit","grave","gravity","great","greater","greatest","greatly","greece","greek","green","greene","greenhouse","greensboro","greeting","greetings","gregory","grenada","griffin","grill","grocery","groove","gross","ground","grounds","groundwater","group","groups","grove","growing","grown","grows","growth","guarantee","guaranteed","guarantees","guard","guardian","guards","guatemala","guess","guest","guestbook","guests","guidance","guide","guided","guidelines","guides","guild","guilty","guinea","guitar","guitars","guyana","habitat","habits","hacker","hairy","haiti","halfcom","halifax","halloween","hamburg","hamilton","hammer","hampshire","hampton","handbags","handbook","handed","handheld","handhelds","handjob","handjobs","handle","handled","handles","handling","handmade","hands","handy","hanging","hansen","happen","happened","happening","happens","happiness","happy","harassment","harbor","harbour","hardcore","hardcover","harder","hardly","hardware","hardwood","harley","harmful","harmony","harold","harper","harris","harrison","harry","hartford","harvard","harvest","harvey","haven","having","hawaii","hawaiian","hayes","hazard","hazardous","hazards","headed","header","headers","heading","headline","headlines","headphones","headquarters","heads","headset","healing","health","healthcare","healthy","heard","hearing","hearings","heart","hearts","heated","heater","heath","heather","heating","heaven","heavily","heavy","hebrew","height","heights","helen","helena","helicopter","hello","helmet","helped","helpful","helping","helps","hence","henderson","henry","hentai","hepatitis","herald","herbal","herbs","hereby","herein","heritage","heroes","herself","hewlett","hidden","hierarchy","higher","highest","highland","highlight","highlighted","highlights","highly","highs","highway","highways","hiking","hills","hilton","himself","hindu","hints","hired","hiring","hispanic","historic","historical","history","hitachi","hitting","hobbies","hobby","hockey","holdem","holder","holders","holding","holdings","holds","holes","holiday","holidays","holland","hollow","holly","hollywood","holmes","holocaust","homeland","homeless","homepage","homes","hometown","homework","honda","honduras","honest","honey","honolulu","honor","honors","hoped","hopefully","hopes","hoping","hopkins","horizon","horizontal","hormone","horny","horrible","horror","horse","horses","hospital","hospitality","hospitals","hosted","hostel","hostels","hosting","hosts","hotel","hotels","hotelscom","hotmail","hottest","hourly","hours","house","household","households","houses","housewares","housewives","housing","houston","howard","however","howto","hudson","hughes","human","humanitarian","humanities","humanity","humans","humidity","humor","hundred","hundreds","hungarian","hungary","hunger","hungry","hunter","hunting","huntington","hurricane","husband","hybrid","hydraulic","hydrocodone","hydrogen","hygiene","hypothesis","hypothetical","hyundai","iceland","icons","idaho","ideal","ideas","identical","identification","identified","identifier","identifies","identify","identifying","identity","ignore","ignored","illegal","illinois","illness","illustrated","illustration","illustrations","image","images","imagination","imagine","imaging","immediate","immediately","immigrants","immigration","immune","immunology","impact","impacts","impaired","imperial","implement","implementation","implemented","implementing","implications","implied","implies","import","importance","important","importantly","imported","imports","impose","imposed","impossible","impressed","impression","impressive","improve","improved","improvement","improvements","improving","inappropriate","inbox","incentive","incentives","incest","inches","incidence","incident","incidents","include","included","includes","including","inclusion","inclusive","income","incoming","incomplete","incorporate","incorporated","incorrect","increase","increased","increases","increasing","increasingly","incredible","incurred","indeed","independence","independent","independently","index","indexed","indexes","india","indian","indiana","indianapolis","indians","indicate","indicated","indicates","indicating","indication","indicator","indicators","indices","indie","indigenous","indirect","individual","individually","individuals","indonesia","indonesian","indoor","induced","induction","industrial","industries","industry","inexpensive","infant","infants","infected","infection","infections","infectious","infinite","inflation","influence","influenced","influences","inform","informal","information","informational","informative","informed","infrared","infrastructure","ingredients","inherited","initial","initially","initiated","initiative","initiatives","injection","injured","injuries","injury","inkjet","inline","inner","innocent","innovation","innovations","innovative","input","inputs","inquire","inquiries","inquiry","insects","insert","inserted","insertion","inside","insider","insight","insights","inspection","inspections","inspector","inspiration","inspired","install","installation","installations","installed","installing","instance","instances","instant","instantly","instead","institute","institutes","institution","institutional","institutions","instruction","instructional","instructions","instructor","instructors","instrument","instrumental","instrumentation","instruments","insulin","insurance","insured","intake","integer","integral","integrate","integrated","integrating","integration","integrity","intel","intellectual","intelligence","intelligent","intend","intended","intense","intensity","intensive","intent","intention","inter","interact","interaction","interactions","interactive","interest","interested","interesting","interests","interface","interfaces","interference","interim","interior","intermediate","internal","international","internationally","internet","internship","interpretation","interpreted","interracial","intersection","interstate","interval","intervals","intervention","interventions","interview","interviews","intimate","intranet","intro","introduce","introduced","introduces","introducing","introduction","introductory","invalid","invasion","invention","inventory","invest","investigate","investigated","investigation","investigations","investigator","investigators","investing","investment","investments","investor","investors","invisible","invision","invitation","invitations","invite","invited","invoice","involve","involved","involvement","involves","involving","iraqi","ireland","irish","irrigation","isaac","islam","islamic","island","islands","isolated","isolation","israel","israeli","issue","issued","issues","istanbul","italia","italian","italiano","italic","italy","items","itself","itunes","ivory","jacket","jackets","jackie","jackson","jacksonville","jacob","jaguar","jamaica","james","jamie","janet","january","japan","japanese","jason","javascript","jeans","jefferson","jeffrey","jelsoft","jennifer","jenny","jeremy","jerry","jersey","jerusalem","jesse","jessica","jesus","jewel","jewellery","jewelry","jewish","jimmy","johnny","johns","johnson","johnston","joined","joining","joins","joint","jokes","jonathan","jones","jordan","joseph","joshua","journal","journalism","journalist","journalists","journals","journey","joyce","judge","judges","judgment","judicial","juice","julia","julian","julie","jumping","junction","jungle","junior","jurisdiction","justice","justify","justin","juvenile","kansas","karaoke","karen","karma","kathy","katie","katrina","kazakhstan","keeping","keeps","keith","kelkoo","kelly","kennedy","kenneth","kenny","kentucky","kenya","kernel","kerry","kevin","keyboard","keyboards","keyword","keywords","kidney","kijiji","killed","killer","killing","kills","kilometers","kinase","kinda","kinds","kingdom","kings","kingston","kissing","kitchen","kitty","klein","knife","knight","knights","knitting","knives","knock","knowing","knowledge","knowledgestorm","known","knows","kodak","korea","korean","kruger","kuwait","label","labeled","labels","labor","laboratories","laboratory","labour","ladder","laden","ladies","lafayette","lakes","lambda","lamps","lancaster","lance","landing","lands","landscape","landscapes","lanes","language","languages","lanka","laptop","laptops","large","largely","larger","largest","larry","laser","lasting","lately","later","latest","latex","latin","latina","latinas","latino","latitude","latter","latvia","lauderdale","laugh","laughing","launch","launched","launches","laundry","laura","lauren","lawrence","lawsuit","lawyer","lawyers","layer","layers","layout","leader","leaders","leadership","leading","leads","league","learn","learned","learners","learning","lease","leasing","least","leather","leave","leaves","leaving","lebanon","lecture","lectures","leeds","legacy","legal","legally","legend","legendary","legends","legislation","legislative","legislature","legitimate","leisure","lemon","lender","lenders","lending","length","lenses","leonard","leone","lesbian","lesbians","leslie","lesser","lesson","lessons","letter","letters","letting","level","levels","levitra","lewis","lexington","lexmark","lexus","liabilities","liability","liable","liberal","liberia","liberty","librarian","libraries","library","licence","license","licensed","licenses","licensing","licking","liechtenstein","lifestyle","lifetime","light","lighter","lighting","lightning","lights","lightweight","liked","likelihood","likely","likes","likewise","limit","limitation","limitations","limited","limiting","limits","limousines","lincoln","linda","lindsay","linear","lined","lines","lingerie","linked","linking","links","linux","lions","liquid","listed","listen","listening","listing","listings","listprice","lists","literacy","literally","literary","literature","lithuania","litigation","little","livecam","lived","liver","liverpool","lives","livesex","livestock","living","lloyd","loaded","loading","loads","loans","lobby","local","locale","locally","locate","located","location","locations","locator","locked","locking","locks","lodge","lodging","logan","logged","logging","logic","logical","login","logistics","logitech","logos","lolita","london","lonely","longer","longest","longitude","looked","looking","looks","looksmart","lookup","loops","loose","lopez","losing","losses","lottery","lotus","louis","louise","louisiana","louisville","lounge","loved","lovely","lover","lovers","loves","loving","lower","lowest","lucas","lucia","lucky","luggage","lunch","luther","luxembourg","luxury","lycos","lying","lyric","lyrics","macedonia","machine","machinery","machines","macintosh","macro","macromedia","madagascar","madison","madness","madonna","madrid","magazine","magazines","magic","magical","magnet","magnetic","magnificent","magnitude","maiden","mailed","mailing","mailman","mails","mailto","maine","mainland","mainly","mainstream","maintain","maintained","maintaining","maintains","maintenance","major","majority","maker","makers","makes","makeup","making","malawi","malaysia","maldives","males","malpractice","malta","mambo","manage","managed","management","manager","managers","managing","manchester","mandate","mandatory","manga","manhattan","manitoba","manner","manor","manual","manually","manuals","manufacture","manufactured","manufacturer","manufacturers","manufacturing","maple","mapping","marathon","marble","march","marco","marcus","mardi","margaret","margin","maria","mariah","marie","marijuana","marilyn","marina","marine","mario","marion","maritime","marked","marker","markers","market","marketing","marketplace","markets","marking","marks","marriage","married","marriott","marshall","martha","martial","martin","marvel","maryland","mason","massachusetts","massage","massive","master","mastercard","masters","masturbating","masturbation","match","matched","matches","matching","material","materials","maternity","mathematical","mathematics","mating","matrix","matter","matters","matthew","mattress","mature","mauritius","maximize","maximum","maybe","mayor","mazda","mcdonald","meals","meaning","meaningful","means","meant","meanwhile","measure","measured","measurement","measurements","measures","measuring","mechanical","mechanics","mechanism","mechanisms","medal","media","median","medicaid","medical","medicare","medication","medications","medicine","medicines","medieval","meditation","mediterranean","medium","medline","meeting","meetings","meets","meetup","melbourne","melissa","member","members","membership","membrane","memorabilia","memorial","memories","memory","memphis","mental","mention","mentioned","mentor","menus","mercedes","merchandise","merchant","merchants","mercury","mercy","merely","merge","merger","merit","merry","message","messages","messaging","messenger","metabolism","metadata","metal","metallic","metallica","metals","meter","meters","method","methodology","methods","metres","metric","metro","metropolitan","mexican","mexico","meyer","miami","michael","michel","michelle","michigan","micro","microphone","microsoft","microwave","middle","midlands","midnight","midwest","might","mighty","migration","milan","mileage","miles","milfhunter","milfs","military","millennium","miller","million","millions","mills","milton","milwaukee","minds","mineral","minerals","mines","miniature","minimal","minimize","minimum","mining","minister","ministers","ministries","ministry","minneapolis","minnesota","minolta","minor","minority","minus","minute","minutes","miracle","mirror","mirrors","miscellaneous","missed","missile","missing","mission","missions","mississippi","missouri","mistake","mistakes","mistress","mitchell","mitsubishi","mixed","mixer","mixing","mixture","mobile","mobiles","mobility","model","modeling","modelling","models","modem","modems","moderate","moderator","moderators","modern","modes","modification","modifications","modified","modify","modular","module","modules","moisture","moldova","molecular","molecules","moment","moments","momentum","monaco","monday","monetary","money","mongolia","monica","monitor","monitored","monitoring","monitors","monkey","monroe","monster","montana","monte","montgomery","month","monthly","months","montreal","moore","moral","moreover","morgan","morning","morocco","morris","morrison","mortality","mortgage","mortgages","moscow","moses","mostly","motel","motels","mother","motherboard","mothers","motion","motivated","motivation","motor","motorcycle","motorcycles","motorola","motors","mount","mountain","mountains","mounted","mounting","mounts","mouse","mouth","moved","movement","movements","movers","moves","movie","movies","moving","mozambique","mozilla","mpegs","msgid","msgstr","multi","multimedia","multiple","mumbai","munich","municipal","municipality","murder","murphy","murray","muscle","muscles","museum","museums","music","musical","musician","musicians","muslim","muslims","mustang","mutual","myanmar","myers","myrtle","myself","mysimon","myspace","mysql","mysterious","mystery","nails","naked","named","namely","names","namespace","namibia","nancy","naples","narrative","narrow","nascar","nasdaq","nashville","nasty","nathan","nation","national","nationally","nations","nationwide","native","natural","naturally","naturals","nature","naughty","naval","navigate","navigation","navigator","nearby","nearest","nearly","nebraska","necessarily","necessary","necessity","necklace","needed","needle","needs","negative","negotiation","negotiations","neighbor","neighborhood","neighbors","neither","nelson","nepal","nerve","nervous","nested","netherlands","netscape","network","networking","networks","neural","neutral","nevada","never","nevertheless","newark","newbie","newcastle","newer","newest","newfoundland","newly","newport","newscom","newsletter","newsletters","newspaper","newspapers","newton","nextel","niagara","nicaragua","nicholas","nickel","nickname","nicole","niger","nigeria","night","nightlife","nightmare","nights","nikon","nintendo","nipple","nipples","nirvana","nissan","nitrogen","noble","nobody","nodes","noise","nokia","nominated","nomination","nominations","nonprofit","norfolk","normal","normally","norman","north","northeast","northern","northwest","norton","norway","norwegian","notebook","notebooks","noted","notes","nothing","notice","noticed","notices","notification","notifications","notified","notify","notion","notre","nottingham","novel","novels","novelty","november","nowhere","nuclear","nudist","nudity","number","numbers","numeric","numerical","numerous","nurse","nursery","nurses","nursing","nutrition","nutritional","nutten","nvidia","nylon","oakland","oasis","obesity","obituaries","object","objective","objectives","objects","obligation","obligations","observation","observations","observe","observed","observer","obtain","obtained","obtaining","obvious","obviously","occasion","occasional","occasionally","occasions","occupation","occupational","occupations","occupied","occur","occurred","occurrence","occurring","occurs","ocean","october","offense","offensive","offer","offered","offering","offerings","offers","office","officer","officers","offices","official","officially","officials","offline","offset","offshore","often","oklahoma","older","oldest","olive","oliver","olympic","olympics","olympus","omaha","omega","omissions","ongoing","onion","online","ontario","opened","opening","openings","opens","opera","operate","operated","operates","operating","operation","operational","operations","operator","operators","opinion","opinions","opponent","opponents","opportunities","opportunity","opposed","opposite","opposition","optical","optics","optimal","optimization","optimize","optimum","option","optional","options","oracle","orange","orbit","orchestra","order","ordered","ordering","orders","ordinance","ordinary","oregon","organ","organic","organisation","organisations","organised","organisms","organization","organizational","organizations","organize","organized","organizer","organizing","orgasm","oriental","orientation","oriented","origin","original","originally","origins","orlando","orleans","oscar","other","others","otherwise","ottawa","ought","ourselves","outcome","outcomes","outdoor","outdoors","outer","outlet","outline","outlined","outlook","output","outputs","outreach","outside","outsourcing","outstanding","overall","overcome","overhead","overnight","overseas","overview","owned","owner","owners","ownership","oxford","oxide","oxygen","ozone","pacific","package","packages","packaging","packard","packed","packet","packets","packing","packs","pages","painful","paint","paintball","painted","painting","paintings","pairs","pakistan","palace","palestine","palestinian","palmer","pamela","panama","panasonic","panel","panels","panic","panties","pants","pantyhose","paper","paperback","paperbacks","papers","papua","parade","paradise","paragraph","paragraphs","paraguay","parallel","parameter","parameters","parcel","parent","parental","parenting","parents","paris","parish","parker","parking","parks","parliament","parliamentary","partial","partially","participant","participants","participate","participated","participating","participation","particle","particles","particular","particularly","parties","partition","partly","partner","partners","partnership","partnerships","parts","party","passage","passed","passenger","passengers","passes","passing","passion","passive","passport","password","passwords","pasta","paste","pastor","patch","patches","patent","patents","pathology","paths","patient","patients","patio","patricia","patrick","patrol","pattern","patterns","pavilion","paxil","payable","payday","paying","payment","payments","paypal","payroll","peace","peaceful","pearl","pediatric","peeing","peers","penalties","penalty","pencil","pendant","pending","penetration","penguin","peninsula","penis","pennsylvania","penny","pension","pensions","pentium","people","peoples","pepper","perceived","percent","percentage","perception","perfect","perfectly","perform","performance","performances","performed","performer","performing","performs","perfume","perhaps","period","periodic","periodically","periods","peripheral","peripherals","permalink","permanent","permission","permissions","permit","permits","permitted","perry","persian","persistent","person","personal","personality","personalized","personally","personals","personnel","persons","perspective","perspectives","perth","peter","petersburg","peterson","petite","petition","petroleum","phantom","pharmaceutical","pharmaceuticals","pharmacies","pharmacology","pharmacy","phase","phases","phenomenon","phentermine","philadelphia","philip","philippines","philips","phillips","philosophy","phoenix","phone","phones","photo","photograph","photographer","photographers","photographic","photographs","photography","photos","photoshop","phpbb","phrase","phrases","physical","physically","physician","physicians","physics","physiology","piano","pichunter","picked","picking","picks","pickup","picnic","picture","pictures","piece","pieces","pierce","pierre","pillow","pills","pilot","pioneer","pipeline","pipes","pirates","pissing","pitch","pittsburgh","pixel","pixels","pizza","place","placed","placement","places","placing","plain","plains","plaintiff","plane","planes","planet","planets","planned","planner","planners","planning","plans","plant","plants","plasma","plastic","plastics","plate","plates","platform","platforms","platinum","playback","playboy","played","player","players","playing","playlist","plays","playstation","plaza","pleasant","please","pleased","pleasure","pledge","plenty","plots","plugin","plugins","plumbing","plymouth","pocket","pockets","podcast","podcasts","poems","poetry","point","pointed","pointer","pointing","points","pokemon","poker","poland","polar","police","policies","policy","polish","polished","political","politicians","politics","polls","pollution","polyester","polymer","polyphonic","pontiac","pools","popular","popularity","population","populations","porcelain","porno","porsche","portable","portal","porter","portfolio","portion","portions","portland","portrait","portraits","ports","portsmouth","portugal","portuguese","posing","position","positioning","positions","positive","possess","possession","possibilities","possibility","possible","possibly","postage","postal","postcard","postcards","posted","poster","posters","posting","postings","postposted","posts","potato","potatoes","potential","potentially","potter","pottery","poultry","pound","pounds","poverty","powder","powell","power","powered","powerful","powerpoint","powers","powerseller","practical","practice","practices","practitioner","practitioners","prague","prairie","praise","prayer","prayers","preceding","precious","precipitation","precise","precisely","precision","predict","predicted","prediction","predictions","prefer","preference","preferences","preferred","prefers","prefix","pregnancy","pregnant","preliminary","premier","premiere","premises","premium","prepaid","preparation","prepare","prepared","preparing","prerequisite","prescribed","prescription","presence","present","presentation","presentations","presented","presenting","presently","presents","preservation","preserve","president","presidential","press","pressed","pressing","pressure","preston","pretty","prevent","preventing","prevention","preview","previews","previous","previously","price","priced","prices","pricing","pride","priest","primarily","primary","prime","prince","princess","princeton","principal","principle","principles","print","printable","printed","printer","printers","printing","prints","prior","priorities","priority","prison","prisoner","prisoners","privacy","private","privilege","privileges","prize","prizes","probability","probably","probe","problem","problems","procedure","procedures","proceed","proceeding","proceedings","proceeds","process","processed","processes","processing","processor","processors","procurement","produce","produced","producer","producers","produces","producing","product","production","productions","productive","productivity","products","profession","professional","professionals","professor","profile","profiles","profit","profits","program","programme","programmer","programmers","programmes","programming","programs","progress","progressive","prohibited","project","projected","projection","projector","projectors","projects","prominent","promise","promised","promises","promising","promo","promote","promoted","promotes","promoting","promotion","promotional","promotions","prompt","promptly","proof","propecia","proper","properly","properties","property","prophet","proportion","proposal","proposals","propose","proposed","proposition","proprietary","prospect","prospective","prospects","prostate","prostores","protect","protected","protecting","protection","protective","protein","proteins","protest","protocol","protocols","prototype","proud","proudly","prove","proved","proven","provide","provided","providence","provider","providers","provides","providing","province","provinces","provincial","provision","provisions","proxy","prozac","psychiatry","psychological","psychology","public","publication","publications","publicity","publicly","publish","published","publisher","publishers","publishing","pubmed","puerto","pulled","pulling","pulse","pumps","punch","punishment","pupils","puppy","purchase","purchased","purchases","purchasing","purple","purpose","purposes","purse","pursuant","pursue","pursuit","pushed","pushing","pussy","putting","puzzle","puzzles","python","qatar","qualification","qualifications","qualified","qualify","qualifying","qualities","quality","quantitative","quantities","quantity","quantum","quarter","quarterly","quarters","quebec","queen","queens","queensland","queries","query","quest","question","questionnaire","questions","queue","quick","quickly","quiet","quilt","quite","quizzes","quotations","quote","quoted","quotes","rabbit","races","rachel","racial","racing","racks","radar","radiation","radical","radio","radios","radius","railroad","railway","rainbow","raise","raised","raises","raising","raleigh","rally","ralph","ranch","random","randy","range","rangers","ranges","ranging","ranked","ranking","rankings","ranks","rapid","rapidly","rapids","rarely","rated","rates","rather","rating","ratings","ratio","rational","ratios","raymond","reach","reached","reaches","reaching","reaction","reactions","reader","readers","readily","reading","readings","reads","ready","realistic","reality","realize","realized","really","realm","realtor","realtors","realty","reason","reasonable","reasonably","reasoning","reasons","rebate","rebates","rebecca","rebel","rebound","recall","receipt","receive","received","receiver","receivers","receives","receiving","recent","recently","reception","receptor","receptors","recipe","recipes","recipient","recipients","recognised","recognition","recognize","recognized","recommend","recommendation","recommendations","recommended","recommends","reconstruction","record","recorded","recorder","recorders","recording","recordings","records","recover","recovered","recovery","recreation","recreational","recruiting","recruitment","recycling","redeem","redhead","reduce","reduced","reduces","reducing","reduction","reductions","refer","reference","referenced","references","referral","referrals","referred","referring","refers","refinance","refine","refined","reflect","reflected","reflection","reflections","reflects","reform","reforms","refresh","refrigerator","refugees","refund","refurbished","refuse","refused","regard","regarded","regarding","regardless","regards","reggae","regime","region","regional","regions","register","registered","registrar","registration","registry","regression","regular","regularly","regulated","regulation","regulations","regulatory","rehab","rehabilitation","reject","rejected","relate","related","relates","relating","relation","relations","relationship","relationships","relative","relatively","relatives","relax","relaxation","relay","release","released","releases","relevance","relevant","reliability","reliable","reliance","relief","religion","religions","religious","reload","relocation","relying","remain","remainder","remained","remaining","remains","remark","remarkable","remarks","remedies","remedy","remember","remembered","remind","reminder","remix","remote","removable","removal","remove","removed","removing","renaissance","render","rendered","rendering","renew","renewable","renewal","rental","rentals","rentcom","repair","repairs","repeat","repeated","replace","replaced","replacement","replacing","replica","replication","replied","replies","reply","report","reported","reporter","reporters","reporting","reports","repository","represent","representation","representations","representative","representatives","represented","representing","represents","reprint","reprints","reproduce","reproduced","reproduction","reproductive","republic","republican","republicans","reputation","request","requested","requesting","requests","require","required","requirement","requirements","requires","requiring","rescue","research","researcher","researchers","reseller","reservation","reservations","reserve","reserved","reserves","reservoir","reset","residence","resident","residential","residents","resist","resistance","resistant","resolution","resolutions","resolve","resolved","resort","resorts","resource","resources","respect","respected","respective","respectively","respiratory","respond","responded","respondent","respondents","responding","response","responses","responsibilities","responsibility","responsible","restaurant","restaurants","restoration","restore","restored","restrict","restricted","restriction","restrictions","restructuring","result","resulted","resulting","results","resume","resumes","retail","retailer","retailers","retain","retained","retention","retired","retirement","retreat","retrieval","retrieve","retrieved","retro","return","returned","returning","returns","reunion","reuters","reveal","revealed","reveals","revelation","revenge","revenue","revenues","reverse","review","reviewed","reviewer","reviewing","reviews","revised","revision","revisions","revolution","revolutionary","reward","rewards","reynolds","rhode","rhythm","ribbon","richard","richards","richardson","richmond","rider","riders","rides","ridge","riding","right","rights","rings","ringtone","ringtones","rising","risks","river","rivers","riverside","roads","robert","roberts","robertson","robin","robinson","robot","robots","robust","rochester","rocket","rocks","rocky","roger","rogers","roland","roles","rolled","roller","rolling","rolls","roman","romance","romania","romantic","ronald","roommate","roommates","rooms","roots","roses","roster","rotary","rotation","rouge","rough","roughly","roulette","round","rounds","route","router","routers","routes","routine","routines","routing","rover","royal","royalty","rubber","rugby","ruled","rules","ruling","runner","running","runtime","rural","russell","russia","russian","rwanda","sacramento","sacred","sacrifice","saddam","safari","safely","safer","safety","sagem","sailing","saint","saints","salad","salaries","salary","salem","sales","sally","salmon","salon","salvador","salvation","samba","samoa","sample","samples","sampling","samsung","samuel","sandra","sandwich","sandy","santa","sanyo","sapphire","sarah","saskatchewan","satellite","satin","satisfaction","satisfactory","satisfied","satisfy","saturday","saturn","sauce","saudi","savage","savannah","saved","saver","saves","saving","savings","saying","sbjct","scale","scales","scanned","scanner","scanners","scanning","scary","scenario","scenarios","scene","scenes","scenic","schedule","scheduled","schedules","scheduling","schema","scheme","schemes","scholar","scholars","scholarship","scholarships","school","schools","science","sciences","scientific","scientist","scientists","scoop","scope","score","scored","scores","scoring","scotia","scotland","scott","scottish","scout","scratch","screen","screening","screens","screensaver","screensavers","screenshot","screenshots","screw","script","scripting","scripts","scroll","scuba","sculpture","seafood","sealed","search","searchcom","searched","searches","searching","season","seasonal","seasons","seating","seats","seattle","second","secondary","seconds","secret","secretariat","secretary","secrets","section","sections","sector","sectors","secure","secured","securely","securities","security","seeds","seeing","seeker","seekers","seeking","seeks","seemed","seems","segment","segments","select","selected","selecting","selection","selections","selective","seller","sellers","selling","sells","semester","semiconductor","seminar","seminars","senate","senator","senators","sender","sending","sends","senegal","senior","seniors","sense","sensitive","sensitivity","sensor","sensors","sentence","sentences","separate","separated","separately","separation","september","sequence","sequences","serbia","serial","series","serious","seriously","serum","serve","served","server","servers","serves","service","services","serving","session","sessions","setting","settings","settle","settled","settlement","setup","seven","seventh","several","severe","sewing","sexcam","sexual","sexuality","sexually","shade","shades","shadow","shadows","shaft","shake","shakespeare","shakira","shall","shame","shanghai","shannon","shape","shaped","shapes","share","shared","shareholders","shares","shareware","sharing","shark","sharon","sharp","shaved","sheep","sheer","sheet","sheets","sheffield","shelf","shell","shelter","shemale","shemales","shepherd","sheriff","sherman","shield","shift","shine","shipment","shipments","shipped","shipping","ships","shirt","shirts","shock","shoes","shoot","shooting","shopper","shoppercom","shoppers","shopping","shoppingcom","shops","shopzilla","shore","short","shortcuts","shorter","shortly","shorts","shots","should","shoulder","showcase","showed","shower","showers","showing","shown","shows","showtimes","shuttle","sides","siemens","sierra","sight","sigma","signal","signals","signature","signatures","signed","significance","significant","significantly","signing","signs","signup","silence","silent","silicon","silly","silver","similar","similarly","simon","simple","simplified","simply","simpson","simpsons","simulation","simulations","simultaneously","since","singapore","singer","singh","singing","single","singles","sister","sisters","sitemap","sites","sitting","situated","situation","situations","sixth","sized","sizes","skating","skiing","skill","skilled","skills","skins","skirt","skirts","skype","slave","sleep","sleeping","sleeps","sleeve","slide","slides","slideshow","slight","slightly","slope","slots","slovak","slovakia","slovenia","slowly","sluts","small","smaller","smart","smell","smile","smilies","smith","smithsonian","smoke","smoking","smooth","snake","snapshot","snowboard","soccer","social","societies","society","sociology","socket","socks","sodium","softball","software","solar","solaris","soldier","soldiers","solely","solid","solomon","solution","solutions","solve","solved","solving","somalia","somebody","somehow","someone","somerset","something","sometimes","somewhat","somewhere","songs","sonic","soonest","sophisticated","sorry","sorted","sorts","sought","souls","sound","sounds","soundtrack","source","sources","south","southampton","southeast","southern","southwest","soviet","space","spaces","spain","spanish","spank","spanking","sparc","spare","spatial","speak","speaker","speakers","speaking","speaks","spears","special","specialist","specialists","specialized","specializing","specially","specials","specialties","specialty","species","specific","specifically","specification","specifications","specifics","specified","specifies","specify","specs","spectacular","spectrum","speech","speeches","speed","speeds","spell","spelling","spencer","spend","spending","spent","sperm","sphere","spice","spider","spies","spine","spirit","spirits","spiritual","spirituality","split","spoke","spoken","spokesman","sponsor","sponsored","sponsors","sponsorship","sport","sporting","sports","spotlight","spots","spouse","spray","spread","spreading","spring","springer","springfield","springs","sprint","spyware","squad","square","squirt","squirting","stability","stable","stack","stadium","staff","staffing","stage","stages","stainless","stakeholders","stamp","stamps","stand","standard","standards","standing","standings","stands","stanford","stanley","starring","stars","starsmerchant","start","started","starter","starting","starts","startup","state","stated","statement","statements","states","statewide","static","stating","station","stationery","stations","statistical","statistics","stats","status","statute","statutes","statutory","stayed","staying","stays","steady","steal","steam","steel","steering","stephanie","stephen","steps","stereo","sterling","steve","steven","stevens","stewart","stick","sticker","stickers","sticks","sticky","still","stock","stockholm","stockings","stocks","stolen","stomach","stone","stones","stood","stopped","stopping","stops","storage","store","stored","stores","stories","storm","story","straight","strain","strand","strange","stranger","strap","strategic","strategies","strategy","stream","streaming","streams","street","streets","strength","strengthen","strengthening","strengths","stress","stretch","strict","strictly","strike","strikes","striking","string","strings","strip","stripes","strips","stroke","strong","stronger","strongly","struck","struct","structural","structure","structured","structures","struggle","stuart","stuck","student","students","studied","studies","studio","studios","study","studying","stuff","stuffed","stunning","stupid","style","styles","stylish","stylus","subaru","subcommittee","subdivision","subject","subjects","sublime","sublimedirectory","submission","submissions","submit","submitted","submitting","subscribe","subscriber","subscribers","subscription","subscriptions","subsection","subsequent","subsequently","subsidiaries","subsidiary","substance","substances","substantial","substantially","substitute","subtle","suburban","succeed","success","successful","successfully","sucking","sucks","sudan","sudden","suddenly","suffer","suffered","suffering","sufficient","sufficiently","sugar","suggest","suggested","suggesting","suggestion","suggestions","suggests","suicide","suitable","suite","suited","suites","suits","sullivan","summaries","summary","summer","summit","sunday","sunglasses","sunny","sunrise","sunset","sunshine","super","superb","superintendent","superior","supervision","supervisor","supervisors","supplement","supplemental","supplements","supplied","supplier","suppliers","supplies","supply","support","supported","supporters","supporting","supports","suppose","supposed","supreme","surely","surface","surfaces","surfing","surge","surgeon","surgeons","surgery","surgical","surname","surplus","surprise","surprised","surprising","surrey","surround","surrounded","surrounding","surveillance","survey","surveys","survival","survive","survivor","survivors","susan","suspect","suspected","suspended","suspension","sussex","sustainability","sustainable","sustained","suzuki","sweden","swedish","sweet","swift","swimming","swing","swingers","swiss","switch","switched","switches","switching","switzerland","sword","sydney","symantec","symbol","symbols","sympathy","symphony","symposium","symptoms","syndicate","syndication","syndrome","synopsis","syntax","synthesis","synthetic","syracuse","syria","system","systematic","systems","table","tables","tablet","tablets","tackle","tactics","tagged","tahoe","taiwan","taken","takes","taking","talent","talented","tales","talked","talking","talks","tamil","tampa","tanks","tanzania","tapes","target","targeted","targets","tariff","tasks","taste","tattoo","taught","taxation","taxes","taylor","teach","teacher","teachers","teaches","teaching","teams","tears","technical","technician","technique","techniques","techno","technological","technologies","technology","techrepublic","teddy","teenage","teens","teeth","telecharger","telecom","telecommunications","telephone","telephony","telescope","television","televisions","telling","tells","temperature","temperatures","template","templates","temple","temporal","temporarily","temporary","tenant","tender","tennessee","tennis","tension","terminal","terminals","termination","terminology","terms","terrace","terrain","terrible","territories","territory","terror","terrorism","terrorist","terrorists","terry","testament","tested","testimonials","testimony","testing","tests","texas","textbook","textbooks","textile","textiles","texts","texture","thailand","thank","thanks","thanksgiving","thats","theater","theaters","theatre","theft","thehun","their","theme","themes","themselves","theology","theorem","theoretical","theories","theory","therapeutic","therapist","therapy","there","thereafter","thereby","therefore","thereof","thermal","thesaurus","these","thesis","thick","thickness","thing","things","think","thinking","thinkpad","thinks","third","thirty","thomas","thompson","thomson","thong","thongs","thorough","thoroughly","those","though","thought","thoughts","thousand","thousands","thread","threaded","threads","threat","threatened","threatening","threats","three","threesome","threshold","thriller","throat","through","throughout","throw","throwing","thrown","throws","thumb","thumbnail","thumbnails","thumbs","thumbzilla","thunder","thursday","ticket","tickets","tiffany","tiger","tigers","tight","tiles","timber","timeline","timely","timer","times","timing","timothy","tions","tired","tires","tissue","titanium","titans","title","titled","titles","titten","tobacco","tobago","today","toddler","together","toilet","token","tokyo","tolerance","tomato","tomatoes","tommy","tomorrow","toner","tones","tongue","tonight","toolbar","toolbox","toolkit","tools","tooth","topic","topics","topless","toronto","torture","toshiba","total","totally","totals","touch","touched","tough","touring","tourism","tourist","tournament","tournaments","tours","toward","towards","tower","towers","towns","township","toxic","toyota","trace","track","trackback","trackbacks","tracked","tracker","tracking","tracks","tract","tractor","tracy","trade","trademark","trademarks","trader","trades","trading","tradition","traditional","traditions","traffic","tragedy","trail","trailer","trailers","trails","train","trained","trainer","trainers","training","trains","tramadol","trance","tranny","trans","transaction","transactions","transcript","transcription","transcripts","transexual","transexuales","transfer","transferred","transfers","transform","transformation","transit","transition","translate","translated","translation","translations","translator","transmission","transmit","transmitted","transparency","transparent","transport","transportation","transsexual","trash","trauma","travel","traveler","travelers","traveling","traveller","travelling","travels","travesti","travis","treasure","treasurer","treasures","treasury","treat","treated","treating","treatment","treatments","treaty","trees","trembl","tremendous","trend","trends","trial","trials","triangle","tribal","tribe","tribes","tribunal","tribune","tribute","trick","tricks","tried","tries","trigger","trinidad","trinity","tripadvisor","triple","trips","triumph","trivia","troops","tropical","trouble","troubleshooting","trout","truck","trucks","truly","trunk","trust","trusted","trustee","trustees","trusts","truth","trying","tsunami","tubes","tucson","tuesday","tuition","tulsa","tumor","tuner","tunes","tuning","tunisia","tunnel","turbo","turkey","turkish","turned","turner","turning","turns","turtle","tutorial","tutorials","tvcom","twelve","twenty","twice","twiki","twinks","twins","twist","twisted","tyler","types","typical","typically","typing","uganda","ukraine","ultimate","ultimately","ultra","ultram","unable","unauthorized","unavailable","uncertainty","uncle","undefined","under","undergraduate","underground","underlying","understand","understanding","understood","undertake","undertaken","underwear","unemployment","unexpected","unfortunately","unified","uniform","union","unions","uniprotkb","unique","united","units","unity","universal","universe","universities","university","unknown","unless","unlike","unlikely","unlimited","unlock","unnecessary","unsigned","unsubscribe","until","untitled","unusual","unwrap","upcoming","update","updated","updates","updating","upgrade","upgrades","upgrading","upload","uploaded","upper","upset","upskirt","upskirts","urban","urgent","uruguay","usage","useful","username","users","using","usual","usually","utilities","utility","utilization","utilize","utils","uzbekistan","vacancies","vacation","vacations","vaccine","vacuum","vagina","valentine","valid","validation","validity","valium","valley","valuable","valuation","value","valued","values","valve","valves","vampire","vancouver","vanilla","variable","variables","variance","variation","variations","varied","varies","variety","various","varying","vatican","vault","vbulletin","vector","vegas","vegetable","vegetables","vegetarian","vegetation","vehicle","vehicles","velocity","velvet","vendor","vendors","venezuela","venice","venture","ventures","venue","venues","verbal","verde","verification","verified","verify","verizon","vermont","vernon","verse","version","versions","versus","vertex","vertical","verzeichnis","vessel","vessels","veteran","veterans","veterinary","viagra","vibrator","vibrators","victim","victims","victor","victoria","victorian","victory","video","videos","vienna","vietnam","vietnamese","viewed","viewer","viewers","viewing","viewpicture","views","viking","villa","village","villages","villas","vincent","vintage","vinyl","violation","violations","violence","violent","violin","viral","virgin","virginia","virtual","virtually","virtue","virus","viruses","visibility","visible","vision","visit","visited","visiting","visitor","visitors","visits","vista","visual","vital","vitamin","vitamins","vocabulary","vocal","vocals","vocational","voice","voices","volkswagen","volleyball","voltage","volume","volumes","voluntary","volunteer","volunteers","volvo","voted","voters","votes","voting","voyeur","voyeurweb","voyuer","vsnet","vulnerability","vulnerable","wages","wagner","wagon","waiting","waiver","wales","walked","walker","walking","walks","wallace","wallet","wallpaper","wallpapers","walls","walnut","walter","wanna","wanted","wanting","wants","warcraft","warehouse","warming","warned","warner","warning","warnings","warrant","warranties","warranty","warren","warrior","warriors","washer","washing","washington","waste","watch","watched","watches","watching","water","waterproof","waters","watershed","watson","watts","waves","wayne","wealth","weapon","weapons","wearing","weather","webcam","webcams","webcast","weblog","weblogs","webmaster","webmasters","webpage","webshots","website","websites","webster","wedding","weddings","wednesday","weekend","weekends","weekly","weeks","weight","weighted","weights","weird","welcome","welding","welfare","wellington","wellness","wells","welsh","wendy","wesley","western","westminster","whale","whatever","whats","wheat","wheel","wheels","whenever","where","whereas","wherever","whether","which","while","whilst","white","whole","wholesale","whore","whose","wichita","wicked","widely","wider","widescreen","widespread","width","wikipedia","wilderness","wildlife","wiley","william","williams","willing","willow","wilson","window","windows","winds","windsor","wines","wings","winner","winners","winning","winston","winter","wired","wireless","wires","wiring","wisconsin","wisdom","wishes","wishlist","witch","withdrawal","within","without","witness","witnesses","wives","wizard","woman","women","womens","wonder","wonderful","wondering","wooden","woods","worcester","wordpress","words","worked","worker","workers","workflow","workforce","working","workout","workplace","works","workshop","workshops","workstation","world","worldcat","worlds","worldsex","worldwide","worried","worry","worse","worship","worst","worth","worthy","would","wound","wrapped","wrapping","wrestling","wright","wrist","write","writer","writers","writes","writing","writings","written","wrong","wrote","wyoming","xanax","xerox","xhtml","yacht","yahoo","yamaha","yards","yearly","years","yeast","yellow","yemen","yesterday","yield","yields","yorkshire","young","younger","yours","yourself","youth","yugoslavia","yukon","zambia","zdnet","zealand","zimbabwe","zoloft","zones","zoning","zoophilia"]');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1G5n2","kuM8f"], "kuM8f", "parcelRequire7d3c")

//# sourceMappingURL=index.6b815632.js.map
