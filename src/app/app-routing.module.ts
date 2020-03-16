import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';

const routes: Routes = [
    { path: '', component: Step1Component },
    { path: 'step-1', component: Step1Component },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
