import { Component } from '@angular/core';
import { Card } from './ui/card/card';
import { CardHeader } from "./ui/card/card-header";
import { CardTitle } from './ui/card/card-title';
import { CardDescription } from './ui/card/card-description';
import { CardContent } from './ui/card/card-content';

@Component({
  selector: 'app-root',
  imports: [Card, CardHeader, CardTitle, CardDescription, CardContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
