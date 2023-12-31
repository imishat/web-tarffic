import express, { Application } from "express";
import cors from "cors";
import { HerderRoutes } from "./modules/header/header.routes";
import { CategoryRouters } from "./modules/header/catagory/catagory.routes";
import { SubCategoryRouters } from "./modules/header/subcategory/sobcategory.routes";
import { CategoryBlogsRouters } from "./modules/header/catagory_blogs/category_blogs";
import { CategoryFAQRouters } from "./modules/category-Faq/category_faq.routes";
import { BlogsRouters } from "./modules/blogs/blogs.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", HerderRoutes);
app.use("/api/v1", CategoryRouters);
app.use("/api/v1", SubCategoryRouters);
app.use("/api/v1", CategoryBlogsRouters);
app.use("/api/v1", CategoryFAQRouters);
app.use("/api/v1", BlogsRouters);
export default app;
