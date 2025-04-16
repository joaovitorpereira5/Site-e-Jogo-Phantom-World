

const scriptsInEvents = {

	async Folhafase2_Event8_Act3(runtime, localVars)
	{
		//obter valor da variavel global vidas
		let vidas2 = runtime.globalVars.vidas2;
		
		//reduzir uma vida
		vidas2 --;
		
		//Atualiza a variavel global no construct 3
		runtime.globalVars.vidas2 = vidas2;
		
		//Se vidas chegarem a zero, va a game over
		if(vidas2 <=0){
		console.log("Game Over");
		runtime.goToLayout("Game Over")
		}
	},

	async Folhafase1_Event6_Act3(runtime, localVars)
	{
		//obter valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		//reduzir uma vida
		vidas --;
		
		//Atualiza a variavel global no construct 3
		runtime.globalVars.vidas = vidas;
		
		//Se vidas chegarem a zero, va a game over
		if(vidas <=0){
		console.log("Game Over");
		runtime.goToLayout("Game Over")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
