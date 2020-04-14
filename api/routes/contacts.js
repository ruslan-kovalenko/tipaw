const express = require("express");
const router = express.Router();
const ContactsController = require('../controllers/contacts');

router.get("/", ContactsController.orders_get_all);
router.post("/", ContactsController.orders_create);

module.exports = router;