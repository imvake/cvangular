import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  openModal() {
    // Once clicked on the button, open the modal
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  private sections: NodeListOf<HTMLElement> | undefined;

  private scrollListener: (() => void) | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.sections = this.el.nativeElement.querySelectorAll('section');
    this.scrollListener = this.renderer.listen(
      'window',
      'scroll',
      this.scrollActive.bind(this)
    );
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  scrollActive() {
    const scrollY = window.pageYOffset;

    this.sections?.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const activeLink = this.el.nativeElement.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );
        if (activeLink) {
          this.renderer.addClass(activeLink, 'active-link');
        }
      } else {
        const activeLink = this.el.nativeElement.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );
        if (activeLink) {
          this.renderer.removeClass(activeLink, 'active-link');
        }
      }
    });
  }
}
