apa.namespace.extend( 'visual.gensummit.observer.navigation', function() {
	
	japa.extend( this, new apa.observer.navigation() );
	
	this.actualPageControllers	=	[];
	this.actualState			=	'start';
		
	this.init = function() {
		
		apa.debug.showInfo('Starting observer.navigation');
		
		this.setupGameParams();
		
		this.bindEvents();
		
		this.navigate();
	};
	
	this.setupGameParams = function() {
		
		apa.gamePlay = {
			
			character:	0,
			cash:		0,
			burnout:	0,
			work:		0,
			round:		1
		};
	};
	
	this.bindEvents = function() {
				
		japa(document).on( this.frameId + apa.events.framework.done, japa.proxy( this.start, this ) );
		japa(document).on( this.frameId + 'navigation', japa.proxy( this.navigate, this ) );
	};
	
	this.navigate = function(ev) {
		
		if (ev) this.actualState = ev.content;
		
		this.killContent();
		this.buildContent();
	};	
	
	this.killContent = function() {
		
		if (this.actualPageControllers.length > 0) {
		
			var that = this;
			
			japa.each( this.actualPageControllers, function() {
				
				var tEvent = japa.Event( that.frameId + apa.events.controller.kill + this );
				
				japa(document).triggerHandler( tEvent );
			});
	
			this.actualPageControllers = [];
		}
	};
	
	this.buildContent = function() {	
		
		switch( this.actualState ) {
			
			case 'start':
			
				this.actualPageControllers.push( new apa.visual.gensummit.start.controller(this.frameId).init( '' ) );
				break;
			case 'input':
				
				this.actualPageControllers.push( new apa.visual.gensummit.input.controller(this.frameId).init( '' ) );
				break;
			case 'game':
			
				this.actualPageControllers.push( new apa.visual.gensummit.game.controller(this.frameId).init( '' ) );
				break;
			case 'finish':
			
				this.actualPageControllers.push( new apa.visual.gensummit.finish.controller(this.frameId).init( '' ) );
				break;
		};
	};
});