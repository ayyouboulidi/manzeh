import React, {Component} from 'react';

export default class Footer extends Component {
    render () {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="widget-wrapper">
                            <h3 className="widget-title">Menzah Sidi Harazem</h3>			
                            <div className="textwidget">Manzeh Sidi Harazem • Sidi Harazem Fès </div>
                            <div className="textwidget"> • Café restau : 0535690718 </div>
                            <div className="textwidget"> • Piscine : 0629239859 / 0666959077 </div>
                        </div>
                        <div className="widget-wrapper">			
                            <div className="textwidget"> 
                                <a href="http://www.github.com/ayyouboulidi" className="link"> Réalisation : Ayyoub oulidi </a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}