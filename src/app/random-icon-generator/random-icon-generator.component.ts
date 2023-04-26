import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';

function camelCaseToKebabCase(str: string) {
  return str
    .replace(/^fa/, '')
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/^-/, '');
}

@Component({
  selector: 'app-random-icon-generator',
  templateUrl: './random-icon-generator.component.html',
  styleUrls: ['./random-icon-generator.component.css'],
})
export class RandomIconGeneratorComponent {
  iconName: IconName | null;
  iconNames: IconName[];
  icons: IconName[] = [];

  constructor(private library: FaIconLibrary) {
    this.iconName = null;
    this.iconNames = Object.keys(fas).map((key) =>
      camelCaseToKebabCase(key)
    ) as IconName[];
    library.addIconPacks(fas);
  }

  showRandomIcon() {
    const randomIndex = Math.floor(Math.random() * this.iconNames.length);
    const iconName = this.iconNames[randomIndex] as IconName;
    this.icons.push(iconName);
    console.log(this.icons);

    setTimeout(() => {
      this.icons = this.icons.filter((icon) => icon !== iconName);
    }, 3000);
  }
}
