function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
        document.getElementById("main").style.marginLeft = "0";
    } else {
        sidebar.classList.add("show");
        document.getElementById("main").style.marginLeft = "20%";
    }
}