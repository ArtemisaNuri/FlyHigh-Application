// import React from "react";
// import { FlightsDetails } from "@/Interface/Interface";

// interface FlightCardProps {
//   flight: FlightsDetails;
// }

// const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
//   const {
//     originSkyId,
//     destinationSkyId,
//     date,
//     returnDate,
//     cabinClass,
//     adults,
//     children,
//     currency,
//   } = flight;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-lg">
//       <div className="mb-4">
//         <h2 className="text-lg font-bold text-gray-700">
//           {originSkyId} → {destinationSkyId}
//         </h2>
//         <p className="text-sm text-gray-500">
//           Departure Date: {new Date(date).toLocaleDateString()}
//         </p>
//         {returnDate && (
//           <p className="text-sm text-gray-500">
//             Return Date: {new Date(returnDate).toLocaleDateString()}
//           </p>
//         )}
//         <p className="text-sm text-gray-500">Cabin Class: {cabinClass}</p>
//         <p className="text-sm text-gray-500">Adults: {adults}</p>
//         {children !== undefined && (
//           <p className="text-sm text-gray-500">Children: {children}</p>
//         )}
//       </div>

//       <div className="mb-4">
//         <h3 className="text-md font-bold text-blue-600">
//           Currency: {currency.toUpperCase()}
//         </h3>
//       </div>

//       <button
//         className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-all w-full"
//         onClick={() => alert("Booking functionality coming soon!")}
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default FlightCard;
