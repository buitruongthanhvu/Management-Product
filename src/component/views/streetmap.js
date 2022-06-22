import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import L from "leaflet"
// import Title from '../title'


const StreetMap = (props) => {

    return (
        <>
            <h2>{props.name}</h2>
            
            <div className='admin-inner'>
                <MapContainer style={{height: "600px"}} center={[51.505, -0.09]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                </div> 
        </>
    )

}
export default StreetMap