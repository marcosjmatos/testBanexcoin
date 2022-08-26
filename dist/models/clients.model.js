"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.addClient = exports.getClientById = exports.getAllClients = void 0;
const clients_json_1 = __importDefault(require("./clients.json"));
const uuid_1 = require("uuid");
const clientes = clients_json_1.default;
function getAllClients() {
    return clientes;
}
exports.getAllClients = getAllClients;
function getClientById(uuid) {
    const client = clientes.find((x) => x.id === uuid);
    if (!client) {
        return { err: "Cliente no existe" };
    }
    return client;
}
exports.getClientById = getClientById;
function addClient(newClientEntry) {
    const newClient = Object.assign({ id: (0, uuid_1.v4)(), created: new Date().toString(), updated: new Date().toString() }, newClientEntry);
    clients_json_1.default.push(newClient);
    return newClient;
}
exports.addClient = addClient;
function updateClient(id, body) {
    for (const i of clientes) {
        if (i.id === id) {
            {
                (i.updated = new Date().toString()),
                    (i.status = body.status),
                    (i.fname = body.fname),
                    (i.lname = body.lname),
                    (i.birthdate = body.birthdate),
                    (i.address = body.address);
            }
        }
        break;
    }
}
exports.updateClient = updateClient;
