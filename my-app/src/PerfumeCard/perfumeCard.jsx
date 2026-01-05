
export default function PerfumeCard() {
    return(
        <div className="bg-white w-max mx-auto rounded-xl">
            <div className="grid md:grid-flow-col  gap-5 items-center justify-center">
                <div className="flex items-center justify-center">
                    <img src="/images/chanelperfume.jpg" alt="" className="w-[268px] rounded-bl-xl rounded-tl-xl" />
                </div>

                <div className="flex flex-col p-6 w-[301px]">
                    <div>
                        <div className="p-2">
                            <p className="text-xs text-gray-400 font-sans">PERFUME</p>
                        </div>
                        <div className="p-2">
                            <h1 className="text-2xl text-black font-serif">Gabrielle Essence Eau De Parfume</h1>
                        </div>
                        <div className="p-2">
                            <p className="text-[14px] text-black">A floral, solar and voluptuous interpretation composed by Olivier Polge. Perfume-Creator for the House of CHANEL.</p>
                        </div>
                     </div>
                 <div>
                        <div>
                            <p className="text-green-700 text-2xl font-serif font-bold">$149.99 <span className="pl-6 text-xs text-gray-500 font-bold font-sans line-through">$169.99</span></p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center justify-center mt-5 p-3 bg-green-700 rounded-xl text-white align-text-top hover:cursor-pointer hover:bg-green-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    )
}