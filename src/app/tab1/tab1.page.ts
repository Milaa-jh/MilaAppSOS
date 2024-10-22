import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  alertCircleOutline, 
  chatbubblesOutline, 
  personOutline, 
  locationOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({ 
      alertCircleOutline, 
      chatbubblesOutline, 
      personOutline, 
      locationOutline 
    });
  }

  onSOSClick() {
    console.log('SOS Button clicked');
    // Aquí implementarías la lógica del botón SOS
  }

  onChatClick() {
    console.log('Chat clicked');
    // Implementar navegación al chat
  }

  onContactClick() {
    console.log('Contact clicked');
    // Implementar navegación a contactos
  }

  onLocationClick() {
    console.log('Location clicked');
    // Implementar navegación a ubicación
  }
}