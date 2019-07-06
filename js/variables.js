/* 

Example of multi-line comments syntax in JS:
https://www.w3schools.com/js/js_comments.asp

Single line comments can be added via "//"

*/

// Debug your code by printing information in the console. Open the console in your browser's developer tool. For additional options, see https://www.w3schools.com/js/js_output.asp

<scriptsrc=“js/variables.js”></script>

// UI Views
var helloworld //variable is undefined
console.log("Hello World!");

var section_content = document.getElementById("section_content");
console.log(section_content);

var view_landing = document.getElementById("view_landing");
console.log(view_landing);

// UI Components (Navigation Icons)
var input_ico_locate = document.getElementById("input_ico_locate");
console.log(input_ico_locate);

// UI Components (Buttons)
var input_btn_roadconditions = 
document.getElementById("input_btn_roadconditions").addEventListener(" click",function(){
   API_request();
});            
console.log("input_btn_roadconditions");


var input_btn_weatherconditions = 
document.getElementById("input_btn_weatherconditions").addEventListener(" click", function(){
    API_request();
});
console.log(Current Utah Weather Conditions);
    // This function has code blocks to get the data and search for the current road conditions data


var input_btn_maps = document.getElementById("input_btn_maps").addEventListener("click", function(){
  API_request();   
});
console.log(input_btn_maps);


$('.carousel').carousel({
  interval: 2000
})

