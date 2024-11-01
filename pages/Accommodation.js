import React from "react";
import SponsorFix from "../components/SponsorFix";

const Accommodation = () => {
  const hotels = [
    {
      id: 1,
      name: "MJ Aero Suites",
      category: "Five Star",
      distance: "2.5 KM",
    },
    {
      id: 2,
      name: "Hotel Padmini Palace",
      category: "Five Star",
      distance: "4.2 KM",
    },
    {
      id: 3,
      name: "JS Souvenir",
      category: "Five Star",
      distance: "7.5 KM",
    },
    {
      id: 4,
      name: "Naturoville Resort",
      category: "Five Star",
      distance: "9.2 KM",
    },

    {
      id: 5,
      name: "Utsav Hotel Jollygrant",
      category: "Four Star",
      distance: "1.4 KM",
    },
    {
      id: 6,
      name: "Hotel Vasdaa Grand",
      category: "Four Star",
      distance: "4.5 KM",
    },
    {
      id: 7,
      name: "The Aatithiyam Resort",
      category: "Four Star",
      distance: "5.3 KM",
    },
    {
      id: 8,
      name: "Hotel Abhinandan residency",
      category: "Budget Hotel",
      distance: "1.4 KM",
    },
    {
      id: 9,
      name: "Le Amritam",
      category: "Budget Hotel",
      distance: "22 KM",
    },
    {
      id: 10,
      name: "White Tara-Art Retreat",
      category: "Budget Hotel",
      distance: "22 KM",
    },
    {
      id: 11,
      name: "Hotel Whiterock",
      category: "Budget Hotel",
      distance: "27 KM",
    },
  ];

  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4 md:mb-6">
          Accommodation
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-2 md:px-4 py-2 border">S.No.</th>
                <th className="px-2 md:px-4 py-2 border">Name of The Hotel</th>
                <th className="px-2 md:px-4 py-2 border">Category</th>
                <th className="px-2 md:px-4 py-2 border">
                  Distance from Conference Hotel (Venue)
                </th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.id} className="hover:bg-gray-100">
                  <td className="px-2 md:px-4 py-2 border">{hotel.id}</td>
                  <td className="px-2 md:px-4 py-2 border  hover:underline">
                    {hotel.name}
                  </td>
                  <td className="px-2 md:px-4 py-2 border">{hotel.category}</td>
                  <td className="px-2 md:px-4 py-2 border">{hotel.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SponsorFix />
    </div>
  );
};

export default Accommodation;
