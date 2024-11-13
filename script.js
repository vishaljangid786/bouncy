// Define the SVG for a snowflake
var flake =
        '<svg width="129.108px" height="140.597px" viewBox="0 0 129.108 140.597" enable-background="new 0 0 129.108 140.597" xml:space="preserve" version="1.1" class="flake"><path fill="#00FFFF" d="M106.491,83.706l17.706,10.222l-4.067,7.046l-17.88-10.324l4.693,17.494l-7.814,2.096l-6.121-22.916l-0.604-2.402L71,72.519v25.01l1.569,1.627l16.848,16.906l-5.688,5.727L71,108.984V129h-8v-20.221l-12.917,12.807l-5.837-5.727l16.849-16.775L63,97.325V72.519L41.371,84.922l-0.79,2.402l-6.14,22.916l-7.823-2.096l4.688-17.494l-17.882,10.324l-4.068-7.046l17.705-10.222L9.566,79.018l2.096-7.823l23.095,6.188l2.223,0.596l21.66-12.505L37.157,53.071l-2.402,0.644l-22.916,6.14l-2.096-7.823l17.495-4.688L9.358,37.019l4.07-7.046l17.71,10.222l-4.678-17.494l7.842-2.096L40.525,43.7l0.669,2.223L63,58.428V33.622l-1.868-1.758L44.247,15.088l5.8-5.727L63,22.168V2h8v19.963L83.748,9.156l5.668,5.727L72.549,31.79L71,33.418v25.01l21.581-12.505l0.517-2.223l6.188-23.095l7.823,2.096l-4.688,17.494l17.705-10.222l4.068,7.046l-17.882,10.324l17.494,4.688l-2.096,7.823l-22.916-6.14l-2.402-0.644L74.911,65.473L96.57,77.979l2.223-0.596l23.095-6.188l2.096,7.823L106.491,83.706z"/></svg>';

// Function to create snowflakes
function create_snow_lake() {
  // Generate random values for snowflake properties
  var falling_time = Math.floor(Math.random() * 100) + 5; // Random falling time between 5 and 105 seconds
  var flake_pos = Math.floor(Math.random() * 200); // Random position between 4% and 104% of the viewport width
  var flake_size = (Math.floor(Math.random() * 100) + 1) / 200; // Random size between 0.01 and 1
  // Create the HTML for the snowflake
  var snow_flake =
    "<div class='flake-wrapper' style='width:40px; left:" +
    flake_pos +
    "%;height:40px;transform:scale(" +
    flake_size +
    ");animation:falling " +
    falling_time +
    "s linear infinite'>" +
    flake +
    "</div>";
  // Append the snowflake to the background
  $(snow_flake).appendTo(".background");
}

// Function to remove snowflakes that have fallen off the viewport
function remove_snow_lake() {
  // Iterate through each snowflake
  $(".flake-wrapper").each(function () {
    // Get the position of the snowflake
    var flake_pos = $(this).offset().top;
    // Get the height of the document minus a small margin
    var body_height = $(document).height() - 100;
    // If the snowflake has fallen off the viewport, remove it
    if (flake_pos > body_height) {
      $(this).remove();
    }
  });
}

// Start the snowfall effect on window load
$(window).on("load", function () {
  // Set an interval to create and remove snowflakes every 200 milliseconds
  interval = setInterval(function () {
    create_snow_lake();
    remove_snow_lake();
  }, 200);
});


// Get elements
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("hamburgerIcon");

// Toggle the visibility of the mobile menu and change the logo when the hamburger icon is clicked
mobileMenuToggle.addEventListener("click", () => {
  // Toggle the mobile menu visibility
  mobileMenu.classList.toggle("hidden");

  // Change the hamburger icon to close icon (or vice versa)
  if (mobileMenu.classList.contains("hidden")) {
    // Menu is closed, show hamburger icon
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
    // Restore the logo
  } else {
    // Menu is open, show close icon
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  }
});