import React from 'react'
import { Temperature } from 'react-environment-chart';

function Comparatif() {
    const data = [
        {
            nom: "Phase 1",
            tension: 45,
            intensite: 50,
            temperarure: 10,
            id: 1
        },
        {
            nom: "Phase 2",
            tension: 25,
            intensite: 30,
            temperarure: 20,
            id: 2
        },
        {
            nom: "Phase 3",
            tension: 30,
            intensite: 22,
            temperarure: 30,
            id: 3
        }
    ]
    const table = data.map((items) => {
        return (
            <tr key={items.id} className=' text-left tracking-wide border-b dark:border-gray-700'>
                <td className="px-4 py-3"> <input type='checkbox' /></td>
                <td className="px-4 py-3">{items.nom}</td>
                <td className="px-4 py-3">{items.tension}</td>
                <td className="px-4 py-3">{items.intensite}</td>
                <td className="px-4 py-3">{items.temperarure}</td>
            </tr>
        )
    })

    const temperature = data.map((items) => {
        return (
            <div key={items.id} className='m-2 w-full p-3 rounded-lg shadow-xs bg-headerSliderLightColor dark:bg-headerSliderDarkColor'>
                <h1 className='text-sm mb-2 font-bold dark:text-lightColor '>{items.nom}</h1>
                <Temperature value={items.temperarure} />
            </div>
        )
    })
    return (
        <div className='p-6 mb-10'>
            <h1 className='text-xl font-bold dark:text-lightColor '>Tableau Comparatif</h1>
            <div className='m-5 mr-10 w-full mb-8 overflow-hidden rounded-lg shadow-xs bg-headerSliderLightColor dark:bg-headerSliderDarkColor'>
                <table className=' w-full whitespace-no-wrap'>
                    <thead>
                        <tr className="text-xs  rounded-lgfont-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700  dark:text-gray-400 dark:bg-gray-800">
                            <th></th>
                            <th className="px-4 py-3">Phase</th>
                            <th className="px-4 py-3">Tension</th>
                            <th className="px-4 py-3">Intensite</th>
                            <th className="px-4 py-3">Temperature</th>
                        </tr>
                    </thead>
                    <tbody className=' divide-y'>
                        {table}
                    </tbody>
                </table>
            </div>
            <h1 className='text-xl font-bold dark:text-lightColor '>
                Temperature
            </h1>
            <div className='flex'>
                {temperature}
            </div>
        </div>
    )
}

export default Comparatif