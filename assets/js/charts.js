// ===== CHART CONFIG =====
const PLOTLY_DARK = {
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor:  'rgba(0,0,0,0)',
  font:          { family: 'Inter, sans-serif', color: '#7a8fad', size: 11 },
  xaxis:         { gridcolor: 'rgba(0,194,255,0.07)', zerolinecolor: 'rgba(0,194,255,0.1)' },
  yaxis:         { gridcolor: 'rgba(0,194,255,0.07)', zerolinecolor: 'rgba(0,194,255,0.1)' },
  margin:        { t: 10, r: 10, b: 40, l: 50 },
  showlegend:    true,
  legend:        { bgcolor: 'rgba(0,0,0,0)', font: { size: 10 } },
};

const CONFIG = { responsive: true, displayModeBar: false };

// ===== DATA GENERATION =====
function linspace(start, end, n) {
  return Array.from({ length: n }, (_, i) => start + (end - start) * i / (n - 1));
}

function randn(mu = 0, sigma = 1) {
  const u = 1 - Math.random();
  const v = Math.random();
  return mu + sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function addNoise(arr, sigma) {
  return arr.map(v => v + randn(0, sigma));
}

// Simulate CMAPSS-style sensor degradation (300 cycles)
const N = 300;
const cycles = linspace(1, N, N);

// Degradation onset around cycle 200
const degradation = cycles.map(c => {
  if (c < 200) return 0;
  return Math.pow((c - 200) / 100, 1.5);
});

const sensors = {
  vibration: addNoise(cycles.map((c, i) => 0.82 + 0.18 * degradation[i]), 0.02),
  temperature: addNoise(cycles.map((c, i) => 480 + 60 * degradation[i]), 4),
  pressure: addNoise(cycles.map((c, i) => 14.62 - 0.4 * degradation[i]), 0.08),
  rotation: addNoise(cycles.map((c, i) => 1400 - 80 * degradation[i]), 12),
};

// RUL: actual vs predicted
const rulActual = cycles.map(c => Math.max(0, N - c));
const rulPredicted = addNoise(
  cycles.map((c, i) => {
    const base = Math.max(0, N - c);
    const bias = i < 200 ? randn(0, 5) : randn(-8, 15);
    return Math.max(0, base + bias);
  }),
  3
);

// Health index (0–100%)
const healthIndex = cycles.map((c, i) => Math.max(0, 100 - 100 * Math.pow(degradation[i], 0.7)));

// Anomaly scatter
const anomalyLabels = cycles.map(c => c > 240 ? 'Anomaly' : c > 220 ? 'Warning' : 'Normal');
const anomalyX = sensors.vibration;
const anomalyY = sensors.temperature;

// ===== CHART 1: Sensor Time Series =====
function drawSensorChart() {
  const traces = [
    {
      x: cycles, y: sensors.vibration,
      name: 'Vibration (g)',
      line: { color: '#00c2ff', width: 1.5 },
      type: 'scatter', mode: 'lines',
      yaxis: 'y',
    },
    {
      x: cycles, y: sensors.temperature,
      name: 'Temperature (°C)',
      line: { color: '#ff8c42', width: 1.5 },
      type: 'scatter', mode: 'lines',
      yaxis: 'y2',
    },
    {
      x: cycles, y: sensors.pressure,
      name: 'Pressure (bar)',
      line: { color: '#00e5a0', width: 1.5 },
      type: 'scatter', mode: 'lines',
      yaxis: 'y3',
    },
  ];

  const layout = {
    ...PLOTLY_DARK,
    xaxis: { ...PLOTLY_DARK.xaxis, title: 'Operating Cycle', domain: [0, 1] },
    yaxis:  { ...PLOTLY_DARK.yaxis, title: 'Vibration', titlefont: { color: '#00c2ff' }, tickfont: { color: '#00c2ff' } },
    yaxis2: { ...PLOTLY_DARK.yaxis, title: 'Temp (°C)', titlefont: { color: '#ff8c42' }, tickfont: { color: '#ff8c42' }, overlaying: 'y', side: 'right', showgrid: false },
    yaxis3: { visible: false, overlaying: 'y' },
    shapes: [{
      type: 'line', x0: 200, x1: 200, y0: 0, y1: 1, yref: 'paper',
      line: { color: '#ff4444', dash: 'dot', width: 1.5 },
    }],
    annotations: [{
      x: 202, y: 0.95, yref: 'paper',
      text: 'Degradation onset', showarrow: false,
      font: { color: '#ff4444', size: 10 },
      xanchor: 'left',
    }],
    margin: { t: 10, r: 70, b: 45, l: 60 },
  };

  Plotly.newPlot('chart-sensors', traces, layout, CONFIG);
}

// ===== CHART 2: RUL Prediction =====
function drawRULChart() {
  const traces = [
    {
      x: cycles, y: rulActual,
      name: 'Actual RUL',
      line: { color: '#00e5a0', width: 2 },
      type: 'scatter', mode: 'lines',
    },
    {
      x: cycles, y: rulPredicted,
      name: 'Predicted RUL',
      line: { color: '#00c2ff', width: 1.5, dash: 'dot' },
      type: 'scatter', mode: 'lines',
    },
    {
      x: [cycles[0], cycles[N-1]],
      y: [30, 30],
      name: 'Alert threshold',
      line: { color: '#ff4444', width: 1, dash: 'dash' },
      type: 'scatter', mode: 'lines',
    },
  ];

  const layout = {
    ...PLOTLY_DARK,
    xaxis: { ...PLOTLY_DARK.xaxis, title: 'Operating Cycle' },
    yaxis: { ...PLOTLY_DARK.yaxis, title: 'RUL (cycles)' },
  };

  Plotly.newPlot('chart-rul', traces, layout, CONFIG);
}

// ===== CHART 3: Anomaly Detection =====
function drawAnomalyChart() {
  const groups = {
    Normal:  { x: [], y: [] },
    Warning: { x: [], y: [] },
    Anomaly: { x: [], y: [] },
  };
  anomalyLabels.forEach((lbl, i) => {
    groups[lbl].x.push(anomalyX[i]);
    groups[lbl].y.push(anomalyY[i]);
  });

  const colors = { Normal: '#00e5a0', Warning: '#ff8c42', Anomaly: '#ff4444' };
  const traces = Object.entries(groups).map(([name, d]) => ({
    x: d.x, y: d.y,
    name,
    mode: 'markers',
    type: 'scatter',
    marker: { color: colors[name], size: 4, opacity: 0.8 },
  }));

  const layout = {
    ...PLOTLY_DARK,
    xaxis: { ...PLOTLY_DARK.xaxis, title: 'Vibration (g)' },
    yaxis: { ...PLOTLY_DARK.yaxis, title: 'Temperature (°C)' },
  };

  Plotly.newPlot('chart-anomaly', traces, layout, CONFIG);
}

// ===== CHART 4: Health Score Gauge =====
function drawHealthGauge() {
  const lastHealth = healthIndex[N - 1];

  const data = [{
    type: 'indicator',
    mode: 'gauge+number+delta',
    value: Math.round(lastHealth),
    delta: { reference: healthIndex[N - 30], valueformat: '.1f' },
    title: { text: 'Equipment Health Score (%)', font: { color: '#7a8fad', size: 12 } },
    number: { suffix: '%', font: { color: '#00c2ff', size: 42 } },
    gauge: {
      axis: { range: [0, 100], tickcolor: '#7a8fad', dtick: 25 },
      bar: { color: lastHealth > 60 ? '#00e5a0' : lastHealth > 30 ? '#ff8c42' : '#ff4444', thickness: 0.25 },
      bgcolor: 'rgba(0,0,0,0)',
      bordercolor: 'rgba(0,194,255,0.15)',
      steps: [
        { range: [0, 30],  color: 'rgba(255,68,68,0.1)' },
        { range: [30, 60], color: 'rgba(255,140,66,0.1)' },
        { range: [60, 100],color: 'rgba(0,229,160,0.1)' },
      ],
      threshold: {
        line: { color: '#ff4444', width: 2 },
        thickness: 0.8,
        value: 30,
      },
    },
  }];

  const layout = {
    ...PLOTLY_DARK,
    margin: { t: 50, r: 20, b: 20, l: 20 },
  };

  Plotly.newPlot('chart-gauge', data, layout, CONFIG);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer — draw charts when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.drawn) {
        e.target.dataset.drawn = '1';
        const id = e.target.id;
        if (id === 'chart-sensors') drawSensorChart();
        if (id === 'chart-rul')     drawRULChart();
        if (id === 'chart-anomaly') drawAnomalyChart();
        if (id === 'chart-gauge')   drawHealthGauge();
      }
    });
  }, { threshold: 0.2 });

  ['chart-sensors','chart-rul','chart-anomaly','chart-gauge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
