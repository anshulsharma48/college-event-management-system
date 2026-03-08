const Registration = require("../models/Registration")
const Notification = require("../models/Notification")

const registerEvent = async (req, res) => {
  const { userId, eventId, eventTitle } = req.body

  const reg = new Registration({
    userId,
    eventId,
    eventTitle
  })

  await reg.save()

  await Notification.create({
    message: `Registered for ${eventTitle}`,
    role: "Student"
  })

  res.json({ message: "Registered" })
}

const getAllRegistrations = async (req, res) => {
  const regs = await Registration.find()
  res.json(regs)
}

const cancelRegistration = async (req, res) => {
  await Registration.findByIdAndDelete(req.params.id)

  await Notification.create({
    message: "Registration cancelled",
    role: "Student"
  })

  res.json({ message: "Cancelled" })
}

const markAttendance = async (req, res) => {
  await Registration.findByIdAndUpdate(req.params.id, { attended: true })

  await Notification.create({
    message: "Attendance marked",
    role: "Admin"
  })

  res.json({ message: "Attendance marked" })
}

module.exports = {
  registerEvent,
  getAllRegistrations,
  cancelRegistration,
  markAttendance
}