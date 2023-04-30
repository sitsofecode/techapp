import React, { useState } from 'react'
import Chart from "react-apexcharts";


export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
    return (
        <div className="flex ">
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
                className="mx-1"
            />
            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    )
}

function Dashboard() {
    const [data, setData] = useState([
        {
            name: "intensite",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
            checked: true,
        },
        {
            name: "tension",
            data: [30, 46, 45, 57, 41, 66, 77, 98],
            checked: true,
        },
        {
            name: "temperature",
            data: [20, 36, 39, 47, 51, 64, 57, 88],
            checked: true,
        },
        {
            name: "Puissance",
            data: [20, 32, 37, 38, 41, 74, 67, 88],
            checked: false,
        },
        {
            name: "Energie",
            data: [10, 26, 49, 57, 41, 44, 87, 88],
            checked: false,
        }
    ]);

    const [chart, setChart] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            stroke: {
                curve: 'smooth',
                        }
        },
        series: data,
    }
    );

    const updateChecked = (index) => {
        console.log(index)
        setData(
            data.map((item, currentIndex) =>
                currentIndex === index ? { ...item, checked: !item.checked, data: item.checked && [] } : item,
            ));
    }
    console.log(data)

    const list = data?.map((items, index) => {
        return (
            <div key={index} className='flex text-xs'>
                <Checkbox index={index} isChecked={items.checked} checkHandler={() => updateChecked(index)} label={items.name} />
            </div>
        );
    })
    return (
        <div className='p-6 mb-10'>
            <h1 className='text-xl font-bold dark:text-lightColor '>Dashboard</h1>
            <div className=' block space-y-5 lg:space-y-0 lg:flex p-5 space-x-5'>
                <div className='rounded-lg p-4 bg-headerSliderLightColor dark:bg-headerSliderDarkColor '>
                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        width="500"
                    />
                    <div className='flex space-x-5'>
                        {list}
                    </div> 
                </div>
                <div className='rounded-lg p-4 bg-headerSliderLightColor dark:bg-headerSliderDarkColor '>
                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        width="500"
                    />
                    <div className='flex space-x-5'>
                        {list}
                    </div>
                </div>
            </div>
            <div className=' flex justify-center p-6 space-x-5'>
                <div className=' rounded-lg p-4 bg-headerSliderLightColor dark:bg-headerSliderDarkColor '>
                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        width="500"
                    />
                    <div className='flex space-x-5'>
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard