function getHeaderNav(block){
    var content = `<div class="flex justify-start">\
                        <div id="header" class="flex h-10 mt-8">\
                        <img src=${block.logo.filename} alt="logo" class="object-none w-48 mr-80">\
                        <div id="right-container" class="flex items-center justify-between ml-auto">\
                            <div id="menu-container" class="flex justify-between m-auto text-white">`
    block.menus.map(function(item, index){
        content += `<div id="menu-item-${index}" class="mx-3">${item.text.content[0].content[0].text}</div>`
    })
                    content += `</div>\
                                <button id="book-demo-btn-container" class="px-6 py-2 ml-14 font-bold text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">\
                                    ${block.book_demo_btn[0].label}\
                                </button>\
                            </div>\
                        </div>\
                    </div>`;
    return content;
}