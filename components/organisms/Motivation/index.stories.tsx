import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Motivation from './index'

export default {
  title      : 'Organisms/Motivation',
  component  : Motivation
} as Meta

const Template: Story = args => <Motivation {...args} />

export const Sample = Template.bind({})

// y軸のラベル表記を定義
const yAxesLabels = ['高', '', '低']
const tooltipLabels = [
  'ホテルフロントマン',
  'DTPデザイナー',
  'Webエンジニア',
  'フロントエンドエンジニア',
  'フロントエンドエンジニア'
]
// chart.js専用パラメータ
const params = {
  type : 'line',
  data : {
    labels : [
      '23歳',
      '25歳',
      '27歳',
      '29歳',
      '現在'
    ],
    datasets : [{
      data                 : [0, -80, -40, 60, 0],
      lineTension          : 0,
      fill                 : false,
      borderColor          : '#84CBD7',
      pointRadius          : 3,
      pointBackgroundColor : '#84CBD7'
    }]
  },
  options : {
    maintainAspectRatio : false,
    legend : {
      display : false
    },
    tooltips : {
      displayColors   : false,
      titleFontSize   : 10,
      bodyFontSize    : 10,
      backgroundColor : '#6b6b6b99',
      callbacks       : {
        title : () => '職業',
        label : (item: any) => {
          const index: number = item.index
          return tooltipLabels[index]
        }
      }
    },
    showAllTooltips : true,
    // x軸、y軸のカスタマイズ
    scales : {
      xAxes : [{
        ticks : {
          stepSize : 2,
          padding  : 12,
          fontSize : 10.5
        }
      }],
      yAxes: [{
        ticks: {
          max        : 100,
          min        : -100,
          lineHeight : 5,
          padding    : 7,
          fontSize   : 10.5,
          callback   : (value: string, index: number) => yAxesLabels[index]
        }
      }]
    }
  }
}

Sample.args = {
  params
}
