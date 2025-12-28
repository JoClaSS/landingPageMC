import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  slides = [
    'bikeStreet.png',
    'bikeGrass.png'
  ];

  currentSlide = 0;
  isScrolled = false;
  isMobileMenuOpen = false;

  ngOnInit(): void {
    setInterval(() => {
      console.log('Current Slide:', this.currentSlide);
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);

    // Initialize scroll animations
    this.initScrollAnimations();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe elements for animation
    setTimeout(() => {
      const elements = document.querySelectorAll('.feature-card, .section-title, .product-card, .testimonial-card, .service-card');
      elements.forEach((el) => observer.observe(el));
    }, 100);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  testimonials = [
    {
      name: 'Alex Júnior',
      rating: 5,
      comment: 'Comprei uma bike aro 29 no mês de abril, muito boa, atendimento de primeira, preço bom, só tenho a agradecer a todos da loja sempre com total atenção e um serviço de qualidade.',
      avatar: '👨‍💼'
    },
    {
      name: 'Ana Cláudia',
      rating: 5,
      comment: 'A manutenção da minha bike ficou perfeita. Fui muito bem atentidade e a equipe é muito profissional e experiente, só tenho a agradecer. Recomendo a todos que amam suas bikes.',
      avatar: '👩'
    },
    {
      name: 'Raíssa Silva',
      rating: 5,
      comment: 'Excelente atendimento!! Encontrei a bike que eu queria com ótimo preço (melhor que em algumas lojas famosas de Natal). Saí de lá com ela montada, regulada e lubrificada. Recomendo!',
      avatar: '🚴‍♂️'
    }
  ];

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

  // Google Maps function
  openGoogleMaps(): void {
    const url = 'https://www.google.com/maps/place/R.+Bom+Pastor,+3995+-+Bom+Pastor,+Natal+-+RN';
    window.open(url, '_blank');
  }

  // Google Reviews function
  openGoogleReviews(): void {
    // URL para buscar e ver avaliações da Mundial Ciclo no Google
    const url = 'https://www.google.com/search?q=Mundial+Ciclo+Natal+RN+avalia%C3%A7%C3%B5es&oq=Mundial+Ciclo+Natal+RN+avalia%C3%A7%C3%B5es#lrd=0x7b2554831d1e477:0xb32843b6bfe47945,1,,,,';
    window.open(url, '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
