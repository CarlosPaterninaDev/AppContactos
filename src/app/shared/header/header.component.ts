import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeIcon = faHome;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home(){

    this.router.navigateByUrl('/dashboard');

  }

}
