
const WaitList = () => {
    return(
        <div className="sm:mt-5">
            <div className="bg-gradient-to-r from-neutral-500 to-neutral-700
                            flex flex-col items-center
                            rounded-xl
                            px-3 py-6
                            sm:w-waitList-sm sm:h-waitList-sm
                            xl:w-waitList-xl xl:h-waitList-xl
                            md:px-3 md:py-6
                            lg:px-6 lg:py-6
                            xl:mb-waitList-margin-bottom
                            ">

                <span className="text-white text-base font-semibold
                                 xl:font-extrabold xl:text-4xl xl:mt-6
                                  ">
                    Join Waitlist
                </span>
                <p className="mt-6 text-white text-center text-sm font-normal
                              lg:px-16 lg:text-center
                              xl:px-16 xl:text-center xl:w-waitList-text-xl xl:text-lg xl:font-normal xl:text-meet-our-team-name-color
                              ">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.
                </p>
                <div className="sm:flex sm:flex-col sm:items-center
                                md:flex md:flex-col md:items-center
                                lg:flex lg:flex-row lg:items-end
                                xl:flex xl:flex-row xl:items-end
                                ">

                    <input type="text"
                           placeholder="Enter your email"
                           className="mt-12 block
                                      h-waitList-input-height
                                      px-5
                                      py-3.5
                                      bg-white
                                      rounded-md
                                      font-extralight
                                      placeholder:text-base placeholder:text-gray-500
                                      sm:w-waitList-input-width
                                      md:w-waitList-input-width
                                      lg:w-waitList-input-width-large
                                      xl:w-waitList-input-width-large

                                      lg:mr-8
                                      xl:mr-8
                                      "/>
                    <button className="mt-6
                                       w-waitList-btn
                                       h-waitList-btn
                                       text-white
                                       font-medium
                                       text-base
                                       text-center
                                       px-6
                                       py-3.5
                                       bg-primary-500
                                       rounded-md
                                       xl:w-waitList-input-xl

                                       ">JOIN</button>
                </div>
            </div>
        </div>
    )
}

export default WaitList;