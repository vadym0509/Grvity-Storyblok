function getHeaderNav(block){
    var content = `<div class="flex justify-between h-10 mt-8 w-full">\
                        <div class="my-auto cursor-pointer">\
                            <img src=${block.white_logo.filename} alt="logo" class="object-none">\
                        </div>\
                        <div class="flex">\
                            <div class="flex justify-between my-auto text-white">`
    block.nav_items.map(function(item, index){
        content += `<div key="menu-item-${index}" class="hidden cursor-pointer lg:flex mx-3 font-semibold hover:text-gray-200">${item.label}</div>`
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

function getFixedHeaderNav(block){
    var content = `<div id="fixed-header-nav" class="fixed transition ease-in-out duration-500 -translate-y-[90px] left-0 z-[1] top-0 flex justify-center bg-white w-full drop-shadow-xl">
    <div class="flex py-[14px] justify-between mx-8 md:mx-0 w-full md:w-[719px] lg:w-[960px] xl:w-[1048px]">\
                        <div class="my-auto cursor-pointer">\
                            <img src=${block.black_logo.filename} alt="logo" class="object-none">\
                        </div>\
                        <div class="flex">\
                            <div class="flex justify-between my-auto text-[#323B4B]">`
    block.nav_items.map(function(item, index){
        content += `<div key="menu-item-${index}" class="hidden cursor-pointer lg:flex mx-3 font-semibold hover:text-dark-200">${item.label}</div>`
    })
                content += `</div>\
                            <button class="hidden cursor-pointer lg:block px-6 py-2 ml-14 font-bold text-white rounded-full bg-blue-500 hover:bg-opacity-80">\
                                ${block.book_demo_btn[0].label}\
                            </button>\
                            <button onclick="handleFixedMobileNavBtnClick()" class="lg:hidden cursor-pointer px-6 py-2 rounded-full bg-blue-500 hover:bg-opacity-80">\
                                <img src=${block.menu_btn_mobile[0].icon.filename} alt=${block.menu_btn_mobile[0].icon.alt}>
                            </button>
                        </div>\
                    </div></div>`;
    return content;
}

function handleMobileNavBtnClick(){
    document.getElementById("mobile-nav").classList.toggle("hidden");
    document.getElementById("mobile-nav").classList.remove("fixed");
    document.getElementById("mobile-nav").classList.add("absolute");
}

function handleFixedMobileNavBtnClick(){
    document.getElementById("mobile-nav").classList.toggle("hidden");
    document.getElementById("mobile-nav").classList.add("fixed");
    document.getElementById("mobile-nav").classList.remove("absolute");
}