/**
 * Created by Amila on 5/16/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  places: any[];
  DetailedList: any[];
  constructor() {
    this.places = [
      {
        imageSrc : 'https://wallpaperbrowse.com/media/images/best-nature-desktop-hd-wallpaper.jpg',
        title: 'Peradeniya',
        description: 'Tourism in Sri Lanka is growing rapidly. For centuries, Sri Lanka has been a popular place of attraction for foreign travelers. The famous Chinese traveler Fa-Hien arrived in Sri Lanka in the late 4th century. In the twelfth century, Italian explorer Marco Polo claimed that Sri Lanka to be the "best island of its size in the world".[1][2] In view of its fascinating scenic beauty and rich cultural heritage, Sri Lanka is one of the best tourist destinations in the world.'
      },
      {
        imageSrc : 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
        title: 'Place Two',
        description: 'Tourism in Sri Lanka is growing rapidly. For centuries, Sri Lanka has been a popular place of attraction for foreign travelers. The famous Chinese traveler Fa-Hien arrived in Sri Lanka in the late 4th century. In the twelfth century, Italian explorer Marco Polo claimed that Sri Lanka to be the "best island of its size in the world".[1][2] In view of its fascinating scenic beauty and rich cultural heritage, Sri Lanka is one of the best tourist destinations in the world.'
      },
      {
        imageSrc : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGEw4ytWx2rUF9VWtBzYtYwJz1Latd13i_JEeMXDN6sg65tyPR1Q',
        title: 'Place Three',
        description: 'Tourism in Sri Lanka is growing rapidly. For centuries, Sri Lanka has been a popular place of attraction for foreign travelers. The famous Chinese traveler Fa-Hien arrived in Sri Lanka in the late 4th century. In the twelfth century, Italian explorer Marco Polo claimed that Sri Lanka to be the "best island of its size in the world".[1][2] In view of its fascinating scenic beauty and rich cultural heritage, Sri Lanka'
      }
    ];
    this.DetailedList = [
      {
        imageSrc: 'http://kandyinn.com/wp/wp-content/uploads/2014/10/photo15.JPG',
        title: 'Temple Of Tooth',
        description: 'Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. Kandy was the last capital of the Sri Lankan kings and is a World Heritage Site mainly due to the temple.hikkhus of the two chapters of Malwatte and Asgiriya conduct daily worship in the inner chamber of the temple. Rituals are performed three times daily: at dawn, at noon and in the evenings. On Wednesdays there is a symbolic bathing of the relic with an herbal preparation made from scented water and fragrant flowers called Nanumura Mangallaya. This holy water is believed to contain healing powers and is distributed among those present.'
      },
      {
        imageSrc: 'http://www.walkerstours.com/wp-content/uploads/2015/04/Polonnaruwa21.jpg',
        title: 'Polonnaruwa Watadageya',
        description: 'The Polonnaruwa Vatadage is an ancient structure dating back to the Kingdom of Polonnaruwa of Sri Lanka. It is believed to have been built during the reign of Parakramabahu I to hold the Relic of the tooth of the Buddha or during the reign of Nissanka Malla of Polonnaruwa to hold the alms bowl used by the Buddha. Both these venerated relics would have given the structure a great significance and importance at the time. Located within the ancient city of Polonnaruwa, it is the best preserved example of a vatadage in the country, and has been described as the "ultimate development" of this type of architecture. Abandoned for several centuries, excavation work at the Polonnaruwa Vatadage began in 1903.'
      },
      {
        imageSrc: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-550859245_full.jpg?sharp=10&vib=20&w=1200',
        title: 'Sigiriya',
        description: 'Sigiriya or Sinhagiri (Lion Rock Sinhalese: සීගිරිය, Tamil: சிகிரியா, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high. According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kasyapa (477 – 495 CE) for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure —Sīhāgiri, the Lion Rock. The capital and the royal palace was abandoned after the kings death. It was used as a Buddhist monastery until the 14th century.[1]'
      }

    ]
  }
}
