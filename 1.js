
function addWard(wardNumber) {
    const wardList = document.getElementById("wardList");
    const newListItem = document.createElement("Ii");

    newListItem.textContent = "Палата " + wardNumber;
    wardList.appendChild(newListItem);
}
window.onload = function () {
    addWard(11);
}