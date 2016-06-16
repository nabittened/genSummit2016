apa.namespace.extend( 'visual.gensummit.finish.controller', function(frameId) {
	
	japa.extend( this, new apa.controller(frameId) );
	
	this.id	=	'finish:controller';
	
	this.view = function(data) {

		return new apa.visual.gensummit.finish.view(this.frameId);
	};
});