import { Request, Response } from "express";
import { headerService } from "./header.service";

const headerCreateController = async (req: Request, res: Response) => {
  try {
    const result = await headerService.createHeader(req.body);
    res.send({
      success: true,
      message: " Create Header Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getAllHeaderController = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await headerService.getAllHeader(options);
    res.send({
      success: true,
      message: " Get Header Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updateHeaderController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await headerService.updateHeader(id, data);
    res.send({
      success: true,
      message: " updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteHeaderController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await headerService.deleteHeader(id);
    res.send({
      success: true,
      message: " deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
export const headerController = {
  headerCreateController,
  getAllHeaderController,
  updateHeaderController,
  deleteHeaderController,
};
