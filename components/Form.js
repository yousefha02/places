import Image from "next/image"
export default function Form(props)
{
    return(
        <div className="p-4 border border-[#747579] border-opacity-20 rounded-[4px]">
            <div className="flex gap-3 items-center mb-4">
                <div className="border border-[#747579] rounded-full flex justify-center items-center p-[2px] border-opacity-40">
                    <Image src={`/images/${props.place.userImage}`} width={82} height={82} alt="load.."/>
                </div>
                <div>
                    <h3>{props.place.userName}</h3>
                    <p>{props.place.job}</p>
                </div>
            </div>
            <form className="flex flex-col gap-3">
                <input type='text' placeholder="Name*" className="border border-[#747579] border-opacity-20 rounded-[4px] p-2"/>
                <input type='email' placeholder="Email*" className="border border-[#747579] border-opacity-20 rounded-[4px] p-2"/>
                <input type='text' placeholder="Phone*" className="border border-[#747579] border-opacity-20 rounded-[4px] p-2"/>
                <textarea className="border border-[#747579] border-opacity-20 rounded-[4px] p-2"
                placeholder="Hello I am intersted in modern apartment" rows={4}></textarea>
                <div className="grid sm:grid-cols-2 gap-2">
                    <button className="bg-violet-800 text-white rounded-[4px] py-4">Send Message</button>
                    <button className="border border-violet-800 text-violet-800 rounded-[4px] py-4">Call</button>
                </div>
            </form>
        </div>
    )
}