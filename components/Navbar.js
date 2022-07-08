import Image from 'next/image'
import Link from 'next/link'
export default function Navbar()
{
    return(
        <div className="border border-b-[#0000001a]">
            <div className='container mx-auto px-6 py-[8px] flex items-center'>
                <Link href={'/'}>
                    <div className='cursor-pointer'>
                        <Image src="/images/logo.svg" width="143px" height="36px" alt="loading..."/>
                    </div>
                </Link>
            </div>
        </div>
    )
}