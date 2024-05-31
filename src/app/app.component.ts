import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '@module/products';

@Component({
  standalone: true,
  imports: [RouterModule, ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-angular-microfrontend';
}
