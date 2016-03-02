module.exports = function(){
	var config = {

		// file js to vet
		alljs:[
			'./src/**/*.js',   	// any js file in subdir of src 
			'**.*js' 			// any js file at root
		]
	};

	return config;
};