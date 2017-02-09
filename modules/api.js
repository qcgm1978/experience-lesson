import './styles/api.scss'
import Mocks from './mocks.js'
var Parent_get = window.parent.window;
function prompt(text) {
    setTimeout(function () {
        $('.container').append($('<div>', {
            text: text,
            id: 'prompt',
            'class': 'center'
        }))
        $('#prompt').animateCss('slideInRight', null, '', function () {
            setTimeout(()=> {
                $(this).remove()
            }, 3000)
        })
    }, 1000)
}
let init = (objStr)=> {
    var obj = JSON.parse(objStr);
    switch (obj.userInfo.userType) {
        case "tea":
            isTeacher = true
            break;
        case "stu":
            isTeacher = false
            break;
    }
    var curState = obj.userInfo.curState;
    var page = obj.userInfo.page;
    if (curState == 'startClass') {
        isBeforeClass = false
    } else if (curState == 'startPra') {
        isPractice = true
    }
    if (!isTeacher) {
        if (!isBeforeClass && page == 1) {
            prompt('开始上课了');
        } else if (isPractice && page == 4) {
            prompt('轮到你练习了')
        }
    }
}
let userId = 'strId'
let data = {
    userInfo: {
        userType: 'tea' / 'stu',
        userId: userId,
        userState: 'in' / 'out'
    },
    classInfo: {
        classType: '1v1' / '1vN',
    }
}
window.action = action;
function action(type, objStr) {
    switch (type) {
        case 'init':
            init(objStr);
            break;
        case 'data':
            getData(objStr, actEvent);
            break;
        case 'update':
            update(objStr);
            break;
        case 'resetHref':
            Parent_get.$('#showDomain').attr('src', './src/ppt/' + objStr);
            break;
        case 'conf':
            console.log(JSON.parse(objStr).specialValue.type);
            break;
        default:
            console.error('undefined type for commData_set,type is :' + type);
            break;
    }
};
let isTeacher = true, isBeforeClass = true, isPractice = false;
function update(objStr) {
    var obj = JSON.parse(objStr);
    if (obj.value.curState == "startClass") {
        if ($('.stu-masklayer').attr("isStu") == "true") {
            $('.stu-masklayer').show();
        }
    }
}
function getData(objStr, actEvent) {
    var obj = JSON.parse(objStr);
    actEvent(obj);
}
function actEvent(obj) {
    var ele = obj.selector ? obj.selector : obj.ele;
    if (obj.event === 'dragstop') {
        $(ele).css({
            left: obj.position.left,
            top: obj.position.top
        })
    } else {
        $(ele).trigger(obj.event, {
            isFromOpposite: true
        });
    }
}
function sendData(type, objStr) {
    try {
        switch (type) {
            case 'data':
                Parent_get.commData_send('data', objStr);
                break;
            case 'resetHref':
                Parent_get.commData_send('resetHref', objStr);
                Parent_get.$('#showDomain').attr('src', './src/ppt/' + objStr);
            case "setPage":
                Parent_get.commData_send('setPage', objStr);
                break;
        }
    } catch (e) {
        Mocks.commData_send(type, objStr, action);
    }
}
try {
    sendData("setPage", "6");
    Parent_get.commData_send('loaded');
} catch (e) {
    Mocks.commData_send('loaded', {}, action);
}
let getClassState = ()=> {
    return isBeforeClass
}
let getPracticeState = ()=> {
    return isPractice
}
export  {isTeacher,getClassState,getPracticeState,sendData};
window.sendData = sendData