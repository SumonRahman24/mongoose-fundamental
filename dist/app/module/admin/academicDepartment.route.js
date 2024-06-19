"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.post("/create-academic-department", (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidations.createAcademicDepartmentValidationSchema), admin_controller_1.AcademicDepartmentControllers.createAcademicDepartment);
router.get("/", admin_controller_1.AcademicDepartmentControllers.getAllAcademicDepartment);
router.get("/:departmentId", admin_controller_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
router.patch("/:departmentId", (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidations.UpdateAcademicDepartmentValidationSchema), admin_controller_1.AcademicDepartmentControllers.updateSingleAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
