import { Router } from 'express';
import { OrgaoController } from '@src/controllers/OrgaoController';

const orgaoRouter = Router();
const orgaoController = new OrgaoController();

orgaoRouter.get('/api/v1/orgao', orgaoController.FindAllOrgao);
orgaoRouter.get('/api/v1/orgao/:id', orgaoController.FindOrgaoById);
orgaoRouter.post('/api/v1/orgao', orgaoController.CreateOrgao);
orgaoRouter.put('/api/v1/orgao/:id', orgaoController.UpdateOrgao);
orgaoRouter.delete('/api/v1/orgao/:id', orgaoController.DeleteOrgao);

export default orgaoRouter;