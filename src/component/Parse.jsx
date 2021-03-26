import { useState, useEffect } from 'react'
import axios from 'axios'
// import Data from '../data/response.json'
// import antares from 'antares-http'

const Parse = () => {

	const [deviceData, setDeviceData] = useState(null)

	useEffect(() => {
		if (deviceData === null) {
			axios.get('http://localhost:9000/latest-data')
				.then((res) => {
					let data = res.data['m2m:cin']
					// console.log(JSON.parse(data.con))
					setDeviceData(JSON.parse(data.con))
				})
		}
	}, [deviceData])

	return (
		<>	
			{ deviceData !== null && (
				<>
					{ console.log(deviceData) }
					<h1>Parse Component</h1>

					<p>Agitator Speed: { deviceData['agitator speed'] }</p>
					<p>Agitator Time: { deviceData['agitator time'] }</p>
					<p>Agitator Time: { deviceData['agitator time'] }</p>
					<p>Internal Circulation Speed: { deviceData['internal circulation speed'] }</p>
					<p>Internal Circulation Time: { deviceData['internal circulation time'] }</p>
					<p>Pressure: { deviceData['pressure'] }</p>
					<p>Speed Homogenizer: { deviceData['speed homogenizer'] }</p>
				</>
			) }
		</>
	);
}
 
export default Parse;