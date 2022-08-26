import express from "express";
import * as clientsModel from '../models/clients.model'


const router = express.Router();

router.get("/api/v1/clientes", (_req, res) => {
  res.send(clientsModel.getAllClients());
});

router.get("/api/v1/clientes/:id", (req, res) => {
  res.send(clientsModel.getClientById(req.params.id));
});
router.post("/api/v1/clientes/registro", (req, res) => {
  try {
    
    const {status,fname,lname,address,birthdate} = req.body
    const newClient = clientsModel.addClient({
      status,
      fname,
      lname,
      address,
      birthdate}
    )
    res.status(201).json(newClient)
  } catch (err) {

    if (err instanceof Error) {
      res.status(400).send(err.message)
      
    } else {
      console.log('Error inesperado',err);
      
    }

    
  }
});

router.put("/api/v1/clientes/:id", (req, res) => {

  const updatedClient = clientsModel.updateClient(req.params.id,req.body)

  res.status(204).send(updatedClient)



});

export default router