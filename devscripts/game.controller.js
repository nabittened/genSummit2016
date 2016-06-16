apa.namespace.extend( 'visual.gensummit.game.controller', function(frameId) {
	
	japa.extend( this, new apa.controller(frameId) );
	
	this.id	=	'game:controller';
	this.subContent	=	1;	
	
	this.render = function() {	
		
		var aud = document.getElementById('audio');
		
		if (this.subContent === 1) aud.play();
		
		if (this.subContent === 3) aud.playbackRate = 1.1;
		if (this.subContent === 4) aud.playbackRate = 1.3;
		if (this.subContent === 6) japa(aud).animate({volume: 0}, 700);
			
		this.initialized	=	true;
		
		var view = this.view();
		
		view.frameId = this.frameId;
		
		japa(this.container).html( view.get( this.subContent ) );
	};
	
	this.bindEvents = function() {
		
		japa.proxy( this.parent.bindEvents, this )();
		
		japa(document).on( apa.device.clickEvent, '.nav', japa.proxy( this.navigate, this ) );
	};
	
	this.kill = function() {
		
		japa.proxy( this.parent.kill, this )();
		
		japa(document).off( apa.device.clickEvent, '.nav' );
	};
	
	this.view = function(data) {

		return new apa.visual.gensummit.game.view(this.frameId);
	};
	
	this.navigate = function(ev) {
		
		if (this.subContent < 6) {
		
			this.subContent ++;
			
			this.render();
		} else {
			
			japa(this.container).empty();
			
			var tEvent = japa.Event( this.frameId + 'navigation' );
			
			tEvent.content = 'input';
			
			japa(document).triggerHandler( tEvent );
		}
	};
});