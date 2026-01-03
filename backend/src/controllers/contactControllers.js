import Contact from "../models/Contact.js";

// POST contact

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email and phone are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    console.log("ERROR 👉", error.message); // 👈 ADD THIS
    res.status(400).json({ message: error.message });
  }
};


// GET contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

// DELETE contact
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};
