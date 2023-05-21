function getHeaderNav(block){
    var content = `<div class="flex mr-8">\
                        <div class="flex h-10 mt-8 justify-between min-[1920px]:justify-center w-full xl:w-10/12"><div class="my-auto ml-0 min-[1920px]:mr-80">\
                            <img src=${block.logo.filename} alt="logo" class="object-none w-48">\
                        </div>\
                        <div class="flex">\
                            <div class="flex justify-between my-auto text-white">`
    block.nav_items.map(function(item, index){
        content += `<div key="menu-item-${index}" class="hidden lg:flex mx-3">${item.label}</div>`
    })
                    content += `</div>\
                                <button class="hidden lg:block px-6 py-2 ml-14 font-bold text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">\
                                    ${block.book_demo_btn[0].label}\
                                </button>\
                                <button class="lg:hidden px-6 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">\
                                    <img src=${block.menu_btn_mobile[0].icon.filename} alt=${block.menu_btn_mobile[0].icon.alt}>
                                </button>
                            </div>\
                        </div>\
                    </div>`;
    return content;
}