"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderCard = void 0;
const theme_js_1 = require("./theme.js");
const icon_js_1 = require("./icon.js");
function RenderCard(items, theme = 'light') {
    let { BackgroundColor, IconColor, TextColor } = (0, theme_js_1.getTheme)("default");
    if ((0, theme_js_1.getTheme)(theme)) {
        BackgroundColor = (0, theme_js_1.getTheme)(theme).BackgroundColor;
        TextColor = (0, theme_js_1.getTheme)(theme).TextColor;
        IconColor = (0, theme_js_1.getTheme)(theme).IconColor;
    }
    let title_compose = '';
    let shape_compose = '';
    let textarea_compose = '';
    for (let i = 0; i < items.length; i++) {
        items[i].id = `key_${i}`;
        switch (items[i].type) {
            case 'title':
                title_compose += renderType(items[i]);
                break;
            case "shape":
                shape_compose += renderType(items[i]);
                break;
            case "textarea":
                textarea_compose += renderType(items[i]);
                break;
        }
    }
    return `
  <svg xmlns='http://www.w3.org/2000/svg' width='467' height='195' viewBox='0 0 467 195' fill='none' role='img'
  aria-labelledby='descId'>
  <title id='titleId'>数据卡片</title>
  <desc id='descId'>卡片组件</desc>
  <style> .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; animation: fadeInAnimation 0.8s ease-in-out forwards; } @supports(-moz-appearance: auto) { /* Selector detects Firefox */ .header { font-size: 15.5px; } } .stat { font: 600 14px 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; fill: #434d58; } @supports(-moz-appearance: auto) { /* Selector detects Firefox */ .stat { font-size: 12px; } } .stagger { opacity: 0; animation: fadeInAnimation 0.3s ease-in-out forwards; } .rank-text { font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #434d58; animation: scaleInAnimation 0.3s ease-in-out forwards; } .rank-percentile-header { font-size: 14px; } .rank-percentile-text { font-size: 16px; } .not_bold { font-weight: 400 } .bold { font-weight: 700 } .icon { fill: #4c71f2; display: block; } .rank-circle-rim { stroke: #2f80ed; fill: none; stroke-width: 6; opacity: 0.2; } .rank-circle { stroke: #2f80ed; stroke-dasharray: 400; fill: none; stroke-width: 6; stroke-linecap: round; opacity: 0.8; transform-origin: -10px 8px; transform: rotate(-90deg); animation: rankAnimation 1s forwards ease-in-out; } @keyframes rankAnimation { from { stroke-dashoffset: 251.32741228718345; } to { stroke-dashoffset: 229.47868257901763; } } /* Animations */ @keyframes scaleInAnimation { from { transform: translate(-5px, 5px) scale(0); } to { transform: translate(-5px, 5px) scale(1); } } @keyframes fadeInAnimation { from { opacity: 0; } to { opacity: 1; } } 
  /* 填充颜色 背景*/
  [data-testid='card-bg']{
    fill:${BackgroundColor} !important
  }
  /* 文字颜色 */
  .rank-text,.stat.bold{
    fill: ${TextColor} !important;
  }
  /* icon颜色 */
  .header,.icon{
    fill: ${IconColor};
  }
  .rank-circle{
    stroke: ${IconColor};
  }
  </style>

  <rect data-testid='card-bg' x='0.5' y='0.5' rx='4.5' height='99%' stroke='#e4e2e2' width='466' 
    stroke-opacity='0' />

  ${title_compose}
  <g data-testid='main-card-body' transform='translate(0, 55)'>
  ${shape_compose}
    <svg x='0' y='0'>
      ${textarea_compose}
    </svg>
  </g>
</svg>
  `;
}
exports.RenderCard = RenderCard;
/**
 * @des step2辅助函数：辅助渲染type = title | shape | textarea
 * @param data
 * @returns
 */
function renderType(data) {
    if (data.type === 'title') {
        return `
    <g data-testid='card-title' transform='translate(25, 35)'>
      <g transform='translate(0, 0)'>
        <text x='0' y='0' class='header' data-testid='header'>${data.title}</text>
      </g>
    </g>
    `;
    }
    if (data.type == "shape") {
        return `
      <g data-testid='rank-circle' transform='translate(390.5, 47.5)'>
        <circle class='rank-circle-rim' cx='-10' cy='8' r='40' />
        <circle class='rank-circle' cx='-10' cy='8' r='40' />
        <g class='rank-text'>
          <text x='-5' y='2' alignment-baseline='central' dominant-baseline='central' text-anchor='middle'
            data-testid='level-rank-icon'>
            ${data.text}
          </text>
        </g>
      </g>
    `;
    }
    // 默认情况
    return `
  <g transform='translate(0, ${data.translate_y})'>
    <g class='stagger' style='animation-delay: 450ms' transform='translate(25, 0)'>
      ${(0, icon_js_1.getIcon)(data.icon)}
      <text class='stat  bold' x='25' y='12.5'>${data.title}:</text>
      <text class='stat  bold' x='220' y='12.5' data-testid='undefined'>${data.text}</text>
    </g>
  </g>
  
  `;
}
