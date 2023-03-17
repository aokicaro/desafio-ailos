import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  
  private $routerSubscription: Subscription = Subscription.EMPTY;
  breadcrumb: { label: string, link: string }[] = [];
  title: string = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.$routerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.buildBreadCrumb()
  }

  private buildBreadCrumb(): void {
    this.$routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = this.route.firstChild;
        this.breadcrumb = [];
        while (route) {
          this.breadcrumb.push({ label: route.snapshot.data['breadcrumb'], link: route.snapshot.url.join('/') });
          route = route.firstChild;
          if(route?.snapshot.data['breadcrumb']){
            this.title = route?.snapshot.data['breadcrumb']
          }
        }
      }
    });    

  }

  
}