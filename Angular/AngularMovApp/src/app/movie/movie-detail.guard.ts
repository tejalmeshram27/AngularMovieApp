import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn : 'root'
})

export class MovieDetailsGuard{
    constructor(private router:Router){
        
    }

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
        const id = Number(route.paramMap.get('id'));
        if(isNaN(id) || id<1){
            console.log('Invalid');
            this.router.navigate(['/movies']);
            return false;
        }
        return true;

    }


}