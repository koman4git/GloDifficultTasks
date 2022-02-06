'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {
    let html = week[i],
        myDate = new Date(),
        currentDay = myDate.getDate();

    if (i == currentDay) {
      html = html.bold();
    }
    else if (i > 4 && i < 7 && i !== currentDay) {
      html = html.italics();
    }
    
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
}