import Image from "next/image"
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import Link from 'next/link'
export default function Places(props)
{
    return(
        <div>
            <div className="container mx-auto px-6 pb-[40px]">
            {props.data.length>0?
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    props.data.map((box,index)=>
                    {
                        return(
                            <Link key={index+'3'} href={`/property/${box.id}`}>
                            <div className="shadow p-3 pb-5 cursor-pointer">
                                <div className="mb-4">
                                    <Image alt="load" src={`/images/${box.image}`} width="520px" height="520px"/>
                                </div>
                                <div className="flex gap-2 text-white text-[13px] mb-3">
                                    <span className="bg-[#00C897] rounded-full px-2">{box.type}</span>
                                    <span className="bg-violet-800 rounded-full px-2">{box.country}</span>
                                </div>
                                <h3 className="text-black font-bold text-[15px] mb-3">{box.title}</h3>
                                <div className="flex gap-2 items-center text-[#747579] text-[15px] mb-2">
                                    <span className="flex gap-1 items-center">
                                        <BiBed/>
                                        <span>{box.bed}</span>
                                    </span>
                                    <span className="flex gap-1 items-center">
                                        <BiBath/>
                                        <span>{box.bath}</span>
                                    </span>
                                </div>
                                <h4 className="text-violet-800 text-[15px] font-bold"><span>$ </span>{box.price}</h4>
                            </div>
                            </Link>
                        )
                    })}</div>:<h2 className="text-[#747579] text-[22px] text-center pb-[60px]">Sorry, nothing was found</h2>
                }
        </div>
        </div>
    )
}