const express = require("express");
const router = express.Router();
const {
  getContacts,
  deleteContacts,
  createContacts,
  getSpecificContacts,
  updateContacts,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContacts);

router
  .route("/:id")
  .get(getSpecificContacts)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
