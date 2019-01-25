document.addEventListener('DOMContentLoaded',function){
	ar source   = document.getElementById("info-template").innerHTML;
	var template = Handlebars.compile(source);
	var context = {title: "Inquinamento causato da CO2",
 		first_text: "Il Co2 o anidride carbonica è il principale responsabile dell’inquinamento atmosferico.Esaminiamo le normative vigenti relative alle emissioni.",
 		second_text:"L’anidride carbonica è sostanzialmente un ossido acido; la sua molecola è costituita da un atomo di carbonio, legato a due atomi di ossigeno. Questa sostanza è fondamentale nei processi biologici delle piante e degli animali. Essa è coinvolta nel processo della fotosintesi delle piante e viene inoltre prodotta grazie alla respirazione degli animali.",
 		third_text:"Ovviamente il Co2 viene prodotto anche nella maggior parte delle combustioni. Gli autoveicoli producono  molto Co2; per questo motivo è molto importante limitare le emissioni di questa sostanza, per preservare l’ambiente ed evitare ulteriori forme di inquinamento. Esaminiamo in questa guida il problema delle emissioni di anidride carbonica degli autoveicoli e la relativa normativa."};
	var html = template(context);
}