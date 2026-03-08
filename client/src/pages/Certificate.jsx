import { useEffect, useState } from "react";
import api from "../api/axios";

const Certificate = () => {
  const [certs, setCerts] = useState([]);

  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name") || "Student";

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await api.get("/registrations");

        const filtered = res.data.filter(
          (r) => r.userId === userId && r.attended === true
        );

        setCerts(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCerts();
  }, []);

  const downloadPDF = (id) => {
    const element = document.getElementById(`cert-${id}`);

    if (!element) {
      alert("Certificate not ready ❌");
      return;
    }

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate</title>
          <style>
            body{
              margin:0;
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
              font-family: Arial, sans-serif;
              background:white;
            }

            .cert{
              border:10px solid #d4af37;
              padding:60px;
              width:900px;
              text-align:center;
            }

            h1{font-size:36px;margin-bottom:20px;}
            h2{font-size:28px;margin:15px 0;}
            h3{font-size:22px;margin-top:10px;}
            p{font-size:18px;}
          </style>
        </head>

        <body>
          <div class="cert">
            ${element.innerHTML}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">
          Certificates
        </h1>
        <p className="text-gray-600">
          Download certificates for attended events
        </p>
      </div>

      {certs.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">
          No certificates available yet
        </p>
      ) : (
        <div className="space-y-12 flex flex-col items-center">

          {certs.map((c) => (
            <div key={c._id} className="flex flex-col items-center">

              {/* Certificate */}
              <div
                id={`cert-${c._id}`}
                className="bg-white border-[8px] border-yellow-500 p-12 w-[900px] text-center shadow-md"
              >
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  Certificate of Participation
                </h1>

                <p className="text-gray-600 text-lg">
                  This is proudly presented to
                </p>

                <h2 className="text-3xl font-semibold mt-3 text-indigo-700">
                  {name}
                </h2>

                <p className="text-gray-600 mt-6 text-lg">
                  for successfully participating in
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                  {c.eventTitle}
                </h3>

                <p className="text-gray-500 mt-8 text-sm">
                  College Event & Activity Management System
                </p>
              </div>

              {/* Download Button */}
              <button
                onClick={() => downloadPDF(c._id)}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm font-medium transition"
              >
                Download Certificate
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Certificate;