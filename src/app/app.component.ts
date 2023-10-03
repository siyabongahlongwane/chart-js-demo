import { Component, ViewChild } from '@angular/core';
import { BarControllerDatasetOptions, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

//import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {  
        stacked: true, // Enable stacking for x-axis
        grid: {
          display: false, // Hide vertical grid lines for x-axis
        },
        ticks: {
          //fontSize: 14, // Set the font size of labels
          color: 'red', // Set the font color of labels
          minRotation: 90, // Rotate labels by 90 degrees (vertically)
        },
      },
      y: {
        min: 5,
        stacked: true, // Enable stacking for y-axis
        ticks: {
          display: false, // Hide y-axis ticks
        },
      },
      
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    //indexAxis: 'x', // Stack bars vertically
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [
      '176: Payment validation request',
      '253: Insurance payment request',
      '187: Validation support fixed',
      '188: QA done -  Continue payment',
      '153: Validation support fixed',
      '287: Insurance payment request',
      '388: QA done -  Continue payment',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: '#a34121',
        barPercentage: .2
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: '#339e3c',
        barPercentage: .2
      },
    ],
  };
  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
}
