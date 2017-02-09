export default {
    ini: true,
    commData_send(state, data = {}, action = ()=> {
    }){
        let isTeacher = 'tea', isStudent = 'stu';
        switch (state) {
            case 'loaded':
            {
                var objStr = JSON.stringify({
                    userInfo: {
                        userType: isTeacher,
                        //userType: isStudent,
                        curState: 'startClass'
                        //curState : 'startPra'
                        //curState : ''
                    }
                });
                action('init', objStr)
                break;
            }
            case 'data':
            {
                if (this.ini) {
                    this.ini = false;
                    action('data', data)
                }
                break;
            }
        }
    }
}
window.updateStr = JSON.stringify({
    type: "classCont",
    value: {
        "curState": "startClass"
    }
})
//action('update',updateStr)
//window.onerror = function (msg, url, lineNo, columnNo, error) {
//    var string = msg.toLowerCase();
//    var substring = "script error";
//    if (string.indexOf(substring) > -1){
//        alert('Script Error: See Browser Console for Detail');
//    } else {
//        alert(msg, url, lineNo, columnNo, error);
//    }
//    return false;
//};