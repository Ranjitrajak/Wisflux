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
exports.deleteUser = exports.updateUser = exports.findUser = exports.getUsers = exports.createUser = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        "name": req.body.name,
        "age": req.body.age,
        "email": req.body.email,
        "gender": req.body.gender
    };
    yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
        const Contents = JSON.parse(data);
        Contents.push(newUser);
        node_fs_1.default.writeFile("data.json", JSON.stringify(Contents), (err) => {
            if (err) {
                res.send('error found');
            }
            else {
                res.send('user successfully created');
            }
        });
    });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fs_1.default.readFile("data.json", "utf-8", (err, data) => {
        const Content = JSON.parse(data);
        res.json(Content);
    });
});
exports.getUsers = getUsers;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
        const Contents = JSON.parse(data);
        const item = Contents.find((item) => item.email === req.query.email);
        if (item) {
            res.json(item);
        }
        else {
            res.send("user not found");
        }
    });
});
exports.findUser = findUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
        const Contents = JSON.parse(data);
        const item = Contents.find((item) => item.email === req.params.email);
        if (item) {
            item.email = req.body.email;
            node_fs_1.default.writeFile("data.json", JSON.stringify(Contents), (err) => {
                if (!err) {
                    res.json(item);
                }
            });
        }
        else {
            res.send("user not found");
        }
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
        const Contents = JSON.parse(data);
        const newContents = Contents.filter((item) => item.email !== req.params.email);
        node_fs_1.default.writeFile('data.json', JSON.stringify(newContents), (err) => {
            if (!err) {
                res.send("user deleted");
            }
            else {
                res.send("error");
            }
        });
    });
});
exports.deleteUser = deleteUser;
