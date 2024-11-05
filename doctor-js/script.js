window.onload = function () {
    document.getElementById("table-container")

const container = document.getElementById("table-container");
const table = document.createElement("table");
table.border = "1";
table.style.width = "100%";
table.style.borderCollapse = "collapse";
const headerRow = document.createElement("tr");
const headers = ["Номер", "Ф.И.О.", "Дата рождения", "Симптомы","Диагноз"];
headers.forEach(headerText => {
const header = document.createElement("th");
header.textContent = headerText;
header.style.padding = "8px";
headerRow.appendChild(header);
});
const a = new Date();
table.appendChild(headerRow);
const data = [
    [1,"Иванов Ф.А.","10.10.2005","Головокружение","Анемия"],
    [2,"Бабкина Н.Л.","14.12.1999","Головная боль, усталость","Мигрень"],
    [3,"Юшкина В.О.","01.01.1968","Кашель,высокая температура","Бронхит"],
    [4,"Викторов Н.К.","04.09.2002","Тошнота,боль в животе","Гастрит"],
    [5,"Мальцов Т.М.","12.04.1978","Боль в груди","Стенокардия"],
    [6,"Кругов Р.С.","15.02.1969","Нарушение дыхания","Астма"],
    [7,"Качегаров С.О.","26.07.1985","Ломота в суставах","Артрит"],
    [8,"Иркутская И.О.","19.12.1964","Сыпь на коже","Дерматит"],
    [9,"Высоцкий С.Н.","20.12.1999","Высокая температара, усталлость","Грипп"],
    [10,"Грушев Я.А.","05.07.1987","Тошнота, головная боль","Отравление"],
    [11,"Патрушев В.В.","11.11.2011","Боль в горле, кашель","Тонзиллит"]
            ];

    data.forEach(rowData => { 
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            cell.style.padding = "8px";
            cell.style.border = "1px solid #000";
            row.appendChild(cell);
    });
    table.appendChild(row);
});
 container.appendChild(table);
}
