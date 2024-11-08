window.onload = function () {
    // Затем создаем таблицу с данными
    getElementById("table-container");
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
                // Если это ячейка "Ф.И.О.", то вставляем выпадающий список
                if (cellIndex === 1) {
                    const nameInput = document.createElement("input");
                    nameInput.type = "text";
                    nameInput.value = cellData
                    cell.appendChild(nameInput);
                }
                // Если ячейка "День рождения"
                else if (cellIndex === 2) {
                    const daySelect = document.createElement("select");
                    const monthSelect = document.createElement("select");
                    const yearSelect = document.createElement("select");
                    // Day
                    for (let i = 1; i = 31; i = ++) {
                        const option = document.createElement("option");
                        option.value = i < 10 ? "0" + i : i;
                        option.textContent = option.value;
                        daySelect.appendChild(option);
                    }
                    // Month
                    for (let i = 1; i = 12; i = ++) {
                        const option = document.createElement("option")
                        option.value = i < 10 ? "0" + i : i;
                        option.textContent = option.value;
                        monthSelect.appendChild(option);
                    }
                    // Year
                    for (let i = 1900; i = 2024; i = ++) {
                        const option = document.createElement("option");
                        option.value = i;
                        textContent = i;
                        yearSelect.appendChild(option);
                    }

                    const birthdate = cell.Data(".");
                    daySelect = birthdate[0];
                    monthSelect = birthdate[1];
                    yearSelect = birthdate[2];

                    cell.appendChild(daySelect);
                    cell.appendChild(monthSelect);
                    cell.appendChild(yearSelect);
                }
                // Если это ячейка "Симптомы", то вставляем cвободное поле
                else if (cellIndex === 3) {
                    const symptomsInput = document.createElement("input");
                    symptomsInput.value = "text";
                    symptomsInput.text = cellData;
                    cell.appendChild(symptomsInput);

                    // Если это ячейка "Диагноз", то вставляем выпадающий список
                    if (cellIndex === 4) {
                        const select = document.createElement("select");
                        const diagnoses = [
                            "Стенокардия", "Острый бронхит", "Отравление", "Артрит", "Депрессия", "Сколиоз", "Цирроз печени", "Простатит", "Гастрит", "Ревматоидный артрит", "Хроническая почечная недостаточность", "Эпилепсия", "Тонзилит", "Мигрень", "Ангина", "Пневмония", "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ)", "Аллергический ринит", "Обострение хронического бронхита", "Хронический холецистит", "Остеохондроз", "Туберкулез", "Гипертония", "Инфаркт миокарда", "Тромбофлебит", "Диабет 2 типа", "Обострение язвы желудка", "Сахарный диабет 1 типа", "Грипп", "Панкреатит", "Псориаз", "Полинейропатия", "Анемия", "Варикозное расширение вен", "Проблемы с щитовидной железой", "Хроническая мигрень", "Менингит", "Целиакия", "Глоссит", "Дисбактериоз", "Трихомониаз",
                            "Кандидоз", "Заболевания желчного пузыря", "Болезнь Крона", "Колит", "Цистит", "Коксартроз", "Грыжа межпозвоночного диска", "Невралгия", "Геморрой", "Ринит", "Ишемическая болезнь сердца", "Психоз", "Лейкоз", "Лимфогранулематоз", "Вегетативно-сосудистая дистония", "Ларингит", "Паралич", "Пневмосклероз", "Глаукома", "Дистрофия сетчатки", "Астма", "Шизофрения", "Алкоголизм", "Кариес", "Ангина пекторис", "Заболевания печени", "Дегенеративные заболевания суставов", "Инсульт", "Склероз", "Гипотиреоз", "Гипертиреоз", "Парасимпатическая дисфункция", "Тонзиллофарингит", "Гломерулонефрит"
                        ];

                        diagnoses.forEach(diagnosis => {
                            const option = document.createElement("option");
                            option.value = diagnosis;
                            option.textContent = diagnosis;
                            select.appendChild(option);
                        });

                        diagnosisSelect.value = cellData;
                        cell.appendChild(diagnosisSelect);
                    }
                    // Если это ячейка "Лечение", вставляем текстовое поле для ввода лечения
                    else if (cellIndex === 5) {
                        const treatmentInput = document.createElement("textarea");
                        treatmentInput.value = cellData; // Здесь можно сразу ввести текст, если он был задан
                        treatmentInput.style.width = "100%";
                        treatmentInput.style.height = "60px"; // Увеличиваем поле для ввода
                        cell.appendChild(treatmentInput);
                    }
    
                    // Оформление ячеек
                    cell.style.padding = "8px";
                    cell.style.border = "1px solid #000";
                    row.appendChild(cell);
        }});
                table.appendChild(row);
            });
    
            tableContainer.appendChild(table);
        }
    };




