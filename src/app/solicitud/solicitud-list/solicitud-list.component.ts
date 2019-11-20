import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';

/**
 * The component for the list of solicitudes
 */
@Component({
    selector: 'list-solicitud',
    templateUrl: './solicitud-list.component.html', 
    styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private solicitudService: SolicitudService, private route: ActivatedRoute) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    @Input() solicitudes: Solicitud[];

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