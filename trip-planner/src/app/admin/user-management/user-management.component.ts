import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MatTableModule }    from '@angular/material/table';
import { MatButtonModule }   from '@angular/material/button';
import { MatCardModule }     from '@angular/material/card';
import { MatIconModule }     from '@angular/material/icon';
import { MatTooltipModule }  from '@angular/material/tooltip';
import { UserService }       from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  displayed: string[] = ['name', 'email', 'role', 'actions'];

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.userSvc.getAll().subscribe(u => this.users = u);
  }

  delete(id: string) {
    if (!confirm('Delete this user?')) return;
    this.userSvc.delete(id).subscribe(() => this.load());
  }
}
