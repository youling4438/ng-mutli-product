import { Component } from '@angular/core';
import { PRD_NAME } from '../configurations/config';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mutli-prod-demo';
  prdName: string = PRD_NAME;
  envBrandName: string = environment.brand_name;
}
