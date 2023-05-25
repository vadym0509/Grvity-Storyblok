function getHeaderNav(block){
    var content = `<div class="flex justify-between h-10 mt-8 w-full">\
                        <div class="my-auto cursor-pointer">\
                            <img src=${block.logo.filename} alt="logo" class="object-none">\
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

function handleMobileNavBtnClick(){
    document.getElementById("mobile-nav").classList.toggle("hidden");
}