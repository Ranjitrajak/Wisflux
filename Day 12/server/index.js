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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ioredis_1 = __importDefault(require("ioredis"));
const app = (0, express_1.default)();
const PORT = 9000;
const client = new ioredis_1.default({
    host: 'redis-17091.c212.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 17091,
    password: 'T09yUJjxKBfNehd66pnMDXSZEISjgsx1'
});
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let visit = yield client.get("visits");
   
    if (visit) {
        let numVisit = +visit;
        res.send(visit);
        numVisit++;
        yield client.set('visits', numVisit);
    }
    else {
        yield client.set("visits", 1);
        res.send("0");
    }
}));
