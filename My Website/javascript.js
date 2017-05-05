//var toggle1 = false;

//$("#Skills").on("click", function () {
 //if (toggle1) {
 //$("#Skills").removeClass("ui-btn-active"); 
 //}
 //else {
 //$("#Skills").addClass("ui-btn-active");
 //}
 //toggle1 = !toggle1;
 //return false;
//});

function ExperienceFunction()
{
	$("#Experince").show();
	$("#Skills").hide();
	$("#Education").hide();
	$("#divHome").hide();
	
}

function SkillsFunction()
{
	$("#Experince").hide();
	$("#Skills").show();
	$("#Education").hide();
	$("#divHome").hide();
}

function ContactClick()
{
	$("#Experince").hide();
	$("#Skills").hide();
	$("#Education").hide();
	$("#divHome").hide();
}

function EducationClick()
{
	$("#Experince").hide();
	$("#Skills").hide();
	$("#Education").show();
	$("#divHome").hide();
}

function HomeFunc()
{
	$("#Experince").hide();
	$("#Skills").hide();
	$("#Education").hide();
	$("#divHome").show();
}
	

