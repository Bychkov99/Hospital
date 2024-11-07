window.onload = function () {

    // Затем создаем таблицу с данными
    getElementById("table-container");

    // Функция для создания таблицы с данными о пациентах
    function createDiagnosisTable() 
    {

        const tableContainer = document.getElementById("table-container");
        const table = document.createElement("table");
        table.border = "1";
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";

        // Заголовки таблицы
        const headers = ["Номер", "Ф.И.О.", "Дата рождения", "Симптомы", "Диагноз", "Л"];
        const headerRow = document.createElement("tr");

        // Добавляем заголовки в таблицу
        headers.forEach(headerText => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerCell.style.padding = "8px";
            headerCell.style.border = "1px solid #000"; 
            headerRow.appendChild(headerCell);
        });

        table.appendChild(headerRow);

        // Данные о пациентах
        const data = [
          [1],
          [2],
          [3],
          [4],
          [5],
          [6],
          [7],
          [8],
          [9],
          [10],
          [11]
        ];

        // Заполняем таблицу данными
        data.forEach((rowData, rowIndex) => { 
            const row = document.createElement("tr");
            rowData.forEach((cellData, cellIndex) => {
                const cell = document.createElement("td");








         // Если это ячейка "Ф.И.О./ name", то вставляем выпадающий список
        if (cellIndex === 1) {
        const nameSelect = document.createElement("Select");
        const name = [
        "Патрушев В.В.", "Грушев Я.А.", "Высоцкий С.Н.", "Иркутская И.О.", 
        "Качегаров С.О.", "Кругов Р.С.", "Мальцов Т.М.", "Викторов Н.К.", 
        "Юшкина В.О.", "Бабкина Н.Л.", "Иванов Ф.А."
                    ];

                    name.forEach(name => {
                        const option = document.createElement("option");
                        option.value = name;
                        option.textContent = name;
                        select.appendChild(option);
                    });

                    select.value = cellData;
                    cell.appendChild(Select);
                } else {
                    cell.textContent = cellData; 
                }

                cell.style.padding = "8px";
                cell.style.border = "1px solid #000";
                row.appendChild(cell);
            });
            table.appendChild(row);
        });

        tableContainer.appendChild(table);
    }


     // Если это ячейка "Дата рождения", то вставляем выпадающий список
     if (cellIndex === 2) {
        const select = document.createElement("select");
        const date = [
        "Патрушев В.В.", "Грушев Я.А.", "Высоцкий С.Н.", "Иркутская И.О.", 
        "Качегаров С.О.", "Кругов Р.С.", "Мальцов Т.М.", "Викторов Н.К.", 
        "Юшкина В.О.", "Бабкина Н.Л.", "Иванов Ф.А."
                    ];

                    name.forEach(name => {
                        const option = document.createElement("option");
                        option.value = name;
                        option.textContent = name;
                        select.appendChild(option);
                    });

                    select.value = cellData;
                    cell.appendChild(select);
                } else {
                    cell.textContent = cellData; 
                }

                cell.style.padding = "8px";
                cell.style.border = "1px solid #000";
                row.appendChild(cell);
            });
            table.appendChild(row);
        });

        tableContainer.appendChild(table);
    }

    


























                // Если это ячейка "Диагноз", то вставляем выпадающий список
                if (cellIndex === 4) {
                    const select = document.createElement("select");
                    const diagnoses = [
                        "Анемия", "Мигрень", "Острый аппендицит", "Инфаркт миокарда", 
                        "Артериальная гипертензия", "Бронхит", "Грипп", "Пневмония", 
                        "Стенокардия", "Острый бронхит", "Отравление", "Артрит", "Депрессия", 
                        "Сколиоз", "Цирроз печени", "Простатит", "Гастрит", "Ревматоидный артрит", 
                        "Хроническая почечная недостаточность", "Эпилепсия", "Тонзилит"
                    ];

                    diagnoses.forEach(diagnosis => {
                        const option = document.createElement("option");
                        option.value = diagnosis;
                        option.textContent = diagnosis;
                        select.appendChild(option);
                    });

                    select.value = cellData;
                    cell.appendChild(select);
                } else {
                    cell.textContent = cellData; 
                }

                cell.style.padding = "8px";
                cell.style.border = "1px solid #000";
                row.appendChild(cell);
            };
            table.appendChild(row);
        };

        tableContainer.appendChild(table);
    
    


