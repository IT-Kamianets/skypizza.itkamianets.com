import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'SkyPizza';
  isMenuOpen = false;
  isDarkMode = false;

  menuItems = [
    { name: 'Salmone', price: 299, desc: 'Лосось, груша, фета, грецький горіх', category: 'gourmet', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
    { name: 'Піца з сирними кульками та руколою', price: 279, desc: 'Сирні кульки Філадельфія, бекон, рукола', category: 'gourmet', image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800' },
    { name: 'Груша та мед', price: 279, desc: 'Груша, дорблю, мед, грецький горіх', category: 'gourmet', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800' },
    { name: 'Прошуто', price: 289, desc: 'Прошуто, в’ялені томати, рукола, чері', category: 'gourmet', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800' },
    { name: 'Діавола', price: 289, desc: 'Чорізо, чилі, шрірача, в’ялені томати (дуже гостра)', category: 'spicy', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Козацька', price: 289, desc: 'Бекон, салямі, курка, огірок, чилі, карамелізована цибуля', category: 'spicy', image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800' },
    { name: 'М’ясна', price: 289, desc: 'Курка, мисливські ковбаски, свинина, шинка, перепелине яйце', category: 'hearty', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
    { name: 'Карбонара', price: 269, desc: 'Вершково-часниковий соус, бекон, пармезан, жовток', category: 'classic', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800' },
    { name: '4 Сезони', price: 269, desc: 'Курка, ананас, шинка, гриби, салямі', category: 'classic', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800' },
    { name: 'Пепероні', price: 239, desc: 'Класична пепероні з моцарелою', category: 'classic', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Маргарита', price: 187, desc: 'Томати, моцарела, базилік', category: 'classic', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800' }
  ];

  selectedCategory = 'all';

  ngOnInit() {
    document.body.classList.remove('dark-theme');
  }

  get filteredMenu() {
    if (this.selectedCategory === 'all') return this.menuItems;
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
