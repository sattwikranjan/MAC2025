import React from "react";
import Link from "next/link";

const Registration = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      {/* <h1 className='text-center text-3xl font-bold mb-6'>
    <span className='md:px-8 border-b-4 border-blue-500 pb-4'>
    Important Dates
    </span>
</h1> */}
      {/* <div className='flex justify-center'>
 


<div class="md:mx-28 bg-red-100 w-[90%] md:w-[60%] lg:w-[60%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400 rounded-2xl">
<table className='text-[12px] md:text-lg lg:text-lg w-full'>
      <tbody>
        <tr>
          <td className='w-[35%] text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400' rowSpan={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className='text-red-500 font-bold'>Paper Submission Deadline</span>
            </div>
          </td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>Early Bird*</td>
          <td className='text-center py-2'>April 30, 2024</td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>Regular</td>
          <td className='text-center py-2'>July 31, 2024</td>
        </tr>
        <tr>
          <td rowSpan={4} className='font-semibold'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className='text-red-500 font-bold'>Acceptance Notification</span>
            </div>
          </td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>Stage 1</td>
          <td className='text-center py-2'>May 15, 2024</td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>Stage 2</td>
          <td className='text-center py-2'>June 15, 2024</td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>Stage 3</td>
          <td className='text-center py-2'>August 15, 2024</td>
        </tr>
        <tr>
          <td rowSpan={2} className='font-semibold'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className='text-red-500 font-bold'>Camera Ready Paper</span>
            </div>
          </td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>     </td>
          <td className='text-center py-2'>September 15, 2024</td>
        </tr>
        <tr>
          <td rowSpan={2} className='font-semibold'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className='text-red-500 font-bold'>Registration Deadline</span>
            </div>
          </td>
        </tr>
        <tr className='border-b-2 border-stone-400'>
          <td className='text-center py-2'>    </td>
          <td className='text-center py-2'>September 15, 2024</td>
        </tr>
      </tbody>
    </table>
    
</div>
</div>
<p className="md:mb-8 leading-relaxed font-semibold text-lg text-center">
                *10% of Registration fee will be reimbursed (applicable for B.Tech./M.Tech. Students).
</p> */}
      <div id="registration" className="h-12 w-full"></div>
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Registration Fee (including 18% GST)
        </span>
      </h1>
      <div className="flex justify-center mt-16">
        <div className="p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll">
          <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
            <tbody>
              <tr className="h-12">
                <th></th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                  Category
                </th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                  Indian Delegates
                </th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                  Foreign Delegates
                </th>
              </tr>
              <tr className="border-b-2 border-stone-600">
                <td
                  className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
                  rowSpan={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-500 font-bold">
                      Student Members
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">IEEE</td>
                <td className="py-2">INR 8,900</td>
                <td className="py-2">USD 250</td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">Non-IEEE</td>
                <td className="py-2">INR 11,900</td>
                <td className="py-2">USD 310</td>
              </tr>
              <tr>
                <td rowSpan={3} className="font-semibold">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-500 font-bold">
                      Professional Members
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">IEEE</td>
                <td className="py-2">INR 14,900</td>
                <td className="py-2">USD 350</td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">Non-IEEE</td>
                <td className="py-2">INR 17,900</td>
                <td className="py-2">USD 390</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="text-center">
        <div className="mt-24 px-4 md:px-0">
          <p className="text-[15px] font-semibold md:text-[22px] lg:text-xl">
            For Regular Registrations{" "}
            <span className="text-red-500 font-bold">
              ( After 31 January, 2023, 11 PM-IST)
            </span>
          </p>
        </div>
        <div className="flex justify-center mt-4 ">
          <div className=" p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll">
            <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
              <tbody>
                <tr className="h-12">
                  <th></th>
                  <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                    Category
                  </th>
                  <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                    Indian Delegates
                  </th>
                  <th className=" text-[13px] sm:text-[15px] md:text-xl p-1 pb-2">
                    Foreign Delegates
                  </th>
                </tr>
                <tr className="border-b-2 border-stone-600">
                  <td
                    className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
                    rowSpan={5}
                  >
                    Early Paper Submission Advantage (For Paper Submitted Till{" "}
                    <span className="text-red-500 font-bold">
                      31 October, 2022
                    </span>
                    ){" "}
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2 ">Student (IEEE)</td>
                  <td className="py-2">INR 3900 + 18% = 4602/-</td>
                  <td className="py-2">USD 140 + 18% = 166</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2">Student (Non-IEEE)</td>
                  <td className="py-2">INR 4900 + 18% = 5782/-</td>
                  <td className="py-2">USD 190 + 18% = 225</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2">Faculty</td>
                  <td className="py-2">INR 7900 + 18% = 9322/-</td>
                  <td className="py-2">USD 200 + 18% = 236</td>
                </tr>
                <tr className="border-b-4 border-stone-600">
                  <td className="py-2">Industry</td>
                  <td className="py-2">INR 10900 + 18% = 12862/-</td>
                  <td className="py-2">USD 250 + 18% = 295</td>
                </tr>
                <tr>
                  <td rowSpan={5} className="font-semibold">
                    Regular
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2">Student (IEEE)</td>
                  <td className="py-2">INR 4900 + 18% = 5782/-</td>
                  <td className="py-2">USD 160 + 18% = 189</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2">Student (Non-IEEE)</td>
                  <td className="py-2">INR 5900 + 18% = 6962/-</td>
                  <td className="py-2">USD 210 + 18% = 248</td>
                </tr>
                <tr className="border-b-2 border-stone-400">
                  <td className="py-2">Faculty</td>
                  <td className="py-2">INR 9900 + 18% = 11682/-</td>
                  <td className="py-2">USD 220 + 18% = 260</td>
                </tr>
                <tr>
                  <td className="py-2">Industry</td>
                  <td className="py-2">INR 12900 + 18% = 15222/-</td>
                  <td className="py-2">USD 290 + 18% = 343</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <h1 className="text-center text-3xl font-bold mt-12 mb-8">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Bank Details
        </span>
      </h1>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src="/soon.webp" alt="Coming Soon" />
      </div> */}

      <div className="flex justify-center">
        <div className="md:mx-28 bg-red-100 max-w-[700px] w-[90%] md:w-[70%] lg:w-[50%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400 rounded-2xl">
          <div className="w-full flex justify-between  py-2">
            <span>Account Name</span>
            <span className="text-right">IEEE MAC</span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>Account Number</span>
            <span className="text-right">77660200001325</span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>IFSC Code</span>
            <span className="text-right">
              BARB0VJMNRE (Fifth character is ZERO)
            </span>
          </div>
          {/* <div className="w-full flex justify-between  py-2">
            <span>Swift Code</span>
            <span className="text-right">SBININBB828</span>
          </div> */}
          <div className="w-full flex justify-between  py-2">
            <span>Bank Name</span>
            <span className="text-right">Bank of Baroda</span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>Branch</span>
            <span className="text-right">
              MNNIT Campus, Allahabad(Prayagraj)
            </span>
          </div>
          {/* <div className="w-full flex justify-between  py-2">
            <span>Institute Name</span>
            <span className="text-right">
              Motilal Nehru National Institute of Technology, Allahabad
            </span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>GSTN</span>
            <span className="text-right">09AAAJM1116B2ZR</span>
          </div> */}
        </div>
      </div>

      <div className="text-center mt-12 ">
        <a href="">
          <span className=" rounded-xl cursor-pointer font-semibold text-lg border-2 px-8 border-stone-100 btn btn-success">
            Registration Form
          </span>
        </a>
      </div>

      <div className="h-12 w-full"></div>
    </div>
  );
};

export default Registration;
