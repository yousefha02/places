import {useRouter} from 'next/router'
import { useState,React, useEffect, Suspense } from 'react'
import Details from '../../components/Details'
import Form from '../../components/Form'
import MainDet from '../../components/mainDet'
import placesdata from '../../data/placesdata'
export default function Propert()
{
    const router = useRouter()
    const {placeId} = router.query
    const place = placesdata.filter(pl=>pl.id==placeId)[0]

    return(
        <Suspense fallback="<h1>Loading...</h1>">
            <div>
                <div className="conatiner mx-auto px-6 py-[30px]">
                    <div>
                        <h2>
                        {
                            place && 
                            <div>  
                                <MainDet place={place}/>                             
                                <div className='flex gap-4 lg:flex-row flex-col'>
                                    <div className='lg:w-[65%]'>
                                        <Details place={place}/>
                                    </div>
                                    <div className='lg:w-[35%]'>
                                        <Form place={place}/>
                                    </div>
                                </div>
                            </div>
                        }
                        </h2>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
