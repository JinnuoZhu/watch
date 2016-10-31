window.onload=function(){
	
	function watch(){
		var oCan=document.getElementById('oCan');
		var oDraw=oCan.getContext('2d');

		//获取时间
		var oDate=new Date();
		var oHour=oDate.getHours();
		var oMin=oDate.getMinutes();
		var oSec=oDate.getSeconds();

		//清空画布
		oDraw.clearRect(0,0,oCan.width,oCan.height);

		//小刻度
		oDraw.beginPath();
		for(var i=0;i<60;i++){
			oDraw.moveTo(250,250);
			oDraw.arc(250,250,150,6*i*Math.PI/180,6*(i+1)*Math.PI/180,false);
		}
		oDraw.closePath();
		oDraw.stroke();
		
		//第一次覆盖
		oDraw.fillStyle='white';
		oDraw.beginPath();
		oDraw.arc(250,250,150*(19/20),0,360*(i+1)*Math.PI/180,false);
		oDraw.closePath();
		oDraw.fill();

		//大刻度
		oDraw.lineWidth=3;
		oDraw.beginPath();
		for(var i=0;i<12;i++){
			oDraw.moveTo(250,250);
			oDraw.arc(250,250,150,30*i*Math.PI/180,30*(i+1)*Math.PI/180,false);
		}
		oDraw.closePath();
		oDraw.stroke();

		//第二次覆盖
		oDraw.fillStyle='white';
		oDraw.beginPath();
		oDraw.arc(250,250,150*(18/20),0,360*(i+1)*Math.PI/180,false);
		oDraw.closePath();
		oDraw.fill();

		//时针
		oDraw.lineWidth=3;
		oDraw.beginPath();
		oDraw.moveTo(250,250);
		oDraw.arc(250,250,150*(12/20),(-90+oHour*30+oMin/2)*Math.PI/180,(-90+oHour*30+oMin/2)*Math.PI/180,false);
		oDraw.closePath();
		oDraw.stroke();

		//分针
		oDraw.lineWidth=2;
		oDraw.beginPath();
		oDraw.moveTo(250,250);
		oDraw.arc(250,250,150*(14/20),(-90+oMin*6)*Math.PI/180,(-90+oMin*6)*Math.PI/180,false);
		oDraw.closePath();
		oDraw.stroke();

		//秒针
		oDraw.lineWidth=1;
		oDraw.beginPath();
		oDraw.moveTo(250,250);
		oDraw.arc(250,250,150*(15/20),(-90+oSec*6)*Math.PI/180,(-90+oSec*6)*Math.PI/180,false);
		oDraw.closePath();
		oDraw.stroke();
	}

	setInterval(function(){
		watch();
	},1000);
}