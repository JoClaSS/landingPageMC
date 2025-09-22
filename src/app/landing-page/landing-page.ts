import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage {
  slides = [
    'bikeStreet.png',
    'bikeGrass.png'

  ];

  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      console.log('Current Slide:', this.currentSlide);
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  // WhatsApp function
  openWhatsApp(): void {
    const phoneNumber = '5584991682599'; // Número com código do país
    const message = 'Olá! Gostaria de saber mais sobre as bicicletas da Mundial Ciclo.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // Instagram function
  openInstagram(): void {
    // Substitua pelo @ do Instagram da loja
    const instagramHandle = 'mundialciclo';
    const url = `https://www.instagram.com/${instagramHandle}`;
    window.open(url, '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
