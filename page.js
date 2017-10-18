function fill_DVD(title, actor, price, special) {
	document.getElementById("title").getElementsByTagName('input')[0].value=title;
	document.getElementById("actor").getElementsByTagName('input')[0].value=actor;
	document.getElementById("price").getElementsByTagName('input')[0].value=price;
	document.getElementById("promo").style.display=special?'block':'none';
}

function fill_list(list) {
	l=[];
	list.forEach(function(e) { l.push("<span onclick='fill_DVD(\""+e.title+"\", \""+e.actor+"\", "+e.price+", "+e.special+")'>"+e.title+"</span>");})
	document.getElementById("liste").innerHTML=l.join('<br>');
}
