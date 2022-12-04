"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.use('/health', (req, res, next) => res.status(200).send({ status: 200, data: 'hello world' }));
app.listen(port, () => console.log(`Server is Listening on Port ${port} :)`));
//# sourceMappingURL=index.js.map