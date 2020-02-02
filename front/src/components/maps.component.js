
import React, { Component } from 'react'
import { Map, 
        GoogleApiWrapper, 
        Marker, 
        InfoWindow, 
} from 'google-maps-react'  //despues de instalar npm i google-maps-react


//añadir a App.js import MapContainer from "./components/maps.component";

const style = {
    width:"90%",
    height:"90%",
}

 export class MapContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            datos :[]
        }
    }

    componentDidMount(){
        console.log('componentDidmount');
        fetch("http://localhost:4000/usuario")
            .then(res => res.json())
            .then(datos => {
                console.log ("mierda pati");
                //añado variables que son propiedades que le añado al mapa  
                this.setState({datos: datos});
        });     
    }
    markers(){
        console.log(this.state.datos);
        let datosConLatLong = this.state.datos.filter( dato => 'ubicacion' in dato.datos_guardian );
        console.log(datosConLatLong);
        return datosConLatLong.map(function(dato, i){
            return <Marker 
                name={dato.nombre}
                title={dato.nombre + " " + dato.datos_guardian.titulo}
                position={{lat: dato.datos_guardian.ubicacion.lat, lng: dato.datos_guardian.ubicacion.lng}}>
            </Marker>

            
        });
    }
    
   onMarkerClick(){
       console.log("marcador");
   }    
    render(){
        console.log('render');
        return (
            <Map style={style}
                google={this.props.google} 
                zoom={12}
                initialCenter={{lat:40.417090, lng:-3.703440}}>
                    { this.markers() }  
            </Map>
        );
    }
}




export default GoogleApiWrapper({
    apiKey:"AIzaSyD5hrAlVFyCGhzu0_MsR90u6h0JDeCjlik"
})(MapContainer)





//renderMap(){

    //     window.fetch("http://localhost:4000/usuario")
    //         .then(res => res.json())
    //         .then(datos => {
    //             console.log ("datos");
    //             //añado variables que son propiedades que le añado al mapa  
    //             // var options = {
    //             //     mapTypeId: google.maps.MapTypeId.ROADMAP //Hay otro tipo de mapas -- SATELLITE/HYBRID/TERRAIN
    //             // };
    //             //Inicio el mapa 
    //             

    //             var markers = [];
    //             var info = [];
    //             for (i = 0; i < datos.length; i++) {
    //                 markers[i] = [datos[i].nombre, datos[i].datos_guardian.ubicacion.lat, datos[i].datos_guardian.ubicacion.lng];
    //                 info[i] = [datos[i].nombre + " " + datos[i].datos_guardian.titulo, datos[i].datos_guardian.capacidad_maletas, datos[i].valoracion];
    //             };
    //             var bounds = new google.maps.LatLngBounds();
    //             //Creo un objeto InfoWindow
    //             var infoWindow = new google.maps.InfoWindow();
    //             var marker, i;

    //             // recorre el array y coloca cada marcador en el mapa  
    //             for (i = 0; i < markers.length; i++) {
    //                 var marker_position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    //                 bounds.extend(marker_position);
    //                 marker = new google.maps.Marker({
    //                     position: marker_position,
    //                     map: map,
    //                     title: markers[i]
    //                 });

    //                 //Asigna a cada marcador su informacion que aparece en el evento click  
    //                 google.maps.event.addListener(marker, 'click', (function (marker, i) {
    //                     return function () {
    //                         infoWindow.setContent('<strong>' + "Guardián: " + info[i][0] + '</strong><br/><br/>' + '<strong>' + "Nombre :" + info[i][1] + '</strong><br/><br/>' +'<strong>' + "Nº maletas: " + info[i][2] + '</strong><br/><br/>' +'<strong>' + "Valoracion: " + info[i][3] + '</strong><br/><br/>');
    //                         infoWindow.open(map, marker);
    //                     }
    //                 })(marker, i));
    //                 //Centra el mapa para que se vean todos los marcadores
    //                 map.fitBounds(bounds);
    //             }

    //             //Zoom de 12 sobre el marcador seleccionado
    //             var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
    //                 this.setZoom(12);
    //                 google.maps.event.removeListener(boundsListener);
    //             });
    //         });
    // }
    
