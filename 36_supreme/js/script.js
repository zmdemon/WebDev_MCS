window.addEventListener("load", function () {
    const dateSpan = document.querySelector(".date-span");
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    dateSpan.innerHTML = mm + '/' + dd + '/' + yyyy;

})