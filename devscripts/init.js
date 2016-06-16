apa.namespace.extend( 'visual.gensummit.init', function() {
	
	japa.extend( this, new apa.init() );
	
	this.getFramework = function() {
		
		return new apa.visual.gensummit.framework.controller();
	};
});