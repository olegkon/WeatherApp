import {Component} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
 
 
@Component({
    selector: 'my-grid1',
    template: `
    	<br/>
    	<h2>Grid1 Component</h2>
    
         <ag-grid-ng2 style="height:600px; width:845px"  
            class="ag-fresh" [gridOptions]="gridOptions" >
         </ag-grid-ng2 >
     `
})
 
 
export class Grid1Component {

    private gridOptions:GridOptions;

 
    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();

    /*    this.gridOptions = {
            rowData: this.myRowData,
            columnDefs: this.columnDefs,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true
        }
    */
    }

    private createColumnDefs() {
        return [
            {headerName: 'Name', field: "name", width:200 },
            {headerName: 'Country', field: "country", width:180},
            {headerName: 'City', field: "city", width:160},
            {headerName: 'e-mail', field: "email", width:300}
        ];
    }


    private createRowData() {
        return [
            {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"},
            {"name":"Pamela Hill","country":"Russia","city":"Krylovskaya","email":"phill1@symantec.com"},
            {"name":"Robin Andrews","country":"Ukraine","city":"Korop","email":"randrews2@photobucket.com"},
            {"name":"Peter Kim","country":"Mexico","city":"San Jose","email":"pkim3@theatlantic.com"},
            {"name":"Carol Foster","country":"Mexico","city":"El Aguacate","email":"cfoster8@intel.com"},
            {"name":"Jimmy Burke","country":"Indonesia","city":"Banjarsari","email":"jburke9@over-blog.com"},
            {"name":"Jonathan Crawford","country":"Peru","city":"Alca","email":"jcrawforda@deliciousdays.com"},
            {"name":"Donald Montgomery","country":"Poland","city":"Dzialoszyce","email":"dmontgomeryb@google.com.br"},
            {"name":"Donna Shaw","country":"Japan","city":"Akune","email":"dshawc@chronoengine.com"},
            {"name":"Helen King","country":"United States","city":"Hollywood","email":"hkingd@devhub.com"},
            {"name":"Walter Myers","country":"China","city":"a ndaowa n", "email":"wmyerse@state.tx.us"},
            {"name":" Alice Collins","country":"Papua Nw  Guine a", "city":"Mendi","email":"acollinsf@npr.org"},
            {"name":"Anne Richards","country":"China","city":"Koramlik","email":"arichardsu@vinaora.com"},
            {"name":"Randy Miller","country":"Indonesia","city":"Trenggulunan","email":"rmillerv@oakley.com"},
            {"name":"Phillip Adams","country":"Bahamas","city":"Duncan Town","email":"padamsw@lycos.com"},
            {"name":"Nicholas Allen","country":"Philippines","city":"Bautista","email":"nallenx@aboutads.info"},
            {"name":"Lisa Willis","country":"Thailand","city":"Lat Yao","email":"lwillisy@istockphoto.com"},
            {"name":"Jeffrey Castillo","country":"Indonesia","city":"Karangsari","email":"jcastilloz@washington.edu"},
            {"name":"Michael Carpenter","country":"Colombia","city":"Cali","email":"mcarpenter13@prlog.org"},
            {"name":"Roger Lee","country":"France","city":"Courtaboeuf","email":"rlee14@earthlink.net"},
            {"name":"Steve Wallace","country":"Russia","city":"Novobeysugskaya","email":"swallace15@cisco.com"}
        ];
    }
}



