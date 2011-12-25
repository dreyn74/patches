g_Plugins["rotation_matrix"] = function(core) {
	var self = this;
	
	this.input_slots = [ 
		{ name: 'angle', dt: core.datatypes.FLOAT },
		{ name: 'axis', dt: core.datatypes.VECTOR }
	];
	this.output_slots = [ { name: 'matrix', dt: core.datatypes.MATRIX } ];
	this.state = null;
	this.angle = 0.0;
	this.axis = [0.0, 0.0, 0.0];
	this.matrix = mat4.create();
	
	mat4.identity(this.matrix);
		
	this.update_input = function(index, data)
	{
		if(index === 0)
			self.angle = data;
		else if(index === 1)
			self.axis = data;
	};
	
	this.update_state = function()
	{
		mat4.identity(self.matrix);
		mat4.rotate(self.matrix, self.angle, self.axis);
	};

	this.update_output = function(index)
	{
		return self.matrix;
	};	
};
