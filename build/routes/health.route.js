"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = require("express");
const logger_1 = require("../utils/logger");
exports.healthRouter = (0, express_1.Router)();
exports.healthRouter.get('/', (req, res, next) => {
    logger_1.logger.info('Health Check Success');
    res.status(200).send({ status: 200, data: 'hello world' });
});
//# sourceMappingURL=health.route.js.map