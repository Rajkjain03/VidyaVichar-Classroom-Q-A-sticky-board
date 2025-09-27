import Question from "../models/questionModel.js";

export const getQuestions = async (req, res) => {
  const filter = req.query.status ? { status: req.query.status } : {};
  const questions = await Question.find(filter).sort({ createdAt: "desc" });
  res.json(questions);
};

export const createQuestion = async (req, res) => {
  const { text, author } = req.body;
  if (!text || text.trim() === "") {
    return res.status(400).json({ message: "Question text cannot be empty." });
  }

  const existingQuestion = await Question.findOne({ text });
  if (existingQuestion) {
    return res
      .status(400)
      .json({ message: "This question has already been asked." });
  }

  const question = new Question({ text, author });
  const createdQuestion = await question.save();
  res.status(201).json(createdQuestion);
};

export const updateQuestionStatus = async (req, res) => {
  const { status } = req.body;
  const question = await Question.findById(req.params.id);

  if (question) {
    question.status = status || question.status;
    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
};

export const clearQuestions = async (req, res) => {
  await Question.deleteMany({});
  res.json({ message: "All questions have been cleared." });
};
