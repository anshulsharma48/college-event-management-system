// const express = require("express")
// const router = express.Router()
// const auth = require("../middleware/authMiddleware")
// const role = require("../middleware/roleMiddleware")
// const {
//   createEvent,
//   getEvents,
//   getPendingEvents,
//   approveEvent,
//   rejectEvent
// } = require("../controllers/eventController")

// router.post("/", auth, role("Admin","Club Head"), createEvent)
// router.get("/", getEvents)
// router.get("/pending", getPendingEvents)
// router.put("/approve/:id", auth, role("Faculty Coordinator"), approveEvent)
// router.put("/reject/:id", auth, role("Faculty Coordinator"), rejectEvent)

// module.exports = router

const express = require("express")
const router = express.Router()

const {
  createEvent,
  getEvents,
  getPendingEvents,
  approveEvent,
  rejectEvent
} = require("../controllers/eventController")

router.post("/", createEvent)
router.get("/", getEvents)
router.get("/pending", getPendingEvents)
router.put("/approve/:id", approveEvent)
router.put("/reject/:id", rejectEvent)

module.exports = router