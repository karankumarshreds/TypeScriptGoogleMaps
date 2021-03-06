// Interface ti every other class on how 
// they can be an argument to 'addMarker()'
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
};

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor() {
        this.googleMap = new google.maps.Map(document.querySelector('#map'), {
            center: {
                lat: 0, lng: 0
            },
            zoom: 1
        });
    };
    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
};