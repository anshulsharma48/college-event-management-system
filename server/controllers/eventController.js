// const Event = require("../models/Event")
// const Notification = require("../models/Notification")

// const createEvent = async (req, res) => {
//   console.log("Creating");
  
//   try {
//     const event = new Event(req.body)
//     await event.save()

//     await Notification.create({
//       message: `Event created: ${event.title}`,
//       role: "Admin"
//     })

//     res.json(event)
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// }

// const getEvents = async (req, res) => {
//   const events = await Event.find({ status: "Approved" })
//   res.json(events)
// }

// const getPendingEvents = async (req, res) => {
//   const events = await Event.find({ status: "Pending" })
//   res.json(events)
// }

// const approveEvent = async (req, res) => {
//   const event = await Event.findByIdAndUpdate(
//     req.params.id,
//     { status: "Approved" },
//     { new: true }
//   )

//   await Notification.create({
//     message: `Event approved: ${event.title}`,
//     role: "Student"
//   })

//   res.json({ message: "Approved" })
// }

// const rejectEvent = async (req, res) => {
//   const event = await Event.findByIdAndUpdate(
//     req.params.id,
//     { status: "Rejected" },
//     { new: true }
//   )

//   await Notification.create({
//     message: `Event rejected: ${event.title}`,
//     role: "Admin"
//   })

//   res.json({ message: "Rejected" })
// }

// module.exports = {
//   createEvent,
//   getEvents,
//   getPendingEvents,
//   approveEvent,
//   rejectEvent
// }

const Event = require("../models/Event")
const Notification = require("../models/Notification")

exports.createEvent = async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      status: "Pending"
    })

    await event.save()

    await Notification.create({
      message: `New event created: ${event.title}`
    })

    res.json(event)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getEvents = async (req, res) => {
  const events = await Event.find({ status: "Approved" })
  res.json(events)
}

exports.getPendingEvents = async (req, res) => {
  const events = await Event.find({ status: "Pending" })
  res.json(events)
}

exports.approveEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    { status: "Approved" },
    { returnDocument: "after" }
  )

  await Notification.create({
    message: `Event approved: ${event.title}`
  })

  res.json(event)
}

exports.rejectEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    { status: "Rejected" },
    { returnDocument: "after" }
  )

  await Notification.create({
    message: `Event rejected: ${event.title}`
  })

  res.json(event)
}