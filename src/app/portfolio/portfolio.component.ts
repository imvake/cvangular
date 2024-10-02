import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData, PortfolioSection } from './portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PortfolioComponent {
  portfolioSections: PortfolioSection[] = portfolioData;

  showPopup: boolean = false;
  activeVideo: string = '';

  openPopup(videoSrc: string) {
    this.activeVideo = videoSrc;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.activeVideo = '';
  }
}
