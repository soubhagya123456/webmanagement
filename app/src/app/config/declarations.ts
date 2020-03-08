import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-userComponent
import { userComponent } from '../components/userComponent/user.component';
//CORE_REFERENCE_IMPORT-popComponent
import { popComponent } from '../components/popComponent/pop.component';
//CORE_REFERENCE_IMPORT-tableComponent
import { tableComponent } from '../components/tableComponent/table.component';
//CORE_REFERENCE_IMPORT-updateComponent
import { updateComponent } from '../components/updateComponent/update.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/profileComponent/profile.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userComponent
userComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-popComponent
popComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tableComponent
tableComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updateComponent
updateComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
profileComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'loginpage', component: loginComponent},{path: 'profilepage', component: profileComponent,
children: [{path: 'updatepage', component: updateComponent},{path: 'tablepage', component: tableComponent,
children: []},{path: 'userpage', component: userComponent}]},{path: 'updatepage', component: updateComponent},{path: 'tablepage', component: tableComponent},{path: 'poppage', component: popComponent},{path: 'userpage', component: userComponent},{path: '', redirectTo: '/profilepage', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
