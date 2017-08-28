export function getDayCountOfMonth(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    return 31;
};

export function getFirstDayPosition(year, month) {
    let firstDay = new Date(year, month, 1);

    return firstDay.getDay();
}


export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

export function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}



export function formateDate(date) {
    return date.year + '-' + (date.month + 1) + '-' + date.text
}

export function compareTime(t1, t2) {
    let time1 = new Date(t1).getTime();
    let time2 = new Date(t2).getTime();

    return time1 > time2;
}


export function compareTimeLimit(t1, t2, limit) {
    let time1 = new Date(t1).getTime();
    let time2 = new Date(t2).getTime();
    let limitTime = limit * 24 * 3600 * 1000;
    return time2 >= (time1 + limitTime);
}