import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
//crear una interface para definir propiedades que el componente lista va
a tener
interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}
@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    //crear nuevo listado
    //componentes: any[] = [];
    componentes: Componente[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'alert-circle-outline',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker-outline',
            name: 'Avatar',
            redirectTo: '/avatar'
        }
    ];
    constructor(private menuCtrl: MenuController) { }
    ngOnInit() {
    }
    mostrarMenu() {
        this.menuCtrl.open('first');
    }
}
componentes: Observable<Componente[]>;
constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }
ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
}
