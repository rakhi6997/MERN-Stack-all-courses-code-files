let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe("Testing of Task APIs", () => {
  /**
   * Test all the GET routes...
   */
  describe("Testing GET /api/tasks", () => {
    it("It should GET all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/tasks")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          done();
        });
    });

    it("It should NOT GET any tasks", (done) => {
      chai
        .request(server)
        .get("/api/task")
        .end((err, response) => {
          response.should.have.status(404);

          done();
        });
    });
  });

  /**
   * Test all the GET (by ID) routes...
   */

  describe("Testing GET APIs by ID /api/tasks/:id", () => {
    it("It should GET a tasks by ID", (done) => {
      const taskId = 1;
      chai
        .request(server)
        .get("/api/tasks/" + taskId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("name");
          response.body.should.have.property("completed");
          response.body.should.have.property("id").eq(taskId);
          done();
        });
    });

    it("It should NOT GET a tasks by ID", (done) => {
      const taskId = 7;
      chai
        .request(server)
        .get("/api/tasks/" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          response.text.should.be.eq(
            "The task with the provided ID does not exist."
          );
          done();
        });
    });
  });

  /**
   * Test the POST route
   */
  describe("Testing POST APIs /api/tasks", () => {
    it("It should POST a new task", (done) => {
      const task = {
        name: "Task 4",
        completed: false,
      };
      chai
        .request(server)
        .post("/api/tasks")
        .send(task)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          response.body.should.have.property("id").eq(4);
          response.body.should.have.property("name").eq("Task 4");
          response.body.should.have.property("completed").eq(false);
          done();
        });
    });

    it("It should NOT POST a new task without the name property", (done) => {
      const task = {
        completed: false,
      };
      chai
        .request(server)
        .post("/api/tasks")
        .send(task)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq(
            "The name should be at least 3 chars long!"
          );
          done();
        });
    });
  });

  /**
   * Test the PUT route
   */
  describe("Testing PUT APIs /api/tasks/:id", () => {
    it("It should PUT an existing task", (done) => {
      const taskId = 1;
      const task = {
        name: "Task 1 changed",
        completed: true,
      };
      chai
        .request(server)
        .put("/api/tasks/" + taskId)
        .send(task)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id").eq(1);
          response.body.should.have.property("name").eq("Task 1 changed");
          response.body.should.have.property("completed").eq(true);
          done();
        });
    });

    it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
      const taskId = 1;
      const task = {
        name: "Ta",
        completed: true,
      };
      chai
        .request(server)
        .put("/api/tasks/" + taskId)
        .send(task)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq(
            "The name should be at least 3 chars long!"
          );
          done();
        });
    });
  });

  /**
   * Test the PATCH route
   */

  describe("Testing PATCH APIs /api/tasks/:id", () => {
    it("It should PATCH an existing task", (done) => {
      const taskId = 1;
      const task = {
        name: "Task 1 patch",
      };
      chai
        .request(server)
        .patch("/api/tasks/" + taskId)
        .send(task)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id").eq(1);
          response.body.should.have.property("name").eq("Task 1 patch");
          response.body.should.have.property("completed").eq(true);
          done();
        });
    });

    it("It should NOT PATCH an existing task with a name with less than 3 characters", (done) => {
      const taskId = 1;
      const task = {
        name: "Ta",
      };
      chai
        .request(server)
        .patch("/api/tasks/" + taskId)
        .send(task)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq(
            "The name should be at least 3 chars long!"
          );
          done();
        });
    });
  });

  /**
   * Test the DELETE route
   */
  describe("Testing DELETE APIs /api/tasks/:id", () => {
    it("It should DELETE an existing task", (done) => {
      const taskId = 1;
      chai
        .request(server)
        .delete("/api/tasks/" + taskId)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it("It should NOT DELETE a task that is not in the database", (done) => {
      const taskId = 145;
      chai
        .request(server)
        .delete("/api/tasks/" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          response.text.should.be.eq(
            "The task with the provided ID does not exist."
          );
          done();
        });
    });
  });
});
