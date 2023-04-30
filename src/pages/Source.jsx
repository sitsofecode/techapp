import React, { useEffect, useState } from 'react'

function Source() {
    const [sourceAlimentation, setSourceAlimentation] = useState('sbee');
    useEffect(()=>{
        const groupe = document.getElementById("groupe")
        const sbee = document.getElementById("sbee")
        if(sourceAlimentation==='groupe'){
            groupe.classList.add('bg-violet-600');
            sbee.classList.remove('bg-violet-600')

        }else{
            sbee.classList.add('bg-violet-600')
            groupe.classList.remove('bg-violet-600')

        }
    })

    return (
        <div className='p-6 mb-10'>
            <h1 className='text-xl font-bold dark:text-lightColor '>Source</h1>
            <div className='mt-5'>
                <p> Source d'alimentation </p>
                <div className='flex justify-center p-4 mt-10'>
                    <div className='p-0 border flex rounded-xl'>
                        <div className='  rounded-xl p-4 w-24 text-center' id="groupe">GROUPE</div>
                        <div className=' p-4 rounded-xl w-24 text-center' id="sbee"> SBEE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Source