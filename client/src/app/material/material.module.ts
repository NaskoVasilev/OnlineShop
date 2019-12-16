import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatMenuModule
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatMenuModule
    ]
})
export class MaterialModule { }
