import { NgModule } from "@angular/core";
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations:[],
    imports: [
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatSidenavModule
    ],
    exports: [
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatSidenavModule
    ],
    providers: []
})
export class MaterialModule {}