"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("../config/environment"));
const logger_1 = require("./logger");
mongoose_1.default
    .connect(`${environment_1.default.db}`)
    .then(() => logger_1.logger.info('Connected to MongoDB'))
    .catch((error) => {
    logger_1.logger.info(`Could not connect to DB. DB URI: ${process.env.DB}`);
    logger_1.logger.error(error);
    process.exit(1);
});
//# sourceMappingURL=connectDB.js.map