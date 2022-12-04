"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_validation_1 = require("../validation/product.validation");
const logger_1 = require("../utils/logger");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', (req, res, next) => {
    logger_1.logger.info('Succes Get Product Data');
    return res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] });
});
exports.productRouter.post('/', (req, res, next) => {
    const { error, value } = (0, product_validation_1.createProductValidation)(req.body);
    if (error) {
        logger_1.logger.error('ERR: product - create = ', error.details[0].message);
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
    }
    logger_1.logger.info('Succes Post New Product');
    return res.status(200).send({ status: true, statusCode: 200, message: 'Add Product Success', data: value });
});
//# sourceMappingURL=product.route.js.map