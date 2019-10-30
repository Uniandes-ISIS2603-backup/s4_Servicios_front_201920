import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';

/**
 * The component for the list of solicitudes
 */
@Component({
    selector: 'list-solicitud',
    templateUrl: './solicitud-list.component.html', 
})
export class SolicitudListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private solicitudService: SolicitudService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    solicitudes: Solicitud[];

    /**
     * Asks the service to update the list of editorials
     */
    getSolicitudes(): void {
        this.solicitudService.getSolicitudes().subscribe(theSolicitudes => this.solicitudes = theSolicitudes);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getSolicitudes();
    }
}