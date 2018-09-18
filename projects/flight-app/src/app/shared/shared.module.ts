import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {CityPipe} from './pipes/city.pipe';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth/services/auth-interceptor.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
    ],
    exports: [
        CityPipe,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }

}
