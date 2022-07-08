import Image from "next/dist/client/image"
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
export default function Details(props)
{
    return(
        <div>
            <Image src={`/images/${props.place.primaryImage}`} width={1000} height={583} alt="loading..."/>
            <div className="flex gap-6 items-center mb-2 text-violet-800 text-[18px] mt-2">
                <span className="flex gap-1 items-center">
                    <BiBed/>
                    <span className="text-[16px]">{props.place.bed}</span>
                </span>
                <span className="flex gap-1 items-center">
                    <BiBath/>
                    <span className="text-[16px]">{props.place.bath}</span>
                    </span>
            </div>
            <p className="text-[14px] sm:text-[15px]">
                {props.place.desc}
            </p>
        </div>
    )
}