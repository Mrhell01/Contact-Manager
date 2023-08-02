const asyncHandler = require("express-async-handler");
// @desc GET all contacts
// @desc GET /app/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

// @desc create contacts
// @desc POST /app/contacts
// @access public

const createContact = asyncHandler (async (req, res) => {
  console.log("the Request body is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new error("All Fields are mandatory!");
  }
  res.status(201).json({ message: "Create Contact " });
});

// @desc GET  contacts by id
// @desc GET /app/contacts/:id
// @access public

const getContact = asyncHandler ( async (req, res) => {
  res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
});

// @desc update  contacts by id
// @desc POST /app/contacts/:id
// @access public

const updateContact = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
});

// @desc delete  contacts by id
// @desc DELETE /app/contacts/:id
// @access public

const deleteContact = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContacts,
  deleteContact,
  updateContact,
};
