'use strict';

const week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let myDate = new Date();
let curDay = myDate.getDay();

for (let i = 0; i < week.length; i++) {
    if (i === curDay) {
     week[i] = week[i].bold();
    }
    if (i === 6 || i === 0) {
      week[i] = week[i].italics();
    }
    if (i === curDay && i === 6 || i === 0) {
      week[i] = week[i].bold();
      week[i] = week[i].italics();
    }
    const div = document.createElement('div');
    div.innerHTML = week[i];
    document.body.appendChild(div);
    
}
