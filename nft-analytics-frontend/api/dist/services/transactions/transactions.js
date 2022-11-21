var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var transactions_exports = {};
__export(transactions_exports, {
  transactionsForApp: () => transactionsForApp
});
module.exports = __toCommonJS(transactions_exports);
var import_for_each = __toESM(require("@babel/runtime-corejs3/core-js/instance/for-each"));
var import_slice = __toESM(require("@babel/runtime-corejs3/core-js/instance/slice"));
var import_keys = __toESM(require("@babel/runtime-corejs3/core-js/object/keys"));
var import_reverse = __toESM(require("@babel/runtime-corejs3/core-js/instance/reverse"));
var import_axios = __toESM(require("axios"));
const transactionsForApp = async ({
  appName
}) => {
  var _a, _b, _c;
  var _context3;
  const res = await import_axios.default.get(`https://backend-mainnet-1713.onrender.com/trpc/transaction.listByAccountId?batch=1&input=%7B%220%22%3A%7B%22accountId%22%3A%22${appName}%22%2C%22limit%22%3A9999%2C%22cursor%22%3A%7B%22timestamp%22%3A%221667076711696785617%22%2C%22indexInChunk%22%3A3%7D%7D%7D`);
  const price = [];
  const tempTransactions = [];
  const transactions = [];
  const items = ((_c = (_b = (_a = res == null ? void 0 : res.data[0]) == null ? void 0 : _a.result) == null ? void 0 : _b.data) == null ? void 0 : _c.items) || [];
  (0, import_for_each.default)(items).call(items, (item) => {
    if ((item == null ? void 0 : item.actions[0].kind) === "transfer") {
      var _context, _context2;
      price.push({
        value: ((item == null ? void 0 : item.actions[0].args.deposit) / 1e24).toFixed(2),
        timestamp: (0, import_slice.default)(_context = new Date(item.blockTimestamp).toISOString()).call(_context, 0, 10)
      });
      tempTransactions.push({
        value: ((item == null ? void 0 : item.actions[0].args.deposit) / 1e24).toFixed(2),
        timestamp: (0, import_slice.default)(_context2 = new Date(item.blockTimestamp).toISOString()).call(_context2, 0, 10)
      });
    }
  });
  const transactionsObject = {};
  (0, import_for_each.default)(tempTransactions).call(tempTransactions, (item) => {
    transactionsObject[item.timestamp] = transactionsObject[item.timestamp] ? transactionsObject[item.timestamp] + 1 : 1;
  });
  (0, import_for_each.default)(_context3 = (0, import_keys.default)(transactionsObject)).call(_context3, (key) => {
    transactions.push({
      value: transactionsObject[key],
      timestamp: key
    });
  });
  return {
    price: (0, import_reverse.default)(price).call(price),
    transactions: (0, import_reverse.default)(transactions).call(transactions)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  transactionsForApp
});
//# sourceMappingURL=transactions.js.map
