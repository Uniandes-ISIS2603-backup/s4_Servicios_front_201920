import { Component, OnInit, Input, } from '@angular/core';
import { SolicitudDetail } from '../solicitud-detail';

@Component({
    selector: 'app-cliente-solicitudes',
    templateUrl: './cliente-solicitudes.component.html',
})
export class ClienteSolicitudesComponent implements OnInit {
    @Input() servicios : SolicitudDetail [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateSolicitudes(solicitudesNuevas:SolicitudDetail[]): void {
        this.servicios = solicitudesNuevas;
    }
    
    ngOnInit(){
    }
}

