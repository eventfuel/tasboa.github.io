$(function() {

	var latlng = new google.maps.LatLng(38.722831,-9.148489);
	
	var settings = {
		zoom: 12,
		scrollwheel: false,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	var l229content = '<div style="color: light-grey">'+
		'<h4>Liberdade229</h4><p>Our business headquarters</p>'+
		'</div>';
	var coworkcontent = '<div style="color: light-grey">'+
		'<h4>Cowork Lisboa</h4><p>Our development headquarters</p>'+
		'</div>';
		
	var l229window = new google.maps.InfoWindow({
		content: l229content
	});
	var coworkwindow = new google.maps.InfoWindow({
		content: coworkcontent
	});
	
	var companyImage = new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker_orange.png',
		new google.maps.Size(20,34),
		new google.maps.Point(0,0),
		new google.maps.Point(0,34)
	);

	var companyShadow = new google.maps.MarkerImage('http://maps.google.com/mapfiles/shadow50.png',
		new google.maps.Size(50,34),
		new google.maps.Point(0,0),
		new google.maps.Point(0, 34)
	);
	
	var L229 = new google.maps.LatLng(38.722551,-9.148589);
	
	var CoworkLisboa = new google.maps.LatLng(38.701751,-9.178589);

	var l229Marker = new google.maps.Marker({
		position: L229,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Liberdade229",
		zIndex: 3
	});
	
	var coworkMarker = new google.maps.Marker({
		position: CoworkLisboa,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Cowork Lisboa",
		zIndex: 3
	});

	google.maps.event.addListener(l229Marker, 'click', function() {
		l229window.open(map,l229Marker);
	});
	
	google.maps.event.addListener(coworkMarker, 'click', function() {
		coworkwindow.open(map,coworkMarker);
	});

});