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
	
	ScratchExtensions.register('Extension in user page repo on different branch', descriptor, ext);
})();
