"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const header_routes_1 = require("./modules/header/header.routes");
const catagory_routes_1 = require("./modules/header/catagory/catagory.routes");
const sobcategory_routes_1 = require("./modules/header/subcategory/sobcategory.routes");
const category_blogs_1 = require("./modules/header/catagory_blogs/category_blogs");
const category_faq_routes_1 = require("./modules/category-Faq/category_faq.routes");
const blogs_routes_1 = require("./modules/blogs/blogs.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", header_routes_1.HerderRoutes);
app.use("/api/v1", catagory_routes_1.CategoryRouters);
app.use("/api/v1", sobcategory_routes_1.SubCategoryRouters);
app.use("/api/v1", category_blogs_1.CategoryBlogsRouters);
app.use("/api/v1", category_faq_routes_1.CategoryFAQRouters);
app.use("/api/v1", blogs_routes_1.BlogsRouters);
exports.default = app;
