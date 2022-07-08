import { BiMap } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { RiPriceTag2Line } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import React from 'react';
export default function Filtering(props)
{
    const [open,setOpen] = React.useState(null)  
    function change(word)
    {
        if(open==word)
        {
            setOpen(null)
        }
        else{
            setOpen(word)
        }
    }

    const [location,setLocation] = React.useState('any')
    const [type,setType] = React.useState('any')
    const [price,setPrice] = React.useState('any')

    return(
        <div className='container mx-auto px-6 py-[50px]'>
            <div className='shadow p-4 py-[20px] flex gap-3 lg:flex-row flex-col'>
            <div className="grid  md:grid-cols-3 gap-5 lg:w-[88%]">
                <div className='border border-b-[#0000001a] relative cursor-pointer rounded-[6px]' onClick={()=>change('location')}>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex gap-4 items-center'>
                            <BiMap className=' text-violet-800 text-[20px]'/>
                            <div>
                                <h3 className='text-[15px] font-bold'>{location}</h3>
                                <p className='text-[14px] text-[#747579]'>Select your place</p>
                            </div>
                        </div>
                        <MdKeyboardArrowDown className='text-[#747579]'/>
                    </div>
                    {   open=='location'?
                        <ul className='absolute flex flex-col gap-4 p-3 bg-white w-full shadow top-[68px] rounded-[12px] z-[10]'>
                            <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setLocation('any')}>any</li>
                            <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setLocation('United States')}>United States</li>
                            <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setLocation('Canada')}>Canada</li>
                        </ul>:''
                    }
                </div>
                <div className='border border-b-[#0000001a] relative cursor-pointer rounded-[6px]' onClick={()=>change('type')}>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex gap-4 items-center'>
                            <AiOutlineHome className=' text-violet-800 text-[20px]'/>
                            <div>
                                <h3 className='text-[15px] font-bold'>{type}</h3>
                                <p className='text-[14px] text-[#747579]'>choose property type</p>
                            </div>
                        </div>
                        <MdKeyboardArrowDown className='text-[#747579]'/>
                    </div>
                    {
                    open=='type'?
                    <ul className='absolute flex flex-col gap-4 p-3 bg-white w-full shadow top-[68px] rounded-[12px] z-[10]'>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setType('any')}>any</li>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setType('House')}>House</li>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setType('Apartment')}>Apartment</li>
                    </ul>:''
                    } 
                </div>
                <div className='border border-b-[#0000001a] relative cursor-pointer rounded-[6px]' onClick={()=>change('price')}>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex gap-4 items-center'>
                            <RiPriceTag2Line className=' text-violet-800 text-[20px]'/>
                            <div>
                                <h3 className='text-[15px] font-bold'>{price}</h3>
                                <p className='text-[14px] text-[#747579]'>choose Price Range</p>
                            </div>
                        </div>
                        <MdKeyboardArrowDown className='text-[#747579]'/>
                    </div>
                    {open=='price'?
                        <ul className='absolute flex flex-col gap-4 p-3 bg-white w-full shadow top-[68px] rounded-[12px] z-[10]'>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setPrice('any')}>any</li>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setPrice('50000 - 100000')}>50000 - 100000</li>
                        <li className='cursor-pointer text-[15px] text-[#747579]' onClick={()=>setPrice('100000 - 200000')}>100000 - 200000</li>
                    </ul>:''}
                </div>
            </div>
            <div className=' bg-violet-800 py-[12px] text-[22px] lg:w-[12%] rounded-[10px] text-white flex justify-center items-center cursor-pointer'
                onClick={()=>props.choosing(location,type,price)}>
                    <BiSearch/>
            </div>
            </div>
        </div>
    )
}