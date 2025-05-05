import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule }        from '@angular/common';
import { MatCardModule }       from '@angular/material/card';
import { MatGridListModule }   from '@angular/material/grid-list';
import { TripService }         from '../../services/trip.service';
import Chart                  from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  totalTrips = 0;
  totalEnrollments = 0;
  pendingEnrollments = 0;
  approvedEnrollments = 0;

  @ViewChild('enrollChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  constructor(
    private svc: TripService,
    private router: Router         // ← inject Router
  ) {}

  ngOnInit() {
    this.svc.getAll().subscribe(trips => this.totalTrips = trips.length);
    this.svc.getAllEnrollments().subscribe(enrolls => {
      this.totalEnrollments    = enrolls.length;
      this.pendingEnrollments  = enrolls.filter(e => e.status === 'Pending').length;
      this.approvedEnrollments = enrolls.filter(e => e.status === 'Approved').length;

      const trend = this.computeMonthlyTrend(enrolls);
      this.updateChart(trend.labels, trend.counts);
    });
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Enrollments',
          data: [],
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(33,150,243,0.2)',
          borderColor: 'rgba(33,150,243,1)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Month' } },
          y: { title: { display: true, text: 'Count' }, beginAtZero: true }
        }
      }
    });
  }

  /** navigation helper for your three admin tiles */
  go(path: 'users' | 'trips' | 'enrollments') {
    this.router.navigate(['/admin', path]);
  }

  private updateChart(labels: string[], counts: number[]) {
    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = counts;
    this.chart.update();
  }

  private computeMonthlyTrend(enrolls: any[]) {
    const now = new Date();
    const buckets: Record<string, number> = {};
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toLocaleString('default', { month: 'short', year: 'numeric' });
      buckets[key] = 0;
    }
    enrolls.forEach(e => {
      const d = new Date(e.bookingDate || e.createdAt);
      const key = d.toLocaleString('default', { month: 'short', year: 'numeric' });
      if (buckets.hasOwnProperty(key)) buckets[key]++;
    });
    return {
      labels: Object.keys(buckets),
      counts: Object.values(buckets)
    };
  }
}
