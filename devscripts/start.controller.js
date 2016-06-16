apa.namespace.extend( 'visual.gensummit.start.controller', function(frameId) {
	
	japa.extend( this, new apa.controller(frameId) );
	
	this.id			=	'start:controller';
	this.subContent	=	1;	
	
	this.render = function() {
			
		this.initialized	=	true;
		
		var view = this.view();
		
		view.frameId = this.frameId;
		
		japa(this.container).html( view.get( this.subContent ) );
	};
	
	this.bindEvents = function() {
		
		japa.proxy( this.parent.bindEvents, this )();
		
		japa(document).on( apa.device.clickEvent, 'a.nav', japa.proxy( this.navigate, this ) );
	};
	
	this.kill = function() {
		
		japa.proxy( this.parent.kill, this )();
		
		japa(document).off( apa.device.clickEvent, 'a.nav' );
	};
	
	this.view = function(data) {

		return new apa.visual.gensummit.start.view(this.frameId);
	};
	
	this.navigate = function(ev) {
		
		if (japa(ev.currentTarget).hasClass('next') ) {
			
			japa(this.container).empty();
			
			var tEvent = japa.Event( this.frameId + 'navigation' );
			
			tEvent.content = 'input';
			
			japa(document).triggerHandler( tEvent );
		} else {
		
			this.subContent = parseInt( japa( ev.currentTarget ).attr('id').split('_')[1], 10);
			
			this.render();
		}
	};
});