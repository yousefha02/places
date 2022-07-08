import Image from "next/image"
export default function House()
{
    return(
        <div>
            <div className="container mx-auto px-6 grid md:grid-cols-2 py-[40px] items-center gap-8 sm:gap-10">
                <div>
                    <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[38px] sm:leading-[48px] mb-3">
                        <span className="text-violet-800">Rent </span> 
                        Your Dream House With Us
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-[#747579]">
                        It is a long established fact that a reader will be distracted by the readable content of a page that
                    </p>
                </div>
                <div className="text-right">
                    <Image src="/images/house-banner.png" width="570px" height='570px' alt="loading.."/>
                </div>
            </div>
        </div>
    )
}