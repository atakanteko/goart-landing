
const WaitList = () => {
    return(
        <div className="sm:mt-5">
            <div className="bg-gradient-to-r from-neutral-500 to-neutral-700
                            flex flex-col items-center
                            rounded-xl px-3 py-6

                            sm:w-waitList sm:h-waitList ">
                <span className="text-white text-base font-semibold">Join Waitlist</span>
                <p className="mt-6 text-white text-center text-sm font-normal">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.</p>
                <input type="text" className="block w-full mt-12 px-5 py-3.5 bg-white rounded-md placeholder:text-base placeholder:text-gray-500 font-extralight" placeholder="Enter your email"/>
                <button className="mt-6 w-waitList-btn h-waitList-btn text-white font-medium text-base text-center px-6 py-3.5 bg-primary-500 rounded-md">JOIN</button>
            </div>
        </div>
    )
}

export default WaitList;