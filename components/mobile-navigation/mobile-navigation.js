function getMobileNavigation(body) {
    var content = `<div id="mobile-nav" class="absolute hidden lg:hidden top-4 right-5 p-4 w-[20.5rem] drop-shadow-2xl rounded-[10px] bg-white z-[1]">
                        <div class="flex justify-between w-full py-3">
                            <a href="../home/home.html" class="cursor-pointer w-[10.31rem] h-4"><img src="${body.logo.filename}" alt="${body.logo.alt}"></a>
                            <button onclick="handleMobileNavBtnClick()" class="w-4 h-4"><img src="${body.close_icon.filename}" alt="${body.close_icon.alt}"></button>
                        </div>
                        <div class="flex flex-col mt-4">`;
            body.items.map(function(item, index){
                content += `<div id="mobile-nav-accordion-item-${index}" ${item.links.length > 0 ? `onclick="document.getElementById('mobile-nav-links-container-${index}').classList.toggle('hidden');document.getElementById('mobile-nav-accordion-item-${index}').classList.toggle('bg-pale-blue');document.getElementById('mobile-nav-accordion-down-icon-${index}').classList.toggle('hidden');document.getElementById('mobile-nav-accordion-up-icon-${index}').classList.toggle('hidden');"` : ``}  class="w-full px-4 pt-4 flex justify-between cursor-pointer rounded-t-[10px]">
                                <div class="w-full font-semibold text-lg text-steel-blue">${item.label}</div>
                                ${item.links.length > 0 ?
                                `<button class="" id="mobile-nav-accordion-down-icon-${index}"><img src="${item.accordion_icon_down.filename}" alt="${item.accordion_icon_down.alt}"></button>
                                <button class="hidden" id="mobile-nav-accordion-up-icon-${index}"><img src="${item.accordion_icon_up.filename}" alt="${item.accordion_icon_up.alt}"></button>` : ""}
                            </div>`;
                if(item.links.length > 0){
                    content += `<div id="mobile-nav-links-container-${index}" class="hidden flex flex-col p-4 gap-y-4 bg-pale-blue rounded-b-[10px]"><hr>`;
                    item.links.map(function(link, index){
                        content += `<div>
                                        <div class="font-semibold cursor-pointer text-lg text-midnight-blue">${link.text}</div>
                                        <div class="text-sm text-gray">${link.description}</div>
                                    </div>`;
                    })
                    content += `</div>`;
                }
            })                   
            content += `</div>
                    </div>`;
    return content;
}