// import React from "react";

// const awards = () => {
//   return (
//     <div>
//       <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12">
//         <span className="border-b-4 border-blue-500 px-4 pb-4">
//           Registration Fee (including 18% GST)
//         </span>
//       </h1>
//       <div className="text-center">
//         <div className="mt-16 px-4 md:px-0">
//           <p className="text-[15px] font-semibold md:text-[22px] lg:text-xl">
//             For Early Bird Registrations with 10% Additional Rebate{" "}
//             <span className="text-red-500 font-bold">
//               ( Before 31 January, 2023, 11 PM-IST)
//             </span>
//           </p>
//         </div>
//         <div className="flex justify-center mt-4 ">
//           <div className=" p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll ">
//             <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
//               <tbody>
//                 <tr className="h-12">
//                   <th></th>
//                   <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
//                     Category
//                   </th>
//                   <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
//                     Indian Delegates
//                   </th>
//                   <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
//                     Foreign Delegates
//                   </th>
//                 </tr>
//                 <tr className="border-b-2 border-stone-600">
//                   <td
//                     className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
//                     rowSpan={5}
//                   >
//                     Early Paper Submission Advantage (For Paper Submitted Till{" "}
//                     <span className="text-red-500 font-bold">
//                       31 October, 2022
//                     </span>
//                     ){" "}
//                   </td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2 ">Student (IEEE)</td>
//                   <td className="py-2">INR 3510 + 18% = 4142/-</td>
//                   <td className="py-2">USD 126 + 18% = 149</td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2">Student (Non-IEEE)</td>
//                   <td className="py-2">INR 4410 + 18% = 5204/-</td>
//                   <td className="py-2">USD 171 + 18% = 202</td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2">Faculty</td>
//                   <td className="py-2">INR 7110 + 18% = 8390/-</td>
//                   <td className="py-2">USD 180 + 18% = 213</td>
//                 </tr>
//                 <tr className="border-b-4 border-stone-600">
//                   <td className="py-2">Industry</td>
//                   <td className="py-2">INR 9810 + 18% = 11576/-</td>
//                   <td className="py-2">USD 225 + 18% = 266</td>
//                 </tr>
//                 <tr>
//                   <td rowSpan={5} className="font-semibold">
//                     Regular
//                   </td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2">Student (IEEE)</td>
//                   <td className="py-2">INR 4410 + 18% = 5204/-</td>
//                   <td className="py-2">USD 144 + 18% = 170</td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2">Student (Non-IEEE)</td>
//                   <td className="py-2">INR 5310 + 18% = 6266/-</td>
//                   <td className="py-2">USD 189 + 18% = 223</td>
//                 </tr>
//                 <tr className="border-b-2 border-stone-400">
//                   <td className="py-2">Faculty</td>
//                   <td className="py-2">INR 8910 + 18% = 10514/-</td>
//                   <td className="py-2">USD 198 + 18% = 234</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">Industry</td>
//                   <td className="py-2">INR 11610 + 18% = 13700/-</td>
//                   <td className="py-2">USD 261 + 18% = 308</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default awards;

import React from "react";
import SponsorFix from "../components/SponsorFix";

const Gallery = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12 mb-16">
        <span className="border-b-4 border-blue-500 px-4 pb-4">Awards</span>
      </h1>
      <div className="text-center">
        <div className="flex justify-center mt-4">
          <div className="p-1 md:p-4 border-2 border-stone-400 w-full lg:w-3/4">
            <table className="table-auto text-left text-[12px] md:text-lg w-full">
              <thead>
                <tr className="h-12">
                  <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2"></th>
                  <th className="text-[13px] sm:text-[15px] md:text-xl text-center p-1 pb-2">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[30%] md:w-1/4 text-[13px] font-semibold md:text-[20px] lg:text-lg px-2 py-2 border-b-2 border-stone-400"
                    rowSpan={13}
                  >
                    Prof. Sudarshan Tiwari Memorial Best Paper Award
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Microwave Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Antenna Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Communication Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Emerging Technology Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[30%] md:w-1/4 text-[13px] font-semibold md:text-[20px] lg:text-lg px-2 py-2 border-b-2 border-stone-400"
                    rowSpan={5}
                  >
                    Prof. Satish K. Sharma Best Paper Award for Doctoral
                    Students
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First INR 15000</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second INR 10000</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Third INR 5000</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[30%] md:w-1/4 text-[13px] font-semibold md:text-[20px] lg:text-lg px-2 py-2 border-b-2 border-stone-400"
                    rowSpan={5}
                  >
                    Prof. Bharat S Rawal Research Promotion Award
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First INR 5000</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second INR 5000</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Third INR 5000</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[30%] md:w-1/4 text-[13px] font-semibold md:text-[20px] lg:text-lg px-2 py-2 border-b-2 border-stone-400"
                    rowSpan={5}
                  >
                    Best Paper for Industry
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[30%] md:w-1/4 text-[13px] font-semibold md:text-[20px] lg:text-lg px-2 py-2 border-b-2 border-stone-400"
                    rowSpan={13}
                  >
                    IEEE Student Branch Best Paper Award
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Microwave Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Antenna Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Communication Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center" rowSpan={3}>
                    Emerging Technology Track
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">First</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 text-center">Second</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SponsorFix />
    </div>
  );
};

export default Gallery;
