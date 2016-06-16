apa.namespace.extend( 'visual.gensummit.input.controller', function(frameId) {
	
	japa.extend( this, new apa.controller(frameId) );
	
	this.id	=	'input:controller';
	
	this.view = function(data) {

		return new apa.visual.gensummit.input.view(this.frameId);
	};
	
	this.subContent	=	1;	
	
	this.render = function() {
			
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
	
	this.navigate = function(ev) {
		
		if (japa(ev.currentTarget).hasClass('character')) {
			
			apa.gamePlay.character = parseInt( japa(ev.currentTarget).attr('id').split('_')[1], 10 );
			
			this.subContent = 2;
			this.render();
		}
		
		if (japa(ev.currentTarget).hasClass('savings')) {
			
			var tType = parseInt( japa(ev.currentTarget).attr('id').split('_')[1], 10 );
			
			switch( tType ) {
				
				case 1:
					apa.gamePlay.cash = 0;
					break;
				
				case 2:
					apa.gamePlay.cash = 2000;
					break;
				
				case 3:
					apa.gamePlay.cash = 3000;
					break;
			}
			
			this.subContent = 3;
			this.render();
		}
		
		if (japa(ev.currentTarget).hasClass('next') ) {
			
			japa(this.container).empty();
			
			var tEvent = japa.Event( this.frameId + 'navigation' );
			
			tEvent.content = 'game';
			
			japa(document).triggerHandler( tEvent );
		}
	};
});