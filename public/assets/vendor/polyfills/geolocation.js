(function(a){if(a)return;var b;a=window.navigator.geolocation={},a.getCurrentPosition=function(a){b&&a(b),$.getScript("//www.google.com/jsapi",function(){b={coords:{latitude:google.loader.ClientLocation.latitude,longitude:google.loader.ClientLocation.longitude}},a(b)})},a.watchPosition=a.getCurrentPosition})(navigator.geolocation);