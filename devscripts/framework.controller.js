apa.namespace.extend( 'visual.gensummit.framework.controller', function(frameId) {
	
	japa.extend( this, new apa.controller.framework(frameId) );
	
	this.id	=	'framework:controller';
	
	this.view = function(data) {

		return new apa.visual.gensummit.framework.view(this.frameId);
	};
});