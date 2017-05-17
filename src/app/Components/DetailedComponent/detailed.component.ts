/**
 * Created by Amila on 5/16/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-places',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedPlacesComponent {
  @Input() placeId: any;
  @Input() imagesrc: String;
  @Input() title:any;
  @Input() description:any;
}
