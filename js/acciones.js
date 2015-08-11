// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
var basedatos=window.sqlitePlugin.openDatabase({name: "agenda.db",createFromLocation:1});
	cargarnombre_contacto();
	function cargarnombre_contacto ()
	{
		basedatos.transaction(function(ejecutar){
			var sql = "SELECT nombre_contacto FROM contactos";
			ejecutar.executeSql(sql,undefined,function(ejecutar,resultado){
			var nombre = resultado.rows.item(0);
			$(alert).text(nombre.nombre_contacto);
			});
			});
	}
}); 
});