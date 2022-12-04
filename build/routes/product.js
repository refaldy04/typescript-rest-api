"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', (req, res, next) => res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] }));
//# sourceMappingURL=product.js.map