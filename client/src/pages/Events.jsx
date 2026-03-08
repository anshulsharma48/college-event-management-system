import { useEffect, useState } from "react";
import api from "../api/axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  const userId = localStorage.getItem("userId") || "demoUser";

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get("/events");
      setEvents(res.data);
    };

    fetchEvents();
  }, []);

  const registerEvent = async (event) => {
    await api.post("/registrations", {
      userId,
      eventId: event._id,
      eventTitle: event.title,
    });

    alert("Registered successfully 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">
          Events
        </h1>
        <p className="text-gray-600">
          Browse and register for upcoming college events
        </p>
      </div>

      {events.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No approved events yet
        </p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event._id} event={event} registerEvent={registerEvent} />
        ))}
      </div>

    </div>
  );
};

const EventCard = ({ event, registerEvent }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {event.title}
      </h3>

      <div className="space-y-1 mb-4 text-sm text-gray-600">
        <p>📅 {event.date}</p>
        <p>📍 {event.venue}</p>
      </div>

      <button
        onClick={() => registerEvent(event)}
        className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
      >
        Register
      </button>

    </div>
  );
};

export default Events;