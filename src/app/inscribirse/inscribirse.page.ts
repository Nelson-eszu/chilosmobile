import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class InscribirsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
