function getContactSections(body){
    var content = `<div class="absolute overflow-hidden inset-0 z-[-1]">
        <div class="absolute h-[60rem] bg-no-repeat bg-cover w-screen bg-[url('${body[3].background_image_1.filename}')]"></div>
    </div>`;
    content += getHeaderNav(body[0]);
    content += getStickyHeaderNav(body[0]);
    content += getDesktopMenuContent(body[1].items[0]);
    return content;
}