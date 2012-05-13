E2.plugins["convert_camera_matrices"] = function(core, node) {
	var self = this;
	var gl = core.renderer.context;
	
	this.desc = 'Extract the projection and view matrices from a camera.';
	this.input_slots = [ 
		{ name: 'camera', dt: core.datatypes.CAMERA },
	];
	this.output_slots = [ 
		{ name: 'projection', dt: core.datatypes.TRANSFORM },
		{ name: 'view', dt: core.datatypes.TRANSFORM } 
	];
	
	this.reset = function()
	{
		self.camera = new Camera(gl);
	};
	
	this.update_input = function(slot, data)
	{
		self.camera = data;
	};	

	this.update_output = function(slot)
	{
		if(slot.index === 0)
			return self.camera.projection;
		else
			return self.camera.view;
	};	
};
