function getHeaderNav(block){
    var content = `<div class="flex justify-between h-10 mt-8 w-full">\
                        <div class="my-auto cursor-pointer">\
                            <img src=${block.white_logo.filename} alt="logo" class="object-none">\
                        </div>\
                        <div class="flex">\
                            <div class="flex justify-between my-auto text-white">`
    block.nav_items.map(function(item, index){
        content += `<div id="menu-item-${index}" class="hidden cursor-pointer lg:flex mx-3 font-semibold hover:text-gray-200">${item.label}</div>`
    })
                content += `</div>\
                            <button class="hidden cursor-pointer lg:block px-6 py-2 ml-14 font-bold text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">\
                                ${block.book_demo_btn[0].label}\
                            </button>\
                            <button onclick="handleMobileNavBtnClick()" class="lg:hidden cursor-pointer px-6 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">\
                                <img src=${block.menu_btn_mobile[0].icon.filename} alt=${block.menu_btn_mobile[0].icon.alt}>
                            </button>
                        </div>\
                    </div>`;
    return content;
}

function getStickyHeaderNav(block){
    var content = `<div id="sticky-header-nav" class="fixed transition ease-in-out duration-500 -translate-y-[90px] left-0 z-[1] top-0 flex justify-center bg-white w-full drop-shadow-xl h--xl">
    <div class="flex py-[14px] justify-between mx-8 md:mx-0 w-full md:w-[719px] lg:w-[960px] xl:w-[1048px]">\
                        <div class="my-auto cursor-pointer">\
                            <img src=${block.black_logo.filename} alt="logo" class="object-none">\
                        </div>\
                        <div class="flex">\
                            <div class="flex justify-between my-auto text-[#323B4B]">`
    block.nav_items.map(function(item, index){
        content += `<div id="sticky-menu-item-${index}" class="hidden cursor-pointer lg:flex mx-3 font-semibold hover:text-dark-200">${item.label}</div>`
    })
                content += `</div>\
                            <button class="hidden cursor-pointer lg:block px-6 py-2 ml-14 font-bold text-white rounded-full bg-blue-500 hover:bg-opacity-80">\
                                ${block.book_demo_btn[0].label}\
                            </button>\
                            <button onclick="handleStickyMobileNavBtnClick()" class="lg:hidden cursor-pointer px-6 py-2 rounded-full bg-blue-500 hover:bg-opacity-80">\
                                <img src=${block.menu_btn_mobile[0].icon.filename} alt=${block.menu_btn_mobile[0].icon.alt}>
                            </button>
                        </div>\
                    </div></div>`;
    return content;
}

function getDesktopMenuContent(block){
    var content = `<div id="menu-content-container-for-desktop" class="fixed hidden z-[1]"><div class="px-2 left-0 rounded-[20px] drop-shadow-xl w-[625px] bg-white">
                        <div class="relative -top-[10px] left-[74px]"><svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L20.4593 12H0.540708L10.5 0Z" fill="white"/>
                        </svg></div>
                        <div class="flex flex-wrap">`
    block.links.map(function(link, index){
        content += `<div class="w-1/2 py-4 px-2">
                        <div class="font-semibold text-[#323B4B]">${link.text}</div>
                        <div class="text-sm text-[#8A94A6]">${link.description}</div>
                    </div>`;
    })
        content +=    `</div>
                    </div></div>`;
    return content;
}

function handleMobileNavBtnClick(){
    document.getElementById("mobile-nav").classList.toggle("hidden");
    document.getElementById("mobile-nav").classList.remove("fixed");
    document.getElementById("mobile-nav").classList.add("absolute");
}

function handleStickyMobileNavBtnClick(){
    document.getElementById("mobile-nav").classList.toggle("hidden");
    document.getElementById("mobile-nav").classList.add("fixed");
    document.getElementById("mobile-nav").classList.remove("absolute");
}