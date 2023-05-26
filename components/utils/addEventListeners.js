function addEventListeners(){
    addmenuItemHoverEvent("menu-item-0", "24px", "64px");
    addmenuItemHoverEvent("sticky-menu-item-0", "44px", "42px");
}

function addmenuItemHoverEvent(targetId, topPadding, top){
    document.getElementById(targetId).addEventListener("mouseenter", function(){
        document.getElementById("menu-content-container-for-desktop").style.display = "block";
        document.getElementById("menu-content-container-for-desktop").style.left = `${document.getElementById(targetId).offsetLeft - 60}px`;
        document.getElementById("menu-content-container-for-desktop").style.paddingTop = topPadding;
        document.getElementById("menu-content-container-for-desktop").style.top = top;
    });
    document.getElementById("menu-content-container-for-desktop").addEventListener("mousemove", function(){
        document.getElementById("menu-content-container-for-desktop").style.display = "block";
    })
    document.getElementById("menu-content-container-for-desktop").addEventListener("mouseout", function(){
        document.getElementById("menu-content-container-for-desktop").style.display = "none";
    })
    document.getElementById(targetId).addEventListener("mouseout", function(){document.getElementById("menu-content-container-for-desktop").style.display = "none"});
}