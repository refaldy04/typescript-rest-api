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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductFromDB = void 0;
const logger_1 = require("../utils/logger");
const product_model_1 = __importDefault(require("../models/product.model"));
const getProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default
        .find()
        .then((data) => data)
        .catch((err) => {
        logger_1.logger.info('Cannot get data from db');
        logger_1.logger.error(err);
    });
});
exports.getProductFromDB = getProductFromDB;
//# sourceMappingURL=product.service.js.map