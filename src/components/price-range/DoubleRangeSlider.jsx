// import React, { useState } from "react";

// const RangeSlider = () => {
//   const [minVal, setMinVal] = useState(0); // Minimum value of the slider
//   const [maxVal, setMaxVal] = useState(3000); // Maximum value of the slider

//   const min = 0; // Overall minimum value
//   const max = 5000; // Overall maximum value

//   // Handle minimum value slider change
//   const handleMinChange = (e) => {
//     const value = Math.min(Number(e.target.value), maxVal - 1); // Prevent overlap
//     setMinVal(value);
//   };

//   // Handle maximum value slider change
//   const handleMaxChange = (e) => {
//     const value = Math.max(Number(e.target.value), minVal + 1); // Prevent overlap
//     setMaxVal(value);
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       {/* Text Inputs */}
//       <div className="flex items-center gap-1 mt-5">
//         <input
//           type="text"
//           value={minVal + " ₼"}
//           readOnly
//           className="bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center"
//         />
//         <span className="text-gray-300">-</span>
//         <input
//           type="text"
//           value={maxVal + " ₼"}
//           readOnly
//           className="bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center"
//         />
//       </div>

//       {/* Double Range Slider */}
//       <div className="relative w-full max-w-md mx-auto">
//         {/* Range bar */}
//         <div className="relative h-2 bg-gray-300 rounded-md">
//           {/* Highlighted range */}
//           <div
//             className="absolute h-2 bg-black rounded-md"
//             style={{
//               left: `${(minVal / max) * 100}%`,
//               right: `${100 - (maxVal / max) * 100}%`,
//             }}
//           ></div>
//         </div>

//         {/* Minimum slider */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           value={minVal}
//           onChange={handleMinChange}
//           className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-auto"
//           style={{
//             zIndex: minVal > maxVal - 10 ? 5 : 3, // Bring to front when close
//           }}
//         />

//         {/* Maximum slider */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           value={maxVal}
//           onChange={handleMaxChange}
//           className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-auto"
//           style={{
//             zIndex: maxVal > minVal + 10 ? 5 : 3, // Bring to front when close
//           }}
//         />

//         {/* Display Values
//         <div className="flex justify-between mt-6 text-sm text-gray-600">
//           <span>Min: {minVal}</span>
//           <span>Max: {maxVal}</span>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default RangeSlider;
