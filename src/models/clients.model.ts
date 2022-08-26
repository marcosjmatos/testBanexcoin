import clientsData from "./clients.json";
import { v4 as uuidv4 } from "uuid";
import { ClientEntry, NewClientEntry } from "../types";

const clientes: Array<ClientEntry> = clientsData as Array<ClientEntry>;

function getAllClients() {
  return clientes;
}

function getClientById(uuid: string) {
  const client = clientes.find((x) => x.id === uuid);
  if (!client) {
    return { err: "Cliente no existe" };
  }
  return client;
}

function addClient(newClientEntry: NewClientEntry) {
  const newClient = {
    id: uuidv4(),
    created: new Date().toString(),
    updated: new Date().toString(),
    ...newClientEntry,
  };
  clientsData.push(newClient);
  return newClient;
}

function updateClient(id: string, body: NewClientEntry) {
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

export { getAllClients, getClientById, addClient, updateClient };
