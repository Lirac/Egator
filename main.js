const chart = document.querySelector("#chart").getContext("2d");

//Create a new chart instance
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59094, 39764, 32567, 39967, 48845, 48126, 61002,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          35374, 26537, 49631, 69094, 49764, 42567, 29967, 38845, 38126, 61002,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");
const monthlyReportDetails = document.querySelectorAll(
  ".details .details_header  h5"
);
const expandNavOptions = document.querySelector("#navMenuExpand");
const navMenuOptions = document.querySelector("nav .menuOptions");
const details = document.querySelectorAll(".details_body");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

monthlyReportDetails.forEach((x, index) => {
  x.addEventListener("click", () => {
    details[index].classList.toggle("show");
  });
});

expandNavOptions.addEventListener("click", () => {
  navMenuOptions.style.display === "none"
    ? (navMenuOptions.style.display = "flex")
    : (navMenuOptions.style.display = "none");

  expandNavOptions.innerHTML === "expand_more"
    ? (expandNavOptions.innerHTML = "expand_less")
    : (expandNavOptions.innerHTML = "expand_more");
});
