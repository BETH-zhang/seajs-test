if(document.attachEvent){
	alert('不支持Old IE');
}

define(function(require){

  	var $ = require('jquery');
	var data = require('./data');
	var lucky = require('./lucky');

	lucky.init(data);

	$('#reStart').click(function(){
		lucky.reset(data);
	});

});