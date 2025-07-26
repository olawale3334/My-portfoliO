function Nav() {
    return(
        <>
        <header class="bg-[#2eb2d3] shadow-2xl text-white fixed top-0 right-0 left-0 z-10 p-3">
        <nav class="flex justify-between items-center mx-5 md:mx-32">
            <div>
                <span>DOLAPO</span>
            </div>
            <div class="hidden md:block">
            <div class="flex gap-5">
                <a href="">Home</a>
                <a href="">About me</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </div>
            
            </div>
            <div class="flex items-center md:hidden">
          <button
            id="menu-btn"
            class="inline-flex items-center justify-center p-2 rounded-md text-lime-50 hover:text-lime-200 focus:text-lime-300 z-[100] relative"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          class="fixed  left-0 right-0 top-[3rem]  shadow-md bg-[#121721] z-10 pt-16 hidden md:hidden"
        >
          <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">Services</a></li> 
                    <li><a href="">contact</a></li> 
                </ul>
          </div>
        </div>
        </nav>
    </header> 
        </>
    )
}
export default Nav