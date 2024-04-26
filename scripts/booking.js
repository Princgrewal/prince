/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35;
let initial = 0;
let selected_days = [];

const day_buttons = document.querySelectorAll(".day-selector li");
const calculated_cost = document.getElementById("calculated-cost");
const clear_button = document.getElementById("clear-button");
const full_day_button = document.getElementById("full");
const half_day_button = document.getElementById("half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handle_days(event) {
    const clickedButton = event.target;
    if (!clickedButton.classList.contains("clicked")) {
        clickedButton.classList.add("clicked");
        initial++;
        selected_days.push(clickedButton.textContent);
    }
    calculate_cost();
}





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_days() {
    day_buttons.forEach(function (button) {
        button.classList.remove("clicked");});
    initial = 0;
    selected_days = [];
    full_day_rate();
    calculate_cost();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day_rate() {
    cost_per_day = 20;
    full_day_button.classList.remove("clicked");
    half_day_button.classList.add("clicked");
    calculate_cost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function full_day_rate() {
    cost_per_day = 35;
    full_day_button.classList.add("clicked");
    half_day_button.classList.remove("clicked");
    calculate_cost();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate_cost() {
    const total_cost = cost_per_day * initial;
    calculated_cost.innerHTML = total_cost;
}
day_buttons.forEach(function (button) {
    button.addEventListener("click", handle_days);});
clear_button.addEventListener("click", function(){ 
    clear_days();});
full_day_button.addEventListener("click", function(){
    full_day_rate();});
half_day_button.addEventListener("click", function(){
    half_day_rate();});

calculate_cost();
