$(document).ready(function() {
	var utm_source = getUrlParameter('utm_source');
	var utm_medium = getUrlParameter('utm_medium');
	var utm_term = getUrlParameter('utm_term');
	var utm_campaign = getUrlParameter('utm_campaign');
	$('input[name=utm_source]').val(utm_source);
	$('input[name=utm_medium]').val(utm_medium);
	$('input[name=utm_term]').val(utm_term);
	$('input[name=utm_campaign]').val(utm_campaign);
});

// script to get utm
var getUrlParameter = function getUrlParameter(sParam)
{
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++)
  {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam)
    {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}


function clearF1Cookie() {
	setCookie("name","",-1);
	setCookie("email","",-1);
	setCookie("last1","",-1);
}
$(window).load(function() {
	$("input.name").val(getCookie("name"));
	$("input.email").val(getCookie("email"));
	$("input.phone").val(getCookie("phone"));
});

$('.btn-anchor').on('click', function(e) {
	e.preventDefault();
	anchorScroller(this, 1500);
});



