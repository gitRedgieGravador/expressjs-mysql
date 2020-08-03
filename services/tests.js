class Tests {
  constructor() {}
  get(req, res) {
    res.json("all tests. ");
  }
  getwp(req, res) {
    res.json("tests. id: " + req.params.id);
  }
  update(req, res) {
    res.json({
      message: "updating test..",
      data: req.body
    });
  }
  create(req, res) {
    res.json({
      message: "creating test..",
      data: req.body
    });
  }
  delete(req, res) {
    res.json("delete test." + req.params.id);
  }
}

module.exports = Tests;