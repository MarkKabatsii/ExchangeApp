import React  from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"




class Contacts extends React.Component{

    render() {
       const AsyncMap = withScriptjs(
           withGoogleMap(
               props => (
                   <GoogleMap google={ this.props.google }
                              defaultZoom={14}
                              defaultCenter={{ lat: 32.834419, lng: 35.078159 }}
                   >
                       {/*Marker*/}
                       <Marker google={this.props.google}
                               position={{ lat: 32.834419, lng: 35.078159 }}
                       />
                       <Marker />
                   </GoogleMap>
               )
           )
       );
    return (
        <div>
            <div>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places&key=AIzaSyAsRaJIlDIsmin3lednBnlxueNhEJIr3Uo"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: `600px`, height: `600px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}
}



export default Contacts;