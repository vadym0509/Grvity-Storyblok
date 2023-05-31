function getTabsContainer(block){
    var content = `<div class="mt-24 w-full">
                    <div class="inline-flex justify-start gap-x-7">`;
    block.blocks.map(function(block, index){
        content += `<button onclick="handleTabOnclick(event)" tab="${index}" class="tabs h-24 lg:py-8 px-4 sm:px-16 font-bold text-[1.625rem] leading-[2.25rem] rounded-full ${block.is_active ? "text-white bg-[#5B7FFF]" : "bg-[#F9F9F9] text-[#323B4B]"}">${block.heading}</button>`;
    })
        content += `</div>`;
    block.blocks.map(function(block, index){
        content += `<div class="tab-content mt-4 w-full ${block.is_active ? "block" : "hidden"} my-6 w-1/2 flex justify-between">`
        content += getTabContents(block.content);
        content += `</div>`
    })
        
    content += `</div>`;
    return content;
}

function handleTabOnclick(event){
    var tabs = document.querySelectorAll(".tabs");
    var val = event.target.getAttribute("tab");
    if(val != null){
        tabs.forEach((each, key) => {
            each.classList.remove("text-white", "bg-[#5B7FFF]");
            if(key == val){
                each.classList.remove("bg-[#F9F9F9]", "text-[#323B4B]");
            }else{
                each.classList.add("bg-[#F9F9F9]", "text-[#323B4B]");
            }
        })
        tabs[val].classList.add("text-white", "bg-[#5B7FFF]")
    }
}

function getTabContents(block){
    var content = `<div class="w-full flex flex-wrap">`;
    block.map(function(item, index){
        content += `<div class="w-full lg:w-1/2 mt-12 inline-flex">
                        <div class="w-[131px] lg:w-1/4 mr-12 h-[131px] p-[40px] bg-[#5B7FFF] rounded-[23px]"><img class="object-cover" src="${item.icon.filename}"></div>
                        <div class="my-auto w-3/4">
                            <div class="font-bold text-[1.625rem] text-[#323B4B]">${item.title}</div>
                            <div class="mt-4 text-lg leading-7 text-[#323B4B]">${item.description}</div>
                        </div>
                    </div>`
    })
    content += `</div>`;
    console.log(content)
    return content;
}