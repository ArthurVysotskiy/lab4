
 function getCookie(byname)
 {byname=byname+"=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname)+0;
    if((fromN) != -1)
        {fromN +=nlen
         toN=document.cookie.indexOf(";",fromN)+0;
         if(toN == -1) {toN=document.cookie.length;}
         return unescape(document.cookie.substring(fromN,toN));
        }
    return null;
   }

 function parseCookie()   // Розділення cookie
   { var cookieList = document.cookie.split("; ");
   // Масив для кожного cookie в cookieList
   var cookieArray = new Array();
   for (var i = 0; i < cookieList.length; i++) {
       // Розділення пар ім'я-значення.
       var name = cookieList[i].split("=");
       // Декодування і додавання в cookie-масив.
       cookieArray[unescape(name[0])] = unescape(name[1]);
    }
   return cookieArray;
  }
 function setCookie(visits) {
    /* Лісильник заходів з датою зберігання 1 рік */
    var expireDate = new Date();
    var today = new Date();
    // Установка дати
    expireDate.setDate(365 + expireDate.getDate());
    // Зберігання числа відвідувань
    document.cookie = "visits=" + visits +
                      "; expires=" + expireDate.toGMTString() + ";";
    // Зберігання теперішньої дати як останнього відвідування.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
                       "; expires=" + expireDate.toGMTString() + ";";
    }

    if ("" == document.cookie)
	{ // Ініціалізація cookie.
	 setCookie(1);
	 document.write("<H3>Вітаю Вас з першим відвідуванням мого сайту.</H3>");
	}
    else {
       var cookies = parseCookie();
       // Вивід привітання і числа заходів збільшується на 1.
       document.write("<H4> Ми знову раді бачити Вас на нашому сайті! Число Ваших відвідувань - " +
          cookies.visits++ + " !</H4>");
       // Вивід дати останнього відвідування.
       document.write("<H4>Останнього разу Ви були на цьому сайті: " + cookies.LastVisit + ".</H4>");
       // Оновлення cookie.
       setCookie(isNaN(cookies.visits)?1:cookies.visits);
    }
