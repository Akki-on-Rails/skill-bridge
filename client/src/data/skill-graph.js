import React from 'react';
import {Bar } from 'react-chartjs-2';
import 'chart.js/auto'

function SkillsChart({ skills }) {
  const labels = skills.map(skill => skill.skillName);
  const data = {
    labels: labels,
    datasets: [
      {
        label:"",
        data: skills.map(skill => skill.wertung),
        borderColor: "#D0D8FB",
        backgroundColor: "#D0D8FB",
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false,
        text: 'My Skills Chart',
      },
    },
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default SkillsChart;
