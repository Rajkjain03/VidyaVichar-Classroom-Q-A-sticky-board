import express from "express";
import {
  getQuestions,
  createQuestion,
  updateQuestionStatus,
  clearQuestions,
} from "../controllers/questionController.js";

const router = express.Router();

router.route("/").get(getQuestions).post(createQuestion);
router.route("/clear").delete(clearQuestions);
router.route("/:id").patch(updateQuestionStatus);

export default router;
