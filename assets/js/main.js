var green="#18BC9C",grey="#2C3E50",mapstyles=[{featureType:"water",elementType:"geometry",stylers:[{color:grey}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:green}]},{featureType:"poi",elementType:"all",stylers:[{color:green},{lightness:-7},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:green},{lightness:-28}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"on"},{color:green},{lightness:-15}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:green},{lightness:-18}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:green},{lightness:-34}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"on"},{color:grey},{weight:.8}]},{featureType:"poi.park",elementType:"all",stylers:[{color:green}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:grey},{weight:.3},{lightness:10}]}];(function(){$(function(){var e,t;$(document).foundation(),$(".scrollto, .gototop").bind("click",function(e){var t;return t=$(this),$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},800,"easeInOutQuart"),e.preventDefault()}),new WOW({offset:100}).init(),$.backstretch([""+imgurl+"/bg_sea.jpg",""+imgurl+"/bg_field.jpg",""+imgurl+"/bg_cloud.jpg",""+imgurl+"/bg_mic.jpg"],{duration:1e3,fade:1500}),$.backstretch("pause"),$(".screen").waypoint(function(e){return"down"===e&&$.backstretch("next"),"up"===e?$.backstretch("prev"):void 0},{offset:"50%"}),t=function(){var e,t,o;return t=$(window).scrollTop(),o=$(window).height(),e=1+t/(20*o),$(".backstretch img").css({transform:"scale("+e+")"})},t(),$(window).scroll(function(){return t()}),$("#explore").waypoint(function(e){return"down"===e&&$(".small-logo").addClass("show"),"up"===e?$(".small-logo").removeClass("show"):void 0},{offset:"50%"}),e=function(){var e,t,o,r,n,l,s,a;return $("#gmap").length?(l={lat:3.0924034,lng:101.543492,zoom:17,infoText:"<p>430, Level 4, Block 4								<br/>Laman Seri Business Park								<br/>40100 Shah Alam Selangor</p>",linkText:"View on Google Maps",mapAddress:"Laman Seri Business Park Shah Alam Selangor",icon:""+imgurl+"/pin-dark.png"},t=new google.maps.InfoWindow,a=new google.maps.LatLng(l.lat,l.lng),n={zoom:l.zoom,center:a,zoomControl:!0,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,scrollwheel:!1,styles:mapstyles},o=new google.maps.Map($("#gmap")[0],n),s=new google.maps.Marker({position:a,map:o,title:l.linkText,icon:l.icon}),r="https://www.google.com/maps/preview?ll="+l.lat+","+l.lng+"&z=14&q="+l.mapAddress,e='<div class="infowin">'+l.infoText+'<a href="'+r+'" target="_blank">'+l.linkText+"</a></div>",google.maps.event.addListener(s,"mouseover",function(){return t.setContent(e),t.open(o,s)}),google.maps.event.addListener(s,"click",function(){return window.open(r,"_blank")}),$(window).bind("resize",function(){return o.setCenter(a)})):void 0},e(),"undefined"!=typeof Pace&&null!==Pace&&Pace.on("done",function(){return setTimeout(function(){return $("html").addClass("loaded")},300)})})}).call(this);