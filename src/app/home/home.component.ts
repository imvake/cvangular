import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedTextSpan') typedTextSpan!: ElementRef;
  @ViewChild('cursorSpan') cursorSpan!: ElementRef;

  textArray = ['Alwaleed Blog'];
  typingDelay = 200;
  erasingDelay = 100;
  newTextDelay = 2000;
  textArrayIndex = 0;
  charIndex = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    if (this.textArray.length) {
      setTimeout(() => this.type(), this.newTextDelay + 250);
    }
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      this.renderer.addClass(this.cursorSpan.nativeElement, 'typing');
      this.typedTextSpan.nativeElement.textContent += this.textArray[
        this.textArrayIndex
      ].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.renderer.removeClass(this.cursorSpan.nativeElement, 'typing');
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      this.renderer.addClass(this.cursorSpan.nativeElement, 'typing');
      this.typedTextSpan.nativeElement.textContent = this.textArray[
        this.textArrayIndex
      ].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.renderer.removeClass(this.cursorSpan.nativeElement, 'typing');
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) this.textArrayIndex = 0;
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }
}
