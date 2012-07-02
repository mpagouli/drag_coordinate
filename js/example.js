
$(document).ready(function(){
	


//$(".green").draggable({axis:'x'});
//$(".red").draggable({axis:'y'});
//$(".yellow").draggable();
//$(".coordinated").draggable();

$(".green_container").position({
    my: "left bottom",
    at: "left top",
    of: $(".yellow_container")
});
$(".red_container").position({
    my: "right top",
    at: "left top",
    of: $(".yellow_container")
});



$(".yellow").drag_coordinate('lead', [{
    element: $(".green"),
    axis: 'x'
}, {
    element: $(".red"),
    axis: 'y'
}]);


$(".green").drag_coordinate('lead', [{
    element: $(".yellow"),
    axis: 'x'
}]);

$(".red").drag_coordinate('lead', [{
    element: $(".yellow"),
    axis: 'y'
}]);


//$(".yellow").drag_coordinate('lead', [ { element : $(".green") } ] );
//$(".yellow").drag_coordinate();
//$(".yellow").drag_coordinate('lead');


/*
var followers = $(".yellow").drag_coordinate( "followersInfo" );
for(var i=0; i<followers.length; i++)
    alert(followers[i].element.attr('class')+" to axis: "+followers[i].axis);
*/


/*
var followers2 = $(".yellow").drag_coordinate( "followers" ); 
for(var i=0; i<followers2.length; i++)
    alert(followers2[i].attr('class'));
*/

//var isLead = $(".green").drag_coordinate( "isLeader" ); alert(isLead);

//var isFol = $(".yellow").drag_coordinate( "isFollower" ); alert(isFol);

/*
var leaders = $(".yellow").drag_coordinate( "leadersInfo" ); 
for(var i=0; i<leaders.length; i++)
    alert(leaders[i].element.attr('class')+" to axis: "+leaders[i].axis);
*/

/*
var leaders2 = $(".green").drag_coordinate( "leaders" ); 
for(var i=0; i<leaders2.length; i++)
    alert(leaders2[i].attr('class'));
*/
});