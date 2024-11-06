





































// список для администратора с палатами
window.onload = function () {
    addWard(11);
    createRoomList();

function createRoomList() {
    const roomSelect = document.getElementById("roomContainer");
    const select = document.createElement("select");
    select.id = "roomSelect";

    for (let i = 1; i <= 11; i++) {
    
        const option = document.createElement("option");
        option.value =`Палата ${i}`;
        option.textContent =`Палата ${i}`;
        select.appendChild(option);
    }
    roomContainer.appendChild(select);
    {
function selectRoom(){
    const rommSelect = document.getElementById("roomSelect");
    const selectedRoom = roomSelect.options [roomSelect.selectIndex].text;
    document.getElementById("selectedRoom"). innerText = `Выбранная палата: ${selectedRoom}`;
}
    }
}

// палата 11
function addWard(wardNumber) {
    const wardList = document.getElementById("wardList");
    const newListItem = document.createElement("Ii");

    newListItem.textContent = "Палата " + wardNumber;
    wardList.appendChild(newListItem);
}
};