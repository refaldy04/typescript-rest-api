"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const logger_1 = require("./utils/logger");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// connect DB
require("./utils/connectDB");
const app = (0, express_1.default)();
const port = 4000;
// parse body request
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// cors access handler
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
(0, routes_1.routes)(app);
app.listen(port, () => logger_1.logger.info(`Server is Listening on Port ${port} :)`));
//# sourceMappingURL=index.js.map