var http = require('http');
var url=require('url');
var localStorage = require('localStorage');
var data = require('./bangloreschoolsdata.json');
http.createServer(function (req, res) {
	console.log("Ennn");
	console.log(req.url);
	if(req.url!='/favicon.ico'){
	var args=req.url.split("?");
	var arg=args[1];
	console.log(arg);
	var searchkey=arg.split("&");
	var searchkeyword=[];
	var k=0;
	console.log(searchkey[0]);
	var searching='';
	var searchcategory='';
	var filterCategory='';
	var filterBy='';
	for(var i=0;i<searchkey.length;i++){
		searchkeyword[k++]=searchkey[i].split("=");
	//var searchby=searchkey[1].split("=");
	//var filtercategory=searchkey[2].split("=");
	//console.log(searchkeyword[1]+" "+searchby[1]);
	//var searchcategory=searchby[1];
	//var searching=searchkeyword[1];
	//var filterSchoolCategory=filtercategory[1];
	//console.log(searchcategory);
	}
	for(var i=0;i<searchkeyword.length;i++){
		var appliedFilters=searchkeyword[i];
		if(appliedFilters[0]=='search'){
			searching=appliedFilters[1];
		}
		if(appliedFilters[0]=='by'){
			searchcategory=appliedFilters[1];
		}
		if(appliedFilters[0]=='filterCategory'){
			filterCategory=appliedFilters[1];
		}
		if(appliedFilters[0]=='filterBy'){
			filterBy=appliedFilters[1];
		}
	}
	console.log("filterCate"+filterCategory);
	
	var search="GKLPS";
	var datatopass="<html><head></head><body><table border='1' id='myTable'><tr><th>District</th><th>Block</th><th>Cluster</th><th>School Id</th><th onclick='sortTable(4)'>School Name</th><th>Category</th><th>Gender</th><th onclick='sortTable(6)'>Medium of Institution</th><th>Address</th><th>Area</th><th onclick='sortTable(9)'>Pincode</th><th>Landmark</th><th>Identification1</th><th>BusRoutes</th><th>Identification2</th><th>Latitude</th></tr><tr>";
	//var data={};
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/html'});
	//res.write('<html><head></head><body><p>filter the data with custom selection</p><br/>Category:<br/><input type="checkbox" name="schoolcategory" id="schoolcategory" value="Lower Primary">Lower<input type="checkbox" name="schoolcategory" id="schoolcategory" value="Middle Primary">Middle<input type="checkbox" name="schoolcategory" id="schoolcategory" value="Upper Primary">Upper<br/>Gender:<br/><input type="checkbox" name="gendercat">Co-Ed<input type="checkbox" name="gendercat">Boys<input type="checkbox" name="gendercat">Girls<br/>Medium of institution:<br/><input type="checkbox" name="medium">Telugu<input type="checkbox" name="medium">Tamil<input type="checkbox" name="medium">Kannada<input type="checkbox" name="medium">Urdu<input type="checkbox" name="medium">English<br/><input type="button" name="Apply" value="Apply Filters" onclick="applyFilters()"></body><script>function applyFilters(){var category=document.getElementById("schoolcategory").value;localStorage.setItem("categoryfilter",category);console.log(category);console.log("Entered")}</script></html>');
	//res.writeHead(200, {'Content-Type': 'text/plain'});
	//var selectedCategory=localStorage.getItem("categoryfilter");
	//console.log("selection"+selectedCategory);
	for(var i=0;i<data.length-1;i++){
		//var school=data[i].schoolname;
		//console.log(school.includes(search));
		if(searchcategory=="schoolname"&&data[i].schoolname.includes(searching)){
			if(filterCategory!=''){
			if(filterCategory=="category"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="gender"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="medium_of_inst"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			}
			else{
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			//res.write(JSON.stringify(data[i]));
		}
		if(searchcategory=="address"&&data[i].address.includes(searching)){
			if(filterCategory!=''){
			if(filterCategory=="category"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="gender"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="medium_of_inst"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			}
			else{
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			//res.write(JSON.stringify(data[i]));
		}
		if(searchcategory=="area"&&data[i].area.includes(searching)){
			if(filterCategory!=''){
			if(filterCategory=="category"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="gender"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="medium_of_inst"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			}
			else{
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}//res.write(JSON.stringify(data[i]));
		}
		if(searchcategory=="pincode"&&data[i].pincode.includes(searching)){
			if(filterCategory!=''){
			if(filterCategory=="category"&&data[i].category.includes(filterBy)){
				//console.log("1st consition");
			datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			//res.write(JSON.stringify(data[i]));
			}
			if(filterCategory=="gender"&&data[i].gender.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="medium_of_inst"&&data[i].gender.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			}
			
			else{
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
		}
		if(searchcategory=="landmark"&&data[i].landmark.includes(searching)){
			if(filterCategory!=''){
			if(filterCategory=="category"&&data[i].category.includes(filterBy)){
				
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="gender"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			if(filterCategory=="medium_of_inst"&&data[i].category.includes(filterBy)){
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}
			}
			else{
				datatopass+="<tr><td>"+data[i].district+"</td><td>"+data[i].block+"</td><td>"+data[i].cluster+"</td><td>"+data[i].schoolid+"</td><td>"+data[i].schoolname+"</td><td>"+data[i].category+"</td><td>"+data[i].gender+"</td><td>"+data[i].medium_of_inst+"</td><td>"+data[i].address+"</td><td>"+data[i].area+"</td><td>"+data[i].pincode+"</td><td>"+data[i].landmark+"</td><td>"+data[i].identification1+"</td><td>"+data[i].busroutes+"</td><td>"+data[i].identification2+"</td><td>"+data[i].latlong+"</td></tr>";
			}//res.write(JSON.stringify(data[i]));
		}
	}
	}
	
	//var finaldata=JSON.stringify(data);
	
	//console.log("hello"+JSON.stringify(data));
	//finaldata=finaldata+']'
	
	datatopass=datatopass+"</table>";
	datatopass=datatopass+"</body><script type='text/javascript'>function sortTable(n) {var table,rows,switching,i,x,y,shouldSwitch,dir,switchcount = 0;table = document.getElementById('myTable');switching = true;dir = 'asc';while (switching) {switching = false;rows = table.getElementsByTagName('TR');console.log(rows.length);for (i = 2; i < rows.length - 1; i++) {shouldSwitch = false;console.log(rows[i+1]);x = rows[i].getElementsByTagName('TD');console.log(x);console.log(x[n].innerHTML);console.log(x.length);y = rows[i + 1].getElementsByTagName('TD');if (dir == 'asc') {if (x[n].innerHTML.toLowerCase() > y[n].innerHTML.toLowerCase()) {shouldSwitch = true;break;}}}if (shouldSwitch) {rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);switching = true;switchcount++;} else {if (switchcount == 0 && dir == 'asc') {dir = 'desc';switching = true;}}}}</script></html>";
    res.write(datatopass);
	res.end();
}).listen(8080);
