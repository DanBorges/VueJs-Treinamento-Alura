export default class FotoService {

	constructor(resource) {
			this._resource = resource('v1/fotos{/id}');
	}

	listar(){
			return this._resource
			.query()
			.then(res => res.json(), err =>{
				console.log(err);
				throw new Error("Não foi possível carregar as fotos, tente mais tarde");
			});
	}

	cadastrar(foto){
		if(foto._id){
			return this._resource.update({id: foto._id}, foto)
			.then(null, err=>{
				console.log(err);
				throw new Error("Não foi possível alterar a foto, tente mais tarde");
			})
		}

		else{
			return this._resource.save(foto)
			.then(null, err=> {
				console.log(err);
				throw new Error ("Não foi possível cadastrar a foto, tente mais tarde");
			});
		}
	}

	deletar(id){
		return this._resource.delete({ id })
		.then(null, err=>{
			console.log(err);
			throw new Error ("Não foi possível deletar a foto");
		}) 
	}

	buscaPorId(id){
		return this._resource
		.get({ id })
		.then(res => res.json());
	}

}