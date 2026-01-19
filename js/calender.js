const calendarBox = document.getElementById('calendar');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var firstDay = new Date(year, month, 1).getDay();
var finalDate = new Date(year, month + 1, 0).getDate();
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function createCalendar() {
    createHTML = `\
            <tr>\
            <th colspan="7" class"calendar-title">${monthName[month]}</th>\
            </tr>\
            <tr>\
            <th class="sun">SUN</th>\
            <th>MON</th>\
            <th>TUE</th>\
            <th>WED</th>\
            <th>THU</th>\
            <th>FRI</th>\
            <th class="sat">SAT</th>\
            </tr>`;
    // 初回の日までのhtmlを記述
    let date = 1;
    createHTML += '<tr>';
    for (let i = 0; i < firstDay; i++) {
        if (i == firstDay) {
            createHTML += `<td>${date}</td>`;
            date++;
            break;
        } else {
            createHTML += `<td></td>`;
        }
    }
    // 初回以降の最初の週の日付を記述
    for (let i = 7 - firstDay + 1; i <  7; i++) {
        createHTML += `<td>${date}</td>`;
        date++;
    }
    createHTML += `</tr>`;
    // それ以降の日付の記述
    while (date <= finalDate) {
        createHTML += '<tr>';
        for(let i = 0; i < 7; i++) {
            createHTML += `<td>${date}</td>`;
            date++;
        }
        createHTML += `</tr>`;
    }
    createHTML += '</tr>';
    return createHTML;
}

calendarBox.innerHTML = createCalendar();
