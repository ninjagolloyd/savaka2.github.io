new (function() {
	var ext = this;
	var descriptor = {
		blocks: []
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ScratchExtensions.register('Extension on user page', descriptor, ext);
})();
