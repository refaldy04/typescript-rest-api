"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const health_1 = require("./health");
const product_1 = require("./product");
const _routes = [
    ['/health', health_1.healthRouter],
    ['/product', product_1.productRouter]
];
const routes = (app) => _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
});
exports.routes = routes;
//# sourceMappingURL=index.js.map