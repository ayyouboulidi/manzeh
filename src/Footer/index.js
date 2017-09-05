import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Gmap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 34.026929, lng: -4.884638 }}>
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        {...marker}/>
    ))}
  </GoogleMap>
));

export default class Footer extends Component {
    render () {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="widget-wrapper">
                                    <h3 className="widget-title">Menzah Sidi Harazem</h3>			
                                    <div className="textwidget">Manzeh Sidi Harazem • Sidi Harazem Fès </div>
                                    <div className="textwidget"> • Café restau : 0535690718 </div>
                                    <div className="textwidget"> • Piscine : 0629239859 / 0666959077 </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Gmap
                                containerElement={<div style={{ height: `300px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                markers={[{position: { lat: 34.026929, lng: -4.884638 }, title: `Menzah Sidi Harazem {lat: 34.026929, lng: -4.884638}`}]}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="widget-wrapper">			
                                    <div className="textwidget"> 
                                        <a href="http://www.github.com/ayyouboulidi" className="link"> Réalisation : Ayyoub oulidi </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}