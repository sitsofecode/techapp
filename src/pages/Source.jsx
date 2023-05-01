import React, { useEffect, useState } from 'react'

function Source() {
    const tableBorder = " p-5"
    const switchButton = "w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"
    const [sourceAlimentation, setSourceAlimentation] = useState('sbee');
    useEffect(() => {
        if (sourceAlimentation === 'groupe') {
            setEnabledGroupe(true);
            setEnabledSBEE(false)
        } else {
            setEnabledGroupe(false);
            setEnabledSBEE(true)

        }
    }, [sourceAlimentation])
    const [enabledSBEE, setEnabledSBEE] = useState(false);
    const [enabledGroupe, setEnabledGroupe] = useState(false);

    return (
        <div className='p-6 mb-10'>
            <h1 className='text-xl font-bold dark:text-lightColor '>Source</h1>
            <div className='mt-5'>
                <p> Source d'alimentation </p>
                <div className=' p-4 mt-10 '>
                     <div className='overflow-hidden rounded-lg shadow-xs bg-headerSliderLightColor dark:bg-headerSliderDarkColor'>
                    <table className='table-auto  w-full  rounded-lg'>
                        <thead >
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700  dark:text-gray-400 dark:bg-gray-800">
                                <th className={tableBorder}> Source d'alimentation</th>
                                <th className={tableBorder}> État </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={tableBorder}> Groupe</td>
                                <td className={tableBorder}>
                                    <div className="flex">
                                        <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={enabledGroupe}
                                                readOnly
                                            />
                                            <div
                                                className={switchButton}
                                            ></div>
                                            <span className="ml-2 text-sm font-medium  dark:textlightColor">
                                                {enabledGroupe ? "ON" : "OFF"}
                                            </span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={tableBorder}>SBEE</td>
                                <td className={tableBorder}>
                                    <div className="flex">
                                        <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={enabledSBEE}
                                                readOnly
                                            />
                                            <div
                                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"
                                            ></div>
                                            <span className="ml-2 text-sm font-medium dark:textlightColor">
                                                {enabledSBEE ? "ON" : "OFF"}
                                            </span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Source