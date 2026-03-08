// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const Dashboard = () => {
//   const role = localStorage.getItem("role");

//   const [stats, setStats] = useState({
//     events: 0,
//     registrations: 0,
//     pending: 0,
//     certificates: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const eventsRes = await api.get("/events");
//         const pendingRes = await api.get("/events/pending");
//         const regsRes = await api.get("/registrations");

//         const certificatesCount = regsRes.data.filter((r) => r.attended).length;

//         setStats({
//           events: eventsRes.data.length,
//           registrations: regsRes.data.length,
//           pending: pendingRes.data.length,
//           certificates: certificatesCount,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 p-10">
//       {/* Welcome Section */}
//       <div className="bg-white rounded-3xl shadow-2xl p-8 mb-10 border">
//         <h1 className="text-3xl font-extrabold text-indigo-700 mb-2">
//           Analytics Dashboard 📊
//         </h1>
//         <p className="text-gray-600">
//           Logged in as <span className="font-semibold">{role}</span>
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard title="Total Events" value={stats.events} color="indigo" />
//         <StatCard title="Registrations" value={stats.registrations} color="blue" />
//         <StatCard title="Pending Approvals" value={stats.pending} color="yellow" />
//         <StatCard title="Certificates Issued" value={stats.certificates} color="green" />
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ title, value, color }) => {
//   const colors = {
//     indigo: "bg-indigo-500",
//     blue: "bg-blue-500",
//     yellow: "bg-yellow-500",
//     green: "bg-green-500",
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border p-6 cursor-pointer hover:shadow-2xl transition">
//       <div className={`w-12 h-12 ${colors[color]} rounded-lg mb-4 shadow-md`}></div>
//       <h3 className="text-gray-600 font-medium">{title}</h3>
//       <p className="text-3xl font-bold text-gray-800">{value}</p>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  const [stats, setStats] = useState({
    events: 0,
    registrations: 0,
    pending: 0,
    certificates: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const eventsRes = await api.get("/events");
        const pendingRes = await api.get("/events/pending");
        const regsRes = await api.get("/registrations");

        const certificatesCount = regsRes.data.filter((r) => r.attended).length;

        setStats({
          events: eventsRes.data.length,
          registrations: regsRes.data.length,
          pending: pendingRes.data.length,
          certificates: certificatesCount,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">
          Dashboard
        </h1>

        <p className="text-gray-600">
          Logged in as <span className="font-semibold text-indigo-600">{role}</span>
        </p>
      </div>


      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Events"
          value={stats.events}
          color="bg-indigo-500"
        />

        <StatCard
          title="Registrations"
          value={stats.registrations}
          color="bg-blue-500"
        />

        <StatCard
          title="Pending Approvals"
          value={stats.pending}
          color="bg-yellow-500"
        />

        <StatCard
          title="Certificates Issued"
          value={stats.certificates}
          color="bg-green-500"
        />

      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200">

      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 ${color} rounded-md`}></div>

        <span className="text-2xl font-bold text-gray-800">
          {value}
        </span>
      </div>

      <h3 className="text-gray-600 text-sm font-medium">
        {title}
      </h3>

    </div>
  );
};

export default Dashboard;