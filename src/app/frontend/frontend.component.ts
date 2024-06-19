import { Component } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-frontend',
    standalone: true,
    templateUrl: './frontend.component.html',
    styleUrl: './frontend.component.css',
    imports: [ChildCardInfoComponent, HeaderComponent, FooterComponent]
})
export class FrontendComponent {

}
