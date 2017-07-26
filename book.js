/**
 * Created by qing on 2017/7/26.
 */
window.onload = function () {
    var oBook = document.getElementById("book");
    var oSquare = document.getElementById("square");
    var oInt = oBook.getElementsByTagName("span");
    var oAside = oSquare.getElementsByTagName("aside");
    //鼠标悬停样式
    var oWindowW = window.innerWidth;
    var oWindowH = window.innerHeight;
    for(var i=0;i<oInt.length;i++){
        oInt[i].index = i;

        //introduce位置以及样式 8.85%
        if (i<=3){
            oInt[i].style.position = 'absolute';
            oInt[i].style.left = (oWindowW*0.106)+'px';
            oInt[i].style.top = [(oWindowH*0.23)*(i+1)-30*i]+'px';
        } else if(i>3 && i<=7){
            oInt[i].style.width = '45px';
            oInt[i].style.height = '45px';
            oInt[i].style.position = 'absolute';
            oInt[i].style.left = (oWindowW*0.21)+'px';
            oInt[i].style.top = [(oWindowH*0.28)*(i+1-4)-80*(i-4)]+'px';
        } else if(i>7 && i<=11){
            oInt[i].style.width = '45px';
            oInt[i].style.height = '45px';
            oInt[i].style.position = 'absolute';
            oInt[i].style.right = (oWindowW*0.20)+'px';
            oInt[i].style.top = [(oWindowH*0.28)*(i+1-8)-86*(i-8)]+'px';
        }else if(i>11 && i<16){
            oInt[i].style.position = 'absolute';
            oInt[i].style.right = (oWindowW*0.08)+'px';
            oInt[i].style.top = [(oWindowH*0.23)*(i+1-12)-30*(i-12)]+'px';
        }


        oInt[i].onmouseover = function () {
            var o = this.index;
            for(var i=0;i<oAside.length;i++){
                oAside[i].style.display = 'none';
            }
            oAside[this.index].style.display = 'block';
        };
    }

};