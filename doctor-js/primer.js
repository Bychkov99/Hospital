window.onload = function () {
    createDiagnosisTable(); // Вызываем функцию для создания таблицы

    // Функция для создания таблицы с данными о пациентах
    function createDiagnosisTable() {
        const tableContainer = document.getElementById("table-container");
        const table = document.createElement("table");
        table.border = "1";
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";

        // Заголовки таблицы
        const headers = ["Номер", "Ф.И.О.", "Дата рождения", "Симптомы", "Диагноз", "Лечение"];
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
            [1, "Иванов Ф.А.", "10.10.2005", "Головокружение", "Выбрать диагноз", ""],
            [2, "Бабкина Н.Л.", "14.12.1999", "Головная боль, усталость", "Выбрать диагноз", ""],
            [3, "Юшкина В.О.", "01.01.1968", "Кашель, высокая температура", "Выбрать диагноз", ""],
            [4, "Викторов Н.К.", "04.09.2002", "Тошнота, боль в животе", "Выбрать диагноз", ""],
            [5, "Мальцов Т.М.", "12.04.1978", "Боль в груди", "Выбрать диагноз", ""],
            [6, "Кругов Р.С.", "15.02.1969", "Нарушение дыхания", "Выбрать диагноз", ""],
            [7, "Качегаров С.О.", "26.07.1985", "Ломота в суставах", "Выбрать диагноз", ""],
            [8, "Иркутская И.О.", "19.12.1964", "Сыпь на коже", "Выбрать диагноз", ""],
            [9, "Высоцкий С.Н.", "20.12.1999", "Высокая температура, усталость", "Выбрать диагноз", ""],
            [10, "Грушев Я.А.", "05.07.1987", "Тошнота, головная боль", "Выбрать диагноз", ""],
            [11, "Патрушев В.В.", "11.11.2011", "Боль в горле, кашель", "Выбрать диагноз", ""]
        ];

        // Заполняем таблицу данными
        data.forEach((rowData, rowIndex) => {
            const row = document.createElement("tr");
            rowData.forEach((cellData, cellIndex) => {
                const cell = document.createElement("td");

                // Если это ячейка "Ф.И.О.", вставляем выпадающий список
                if (cellIndex === 1) {
                    const nameSelect = document.createElement("select");
                    const names = [
                        "Патрушев В.В.", "Грушев Я.А.", "Высоцкий С.Н.", "Иркутская И.О.", 
                        "Качегаров С.О.", "Кругов Р.С.", "Мальцов Т.М.", "Викторов Н.К.", 
                        "Юшкина В.О.", "Бабкина Н.Л.", "Иванов Ф.А."
                    ];
                    names.forEach(name => {
                        const option = document.createElement("option");
                        option.value = name;
                        option.textContent = name;
                        nameSelect.appendChild(option);
                    });
                    nameSelect.value = cellData;
                    cell.appendChild(nameSelect);
                }
                // Если это ячейка "Дата рождения", вставляем выпадающие списки для дня, месяца и года
                else if (cellIndex === 2) {
                    const daySelect = document.createElement("select");
                    const monthSelect = document.createElement("select");
                    const yearSelect = document.createElement("select");

                    // Заполнение дня (1-31)
                    for (let i = 1; i <= 31; i++) {
                        const option = document.createElement("option");
                        option.value = i < 10 ? "0" + i : i; // Форматируем день с ведущим нулем
                        option.textContent = option.value;
                        daySelect.appendChild(option);
                    }
                    
                    // Заполнение месяца (1-12)
                    for (let i = 1; i <= 12; i++) {
                        const option = document.createElement("option");
                        option.value = i < 10 ? "0" + i : i; // Форматируем месяц с ведущим нулем
                        option.textContent = option.value;
                        monthSelect.appendChild(option);
                    }

                    // Заполнение года (1950-2012)
                    for (let i = 1950; i <= 2012; i++) {
                        const option = document.createElement("option");
                        option.value = i;
                        option.textContent = i;
                        yearSelect.appendChild(option);
                    }

                    const birthdate = cellData.split(".");
                    daySelect.value = birthdate[0];
                    monthSelect.value = birthdate[1];
                    yearSelect.value = birthdate[2];

                    // Вставляем все три выпадающих списка в ячейку
                    cell.appendChild(daySelect);
                    cell.appendChild(monthSelect);
                    cell.appendChild(yearSelect);
                }
                // Если это ячейка "Симптомы", оставляем поле для ввода текста
                else if (cellIndex === 3) {
                    const symptomsInput = document.createElement("input");
                    symptomsInput.type = "text";
                    symptomsInput.value = cellData;
                    cell.appendChild(symptomsInput);
                }
                // Если это ячейка "Диагноз", вставляем выпадающий список с диагнозами
                else if (cellIndex === 4) {
                    const diagnosisSelect = document.createElement("select");
                    const diagnoses = [
                        "Стенокардия", "Острый бронхит", "Отравление", "Артрит", "Депрессия", "Сколиоз", "Цирроз печени", "Простатит", "Гастрит", "Ревматоидный артрит", "Хроническая почечная недостаточность", "Эпилепсия", "Тонзилит", "Мигрень", "Ангина", "Пневмония", "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ)", "Аллергический ринит", "Обострение хронического бронхита", "Хронический холецистит", "Остеохондроз", "Туберкулез", "Гипертония", "Инфаркт миокарда", "Тромбофлебит", "Диабет 2 типа", "Обострение язвы желудка", "Сахарный диабет 1 типа", "Грипп", "Панкреатит", "Псориаз", "Полинейропатия", "Анемия", "Варикозное расширение вен", "Проблемы с щитовидной железой", "Хроническая мигрень", "Менингит", "Целиакия", "Глоссит", "Дисбактериоз", "Трихомониаз",
                        "Кандидоз", "Заболевания желчного пузыря", "Болезнь Крона", "Колит", "Цистит", "Коксартроз", "Грыжа межпозвоночного диска", "Невралгия", "Геморрой", "Ринит", "Ишемическая болезнь сердца", "Психоз", "Лейкоз", "Лимфогранулематоз", "Вегетативно-сосудистая дистония", "Ларингит", "Паралич", "Пневмосклероз", "Глаукома", "Дистрофия сетчатки", "Астма", "Шизофрения", "Алкоголизм", "Кариес", "Ангина пекторис", "Заболевания печени", "Дегенеративные заболевания суставов", "Инсульт", "Склероз", "Гипотиреоз", "Гипертиреоз", "Парасимпатическая дисфункция", "Тонзиллофарингит", "Гломерулонефрит"
                    ];
                    diagnoses.forEach(diagnosis => {
                        const option = document.createElement("option");
                        option.value = diagnosis;
                        option.textContent = diagnosis;
                        diagnosisSelect.appendChild(option);
                    });
                    diagnosisSelect.value = cellData;
                    cell.appendChild(diagnosisSelect);
                }
                // Если это ячейка "Лечение", вставляем текстовое поле для ввода лечения
                else if (cellIndex === 5) {
                    const receptInput = document.createElement("input");
                    receptInput.type = "text";
                    receptInput.value = cellData;
                    cell.appendChild(receptInput);
                }

                // Оформление ячеек
                cell.style.padding = "8px";
                cell.style.border = "1px solid #000";
                row.appendChild(cell);
            });
            table.appendChild(row);
        });

        tableContainer.appendChild(table);
    }
};