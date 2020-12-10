Java.perform(function () {
    var OnlineJudgeApp = Java.use('com.yuanrenxue.onlinejudge2020.OnlineJudgeApp');
    OnlineJudgeApp.getSign.implementation = function (j){
        console.log('HOOK 开始');
        var a= this.getSign(j);
        console.log(a)
        console.log('HOOK 结束');
        return a;
    };
});