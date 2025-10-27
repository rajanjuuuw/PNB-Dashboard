// ====== PNB Dashboard Script ======

// ---- Tab Interaktif ----
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    tabContents.forEach(c => c.classList.remove('active'));
    tabContents[i].classList.add('active');
  });
});

// ---- Inisialisasi Chart.js Global ----
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 13;
Chart.defaults.color = "#333";
Chart.defaults.plugins.legend.labels.usePointStyle = true;

// ---- P/L per Product ----
const initPLPerProductChart = () => {
  const ctx = document.getElementById("plPerProductChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Aromatics", "Methanol", "Propylene", "Styrene", "Toluene"],
      datasets: [
        {
          label: "Profit (USD)",
          data: [125000, 95000, 88000, 105000, 72000],
          backgroundColor: "rgba(56, 149, 255, 0.7)",
          borderRadius: 10,
          borderSkipped: false,
        },
        {
          label: "Loss (USD)",
          data: [20000, 12000, 18000, 15000, 8000],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index" },
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          backgroundColor: "#fff",
          titleColor: "#333",
          bodyColor: "#555",
          borderColor: "#ddd",
          borderWidth: 1,
          boxPadding: 6,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(0,0,0,0.05)" },
          ticks: { callback: v => "$" + v.toLocaleString() },
        },
      },
      animation: {
        duration: 1200,
        easing: "easeOutQuart",
      },
    },
  });
};

// ---- P/L Deviation ----
const initPLDeviationChart = () => {
  const ctx = document.getElementById("plDeviationChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Target",
          data: [100, 120, 130, 110, 150, 160],
          borderColor: "#38a1ff",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "#38a1ff",
          fill: false,
        },
        {
          label: "Actual",
          data: [95, 110, 125, 100, 145, 155],
          borderColor: "#ff6384",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "#ff6384",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "nearest" },
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          usePointStyle: true,
          backgroundColor: "#d34545ff",
          borderColor: "#ccc",
          borderWidth: 1,
          titleColor: "#000",
          bodyColor: "#555",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(0,0,0,0.05)" },
        },
      },
      animation: { duration: 1200, easing: "easeInOutCubic" },
    },
  });
};

// ---- P/L per Customer ----
const initPLPerCustomerChart = () => {
  const ctx = document.getElementById("plPerCustomerChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["PT KPI", "Petronas", "ExxonMobil", "Shell", "CNOOC"],
      datasets: [
        {
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            "rgba(56,149,255,0.8)",
            "rgba(255,206,86,0.8)",
            "rgba(75,192,192,0.8)",
            "rgba(255,99,132,0.8)",
            "rgba(153,102,255,0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "65%",
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          backgroundColor: "#fff",
          titleColor: "#000",
          bodyColor: "#444",
          borderColor: "#ddd",
          borderWidth: 1,
        },
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1200,
        easing: "easeOutBack",
      },
    },
  });
};

// ---- Jalankan Semua Chart ----
window.addEventListener("DOMContentLoaded", () => {
  initPLPerProductChart();
  initPLDeviationChart();
  initPLPerCustomerChart();
});
