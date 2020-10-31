import express from 'express';
import LeadController from './controllers/LeadController';

const routes = express.Router();

routes.post("/new", LeadController.store);
routes.get("/test", LeadController.index);

export default routes;