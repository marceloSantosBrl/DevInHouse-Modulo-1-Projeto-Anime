import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent {
  @Input() public title: string = '';

  @Input() public fotos: string[] = [];

  public index: number = 0;

  public goToNextImage(): void {
    if (this.index !== this.fotos.length - 1) {
      this.index += 1;
    }
  }

  public goToPreviousImage(): void {
    if (this.index !== 0) {
      this.index -= 1;
    }
  }

  public goToLastImage(): void {
    this.index = this.fotos.length - 1;
  }

  public goToFirstImage(): void {
    this.index = 0;
  }
}
