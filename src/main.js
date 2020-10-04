let content = document.querySelector('.content');
let div1_wrap = document.querySelector('.div1_wrap');
let style = document.querySelector('style');
let str = `
/** 你好，我叫小林
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
**/
 .div1 {
    width: 200px;
    height: 200px;
    border: 1px solid red;    
 }
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先,把div变成一个圆
**/
 .div1 {
    border-radius:50%;  
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
 }
/* 八卦是阴阳形成的
 * 一黑一白
**/
 .div1{
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
 }
/* 啊!差点忘了还有灵珠和魔丸
 * 一黑一白
**/
 .div1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(50%);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
   
 }
 .div1::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: rgba(0,0,0,1) 50%;
    background: radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 24%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }
`;
let index = 0;
str2 = ``;

function getChar() {
    setTimeout(function () {
        index++;

        if (!(str.length === index)) {
            if (str[index] === '\n') {
                str2 += `<br>`;
            } else if (str[index] === ' ') {
                str2 += '&nbsp;&nbsp;';
            }

            str2 += str[index];
          
            style.innerHTML = str.substring(0,index);
            content.innerHTML = str2;
            content.scrollTo(0,99999);
            window.scrollTo(0,99999);
            getChar();
        } else {
            console.log('已经输出完毕!');
        }
    }, 1);
}
getChar();
