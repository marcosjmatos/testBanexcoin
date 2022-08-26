"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientsModel = __importStar(require("../models/clients.model"));
const router = express_1.default.Router();
router.get("/api/v1/clientes", (_req, res) => {
    res.send(clientsModel.getAllClients());
});
router.get("/api/v1/clientes/:id", (req, res) => {
    res.send(clientsModel.getClientById(req.params.id));
});
router.post("/api/v1/clientes/registro", (req, res) => {
    try {
        const { status, fname, lname, address, birthdate } = req.body;
        const newClient = clientsModel.addClient({
            status,
            fname,
            lname,
            address,
            birthdate
        });
        res.status(201).json(newClient);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).send(err.message);
        }
        else {
            console.log('Error inesperado', err);
        }
    }
});
router.put("/api/v1/clientes/:id", (req, res) => {
    const updatedClient = clientsModel.updateClient(req.params.id, req.body);
    res.status(204).send(updatedClient);
});
exports.default = router;
