// Like AJAX from Jquery Asyncronous calls

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	console.log(request.response);
}

request.open('get','https://randomuser.me/api', true);

request.send();

// with a promise

var mypromise = new Promise(function(resolved, rejected){
    
	var request = new XMLHttpRequest();

	request.open('get','https://randomuser.me/api/');
	request.onload = resolved;
	request.onerror = rejected;
	request.send();
});

mypromise.then(function(data) {
    data = data.target.response;
	console.log(data);
}).catch(function(){
	console.log('there was an error!');
});
