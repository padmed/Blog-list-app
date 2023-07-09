const noteRouter = require("express").Router();
const Blog = require("../models/blog");

noteRouter.get("/", (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((e) => {
      next(e);
    });
});

noteRouter.post("/", (request, response, next) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((e) => {
      next(e);
    });
});

module.exports = noteRouter;