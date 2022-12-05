"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProduct = void 0;
const product_validation_1 = require("../validations/product.validation");
const logger_1 = require("../utils/logger");
const product_service_1 = require("../sevices/product.service");
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.getProductFromDB)();
    const { params: { name } } = req;
    if (name) {
        const filterProduct = products.filter((product) => {
            if (product.name === name) {
                return product;
            }
        });
        if (filterProduct.length < 1) {
            logger_1.logger.info('Data Not Found');
            return res.status(404).send({ status: false, statusCode: 404, data: {} });
        }
        logger_1.logger.info('Succes Get Product Data');
        return res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] });
    }
    logger_1.logger.info('Succes Get Product Data');
    return res.status(200).send({ status: true, statusCode: 200, data: products });
});
exports.getProduct = getProduct;
const createProduct = (req, res, next) => {
    const { error, value } = (0, product_validation_1.createProductValidation)(req.body);
    if (error) {
        logger_1.logger.error('ERR: product - create = ', error.details[0].message);
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
    }
    logger_1.logger.info('Succes Post New Product');
    return res.status(200).send({ status: true, statusCode: 200, message: 'Add Product Success', data: value });
};
exports.createProduct = createProduct;
//# sourceMappingURL=product.controller.js.map