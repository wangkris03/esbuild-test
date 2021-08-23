var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// lib/index.ts
__export(exports, {
  genId: () => genId,
  get: () => get
});

// node_modules/nanoid/index.js
var import_crypto = __toModule(require("crypto"));

// node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";

// node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 32;
var pool;
var poolOffset;
var random = (bytes) => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    import_crypto.default.randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    import_crypto.default.randomFillSync(pool);
    poolOffset = 0;
  }
  let res = pool.subarray(poolOffset, poolOffset + bytes);
  poolOffset += bytes;
  return res;
};
var nanoid = (size = 21) => {
  let bytes = random(size);
  let id = "";
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id;
};

// lib/fetch.ts
var import_node_fetch = __toModule(require("node-fetch"));
global.fetch = import_node_fetch.default;
var getRequest = () => {
  return fetch("/url");
};

// lib/index.ts
var genId = () => {
  const id = nanoid(10);
  console.log(`Gen id : ${id}`);
  return id;
};
var get = () => {
  getRequest();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  genId,
  get
});
//# sourceMappingURL=index.js.map
