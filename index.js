var ctx = document.getElementById("myChart").getContext("2d");
let data = [
  {
    month: "January",
    facebook: 5481245,
    instagram: 5014578,
  },
  {
    month: "February",
    facebook: 5435612,
    instagram: 5127956,
  },
  {
    month: "March",
    facebook: 5351241,
    instagram: 5415673,
  },
  {
    month: "January",
    facebook: 5081547,
    instagram: 5514571,
  },
  {
    month: "January",
    facebook: 5181248,
    instagram: 5914572,
  },
  {
    month: "January",
    facebook: 4281249,
    instagram: 6014570,
  },
  {
    month: "January",
    facebook: 4281568,
    instagram: 6514572,
  },
  {
    month: "January",
    facebook: 4581254,
    instagram: 6514578,
  },
  {
    month: "January",
    facebook: 4488995,
    instagram: 7014576,
  },
  {
    month: "January",
    facebook: 4601248,
    instagram: 7214576,
  },
  {
    month: "January",
    facebook: 4581245,
    instagram: 7014577,
  },
  {
    month: "January",
    facebook: 4081242,
    instagram: 7014879,
  },
];
let month = data.map((data) => data.month);
console.log(month);
let instagram = data.map((data) => data.instagram);
let facebook = data.map((data) => data.facebook);
console.log(facebook);

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: month,
    datasets: [
      {
        label: "facebook",
        data: facebook,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "instagram",
        data: instagram,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
