import { Request, Response } from "express";
import { SubCategoryServices } from "./subcategory.services";

const CreateController = async (req: Request, res: Response) => {
  try {
    const result = await SubCategoryServices.create(req.body);
    res.send({
      success: true,
      message: " Create  Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const SingleController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await SubCategoryServices.GetSingle(id);
    res.send({
      success: true,
      message: " Get Single Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const AllController = async (req: Request, res: Response) => {
  try {
    const result = await SubCategoryServices.All();
    res.send({
      success: true,
      message: "Get All  Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const updateController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await SubCategoryServices.update(id, data);
    res.send({
      success: true,
      message: " updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await SubCategoryServices.deletedata(id);
    res.send({
      success: true,
      message: " deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const SubCategoryController = {
  CreateController,
  SingleController,
  AllController,
  updateController,
  deleteController,
};
