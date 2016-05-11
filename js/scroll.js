
			var speed=10; 
			var tab=document.getElementById("imgShow"); 
			var tab1=document.getElementById("img_top"); 
			var tab2=document.getElementById("img_bottom"); 
			tab2.innerHTML=tab1.innerHTML; 
			function Marquee(){ 
			if(tab2.offsetWidth-tab.scrollLeft<=0) 
			tab.scrollLeft-=tab1.offsetWidth 
			else{ 
			tab.scrollLeft++; 
			} 
			} 
			var MyMar=setInterval(Marquee,speed); 
			tab.onmouseover=function() {clearInterval(MyMar)}; 
			tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 

