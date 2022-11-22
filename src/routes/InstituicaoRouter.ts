/**
 * @author Alysson Araújo
 * @createdDate 20/10/2022
 * @updatedDate 20/10/2022
 * @note
 * Revisar os códigos de status se estão certos de acordo com a proposta
 * do endpoint em questão!
 */

import { Router } from "express";
import {
  InstituicaoInterface, InstituicaoOrgaoCreate,
  
} from "../interfaces/InstituicaoInterface";

import { InstituicaoController } from "../controllers/InstituicaoController";
const instituicaoRouter = Router();

instituicaoRouter.post("/api/v1/instituicao", async (req, res) => {
  try {
    const dataInstituicao: InstituicaoInterface = req.body;
    const instituicaoController = new InstituicaoController();
    const instituicaoCreated:InstituicaoInterface = await instituicaoController.CreateInstituicao(dataInstituicao);
    return res.status(201).send("Nova instituição cadastrada com sucesso!");
  } catch (error) {
    return res.status(400).send("Não foi possível realizar o cadastro da instituição!");
  }
});

instituicaoRouter.get("/api/v1/instituicao", async (req, res) => {
    try {
      const instituicaoController = new InstituicaoController();
      const instituicaoList:InstituicaoInterface[] = await instituicaoController.FindAllInstituicoes();
      return res.status(200).json(instituicaoList);
    } catch (error) {
      return res.status(404).send("Não foi possível realizar a listagem das instituições!");
    }
});


instituicaoRouter.get("/api/v1/instituicao/:cnpj", async (req, res) => {
    try {
      const cnpjInstituicao:string = req.params.cnpj 
      const instituicaoController = new InstituicaoController();
      const instituicao = await instituicaoController.FindInstituicaoByCnpj(cnpjInstituicao);
      return res.status(201).json(instituicao);
    } catch (error) {
      return res.status(404).send("Instituição não encontrada!");
    }
});

instituicaoRouter.put("/api/v1/instituicao/", async (req, res) => {
  try {
    const data:InstituicaoInterface = req.body
    const instituicaoController = new InstituicaoController();
    const instituicao = await instituicaoController.UpdateInstituicao(data);
    return res.status(201).json(instituicao);
  } catch (error) {
    return res.status(404).send("Instituição não encontrada!");
  }
});

instituicaoRouter.delete("/api/v1/instituicao/:cnpj", async (req, res) => {
  try {
    const cnpjInstituicao:string = req.params.cnpj 
    const instituicaoController = new InstituicaoController();
    const instituicao = await instituicaoController.DeleteInstituicaoByCnpj(cnpjInstituicao);
    return res.status(202).send("Exclusão feita com sucesso");
  } catch (error) {
    return res.status(404).send("Instituição não encontrada!");
  }
});

instituicaoRouter.post("/api/v1/instituicao_orgao", async (req, res) => {
  try {
    const datas: InstituicaoOrgaoCreate = req.body;
    const instituicaoController = new InstituicaoController();
    await instituicaoController.LinkInstituicaoToOrgaoController(datas);
    return res.status(201).send("Nova instituição cadastrada com sucesso!");
  } catch (error) {
    return res.status(400).send("Não foi possível realizar o cadastro da instituição!");
  }
});


  export default instituicaoRouter;
