export default function MainDet(props)
{
return(
<div className="flex lg:justify-between lg:items-center lg:flex-row flex-col">
    <div className='flex lg:items-center lg:justify-between lg:flex-row flex-col mb-3 lg:w-[65%]'>
        <div className="mb-2">
            <h2 className='text-[20px] sm:text-[22px] font-bold text-black mb-1'>{props.place.type} {props.place.id}</h2>
            <h3 className="text-[15px] sm:text-[16px]">{props.place.title}</h3>
        </div>
        <div className="flex gap-2 text-white text-[14px] lg:mb-3">
            <span className="bg-[#00C897] rounded-full px-3">{props.place.type}</span>
            <span className="bg-violet-800 rounded-full px-3">{props.place.country}</span>
        </div>
    </div>
    <div className="text-[20px] text-violet-800 font-bold mb-2">
        <span>$</span>{props.place.price}
    </div>
</div>
)
}