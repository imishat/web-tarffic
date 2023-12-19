import { Request, Response } from "express";
import { CategoryServices } from "./catagory.services";

const CategoryCreateController = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.CreateCatagory(req.body);
    res.send({
      success: true,
      message: " Create Category Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const singleCategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await CategoryServices.GetSingleCatagory(id);
    res.send({
      success: true,
      message: " Get Category Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const AllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.AllCategory();
    res.send({
      success: true,
      message: " All Category Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const updateCategoryController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await CategoryServices.updateCategory(id, data);
    res.send({
      success: true,
      message: " updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteCategoryController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await CategoryServices.deleteCategory(id);
    res.send({
      success: true,
      message: " deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const CategoryController = {
  CategoryCreateController,
  singleCategory,
  AllCategory,
  updateCategoryController,
  deleteCategoryController,
};
