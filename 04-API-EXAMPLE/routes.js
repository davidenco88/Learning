const { Router } = require("express");

let surveys = [];

const appRouter = Router();

appRouter.get("/", (req, res) => {
  res.send("Service is ok");
});

appRouter.get("/surveys", (req, res) => {
  res.status(200).json(surveys);
});

appRouter.post("/surveys", (req, res) => {
  const survey = req.body;
  console.log(survey);
  surveys.push(survey);
  res.status(201).json(survey);
});

appRouter.put("/surveys/:id", (req, res) => {
  const id = Number(req.params.id);
  const survey = req.body;

  const index = surveys.findIndex((survey) => survey.id === id);

  if (index !== -1) {
    surveys[index] = survey;
    res.status(200).json(surveys[index]);
  } else {
    res.status(404).send("Survey not found");
  }
});

appRouter.delete("/surveys/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = surveys.findIndex((survey) => survey.id === id);

  if (index !== -1) {
    const surveyDeleted = surveys[index];
    surveys.splice(index, 1);
    res.status(200).json(surveyDeleted);
  } else {
    res.status(404).send("Survey not found");
  }
});

module.exports = appRouter;
