/**
 * Created by Amila on 5/16/2017.
 */
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  @Input() imageSrc: String;
  @Input() Title: any;
  @Input() Description: any;
}
