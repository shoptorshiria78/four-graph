import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const GraphOne = () => {

    const [position, setPosition] = useState(0);

    const handleMove = (value) => {
        setPosition(value);
    };

    return (

        <div className="mb-20 relative">
            {/* button */}
            <div className="flex justify-center w-[420px] top-4 fixed left-1/2 transform -translate-x-1/2 rounded text-slate-400 text-xs font-bold bg-gray-50 px-2">
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(2)} >5 min</button>
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(4)}>10 min</button>
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(6)}>15 min</button>
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(8)}>30 min</button>
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(10)}>1 hour</button>
                <button className="focus:bg-sky-600 focus:text-white rounded px-4 py-1" onClick={() => handleMove(12)}>1 Day</button>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 p-3 ">

                {/* first card */}
                <div className=" p-3 mt-6 rounded bg-white -translate-y-0 hover:-translate-y-4 hover:transition duration-300 delay-100 hover:shadow-xl ">
                    <div className="flex flex-col items-center  p-4">
                        <div className="flex w-full justify-between ">
                            <p className="font-semibold text-xs md:text-sm lg:text-base">Summary</p>
                            <AiOutlineExclamationCircle className="text-slate-400 hover:text-indigo-700" /></div>
                        <div className="relative  mt-20 ">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex justify-center items-center absolute top-8 transition duration-300 delay-200`} style={{ left: `${position * 15}px` }} >
                                <div className="w-2 h-2 rounded-full bg-white "></div>
                            </div>
                            <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                                <div className="h-20 w-1 bg-red-400 rounded"></div>
                                <div className="h-16 w-1 bg-red-500 rounded"></div>
                                <div className="h-14 w-1 bg-red-600 rounded"></div>
                                <div className="h-12 w-1 bg-red-700 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-red-600 to-slate-400 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-red-500 to-slate-500 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-6 w-1 bg-slate-400 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-slate-500 to-green-500 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-slate-600 to-green-500 rounded"></div>
                                <div className="h-12 w-1 bg-gradient-to-r from-slate-600 to-green-400 rounded"></div>
                                <div className="h-14 w-1 bg-green-600 rounded"></div>
                                <div className="h-16 w-1 bg-green-500 rounded"></div>
                                <div className="h-20 w-1 bg-green-400 rounded"></div>
                            </div>
                            {/* bearish section */}

                            <div className="flex justify-around mt-6">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">3</div>
                                    <button className=" text-xs md:text-sm  text-red-500 bg-red-100 px-2 md:px-3  rounded">Bearish</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">10</div>
                                    <button className="text-xs md:text-sm text-slate-500 bg-slate-200 px-2 md:px-3   rounded">Neutral</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">14</div>
                                    <button className="text-xs md:text-sm text-green-500 bg-green-100 px-2 md:px-3  rounded">Bullish</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* calculation section */}
                    <div className="flex justify-around mt-6">
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22076.49</p>
                                <p className="text-sm text-slate-400">EMA(20)</p>
                            </div>
                            <div>
                                <p className="text-sm">-108.46</p>
                                <p className="text-sm text-slate-400">Awesome Osc.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22159.61</p>
                                <p className="text-sm text-slate-400">SMA(20)</p>
                            </div>
                            <div>
                                <p className="text-sm">11.48</p>
                                <p className="text-sm text-slate-400">Macd(12, 26, 9)</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">49.89</p>
                                <p className="text-sm text-slate-400">RSI(14)</p>
                            </div>
                            <div>
                                <p className="text-sm">-54.12</p>
                                <p className="text-sm text-slate-400">CCI(20)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className=" p-3 mt-6 rounded bg-white -translate-y-0 hover:-translate-y-4 hover:transition duration-300 delay-100 hover:shadow-xl ">
                    <div className="flex flex-col items-center  p-4">
                        <div className="flex w-full justify-between ">
                            <p className="font-semibold">Support & Resistance</p>
                            <AiOutlineExclamationCircle className="text-slate-400 hover:text-indigo-700" />
                        </div>
                        <div className="relative  mt-20 ">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex justify-center items-center absolute top-8 transition duration-300 delay-200`} style={{ left: `${position * 15}px` }} >
                                <div className="w-2 h-2 rounded-full bg-white "></div>
                            </div>
                            <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                                <div className="h-20 w-1 bg-indigo-800 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-700 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-600 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-500 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-400 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-300 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-200 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-100 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-50 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-100 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-200 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-300 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-400 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-500 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-600 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-700 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-800 rounded"></div>
                            </div>
                            {/* bearish section */}
                            <div className="flex justify-between mt-4">
                                <div className="flex justify-evenly gap-4 md:gap-8">
                                    <p className="text-sm">S3</p>
                                    <p className="text-sm">S2</p>
                                    <p className="text-sm">S1</p>
                                </div>
                                <div className="flex justify-evenly gap-4 md:gap-8">
                                    <p className="text-sm">R1</p>
                                    <p className="text-sm">R2</p>
                                    <p className="text-sm">R3</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* calculation section */}
                    <div className="flex justify-around mt-6">
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22076.49</p>
                                <p className="text-sm text-slate-400">S1</p>
                            </div>
                            <div>
                                <p className="text-sm">-108.46</p>
                                <p className="text-sm text-slate-400">R2</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22159.61</p>
                                <p className="text-sm text-slate-400">S2</p>
                            </div>
                            <div>
                                <p className="text-sm">20376.48</p>
                                <p className="text-sm text-slate-400">R2</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22456.89</p>
                                <p className="text-sm text-slate-400">S3</p>
                            </div>
                            <div>
                                <p className="text-sm">23421.12</p>
                                <p className="text-sm text-slate-400">R3</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className=" p-3 mt-6 rounded bg-white -translate-y-0 hover:-translate-y-4 hover:transition duration-300 delay-100 hover:shadow-xl ">
                    <div className="flex flex-col items-center  p-4">
                        <div className="flex w-full justify-between ">
                            <p className="font-semibold">Moving averages</p>
                            <AiOutlineExclamationCircle className="text-slate-400 hover:text-indigo-700" />
                        </div>
                        <div className="relative mt-20 ">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex justify-center items-center absolute top-8 transition duration-300 delay-200`} style={{ left: `${position * 15}px` }} >
                                <div className="w-2 h-2 rounded-full bg-white "></div>
                            </div>
                            <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                                <div className="h-20 w-1 bg-amber-400 rounded"></div>
                                <div className="h-16 w-1 bg-amber-500 rounded"></div>
                                <div className="h-14 w-1 bg-amber-600 rounded"></div>
                                <div className="h-12 w-1 bg-amber-700 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-amber-600 to-slate-400 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-amber-500 to-slate-500 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-6 w-1 bg-slate-400 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-slate-500 to-indigo-500 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-slate-600 to-indigo-500 rounded"></div>
                                <div className="h-12 w-1 bg-gradient-to-r from-slate-600 to-indigo-400 rounded"></div>
                                <div className="h-14 w-1 bg-indigo-600 rounded"></div>
                                <div className="h-16 w-1 bg-indigo-500 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-400 rounded"></div>
                            </div>
                            {/* bearish section */}
                            <div className="flex justify-around mt-6">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">7</div>
                                    <button className=" text-xs md:text-sm text-amber-500 bg-amber-100 px-2 md:px-3  rounded">Bearish</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">2</div>
                                    <button className="text-xs md:text-sm text-slate-500 bg-slate-200 px-2 md:px-3 rounded">Neutral</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">8</div>
                                    <button className="text-xs md:text-sm text-green-500 bg-green-100 px-2 md:px-3 rounded">Bullish</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* calculation section */}
                    <div className="flex justify-between mt-6 ml-16 mr-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <button className="text-indigo-700 bg-indigo-100 px-2 rounded-sm text-xs">B</button>
                                <p className="text-sm">EMA(5)</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-red-600 bg-red-100 px-2 rounded-sm text-xs">S</button>
                                <p className="text-sm">SMA(5)</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22020.33</p>

                            </div>
                            <div>
                                <p className="text-sm">21958.84</p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div className=" p-3 mt-6 rounded bg-white -translate-y-0 hover:-translate-y-4 hover:transition duration-300 delay-100 hover:shadow-xl ">
                    <div className="flex flex-col items-center  p-4">
                        <div className="flex w-full justify-between ">
                            <p className="font-semibold">Oscillators</p>
                            <AiOutlineExclamationCircle className="text-slate-400 hover:text-indigo-700" />
                        </div>
                        <div className="relative  mt-20 ">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex justify-center items-center absolute top-8 transition duration-300 delay-200`} style={{ left: `${position * 15}px` }} >
                                <div className="w-2 h-2 rounded-full bg-white "></div>
                            </div>
                            <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                                <div className="h-20 w-1 bg-red-400 rounded"></div>
                                <div className="h-16 w-1 bg-red-500 rounded"></div>
                                <div className="h-14 w-1 bg-red-600 rounded"></div>
                                <div className="h-12 w-1 bg-red-700 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-red-600 to-slate-400 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-red-500 to-slate-500 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-6 w-1 bg-slate-400 rounded"></div>
                                <div className="h-7 w-1 bg-slate-400 rounded"></div>
                                <div className="h-8 w-1 bg-slate-500 rounded"></div>
                                <div className="h-9 w-1 bg-gradient-to-r from-slate-500 to-indigo-500 rounded"></div>
                                <div className="h-10 w-1 bg-gradient-to-r from-slate-600 to-indigo-500 rounded"></div>
                                <div className="h-12 w-1 bg-gradient-to-r from-slate-600 to-indigo-400 rounded"></div>
                                <div className="h-14 w-1 bg-indigo-600 rounded"></div>
                                <div className="h-16 w-1 bg-indigo-500 rounded"></div>
                                <div className="h-20 w-1 bg-indigo-400 rounded"></div>
                            </div>
                            {/* bearish section */}
                            <div className="flex justify-around mt-6">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">2</div>
                                    <button className="text-xs md:text-sm text-red-500 bg-red-100 px-2 md:px-3  rounded">Bearish</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">8</div>
                                    <button className="text-xs md:text-sm text-slate-500 bg-slate-200 px-2 md:px-3  rounded">Neutral</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-sm mb-3">0</div>
                                    <button className="text-xs md:text-sm text-indigo-500 bg-indigo-100 px-2 md:px-3 rounded">Bullish</button>
                                </div>
                            </div>

                        </div>



                    </div>
                    {/* calculation section */}
                    <div className="flex justify-between mt-6 ml-16 mr-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <button className=" bg-slate-200 px-2 rounded-sm text-xs">N</button>
                                <p className="text-sm">RSI(14)</p>
                            </div>
                            <div className="flex gap-2">
                                <button className=" bg-slate-200 px-2 rounded-sm text-xs">N</button>
                                <p className="text-sm">Stoch.%K(14,3,3)</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm">22020.33</p>

                            </div>
                            <div>
                                <p className="text-sm">21958.84</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default GraphOne;