import styled from 'styled-components'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
	{ name: "Ene", calificacion: 4.2 },
	{ name: "Feb", calificacion: 3.8 },
	{ name: "Mar", calificacion: 4.5 },
	{ name: "Abr", calificacion: 2.7 },
	{ name: "May", calificacion: 3.1 },
	{ name: "Jun", calificacion: 4.0 },
	{ name: "Jul", calificacion: 3.9 },
	{ name: "Ago", calificacion: 4.7 },
	{ name: "Sep", calificacion: 4.3 },
	{ name: "Oct", calificacion: 3.6 },
	{ name: "Nov", calificacion: 4.8 },
	{ name: "Dic", calificacion: 4.1 },
];

export function TeacherTrajectory() {

	const calculateYear = () => {
		const date = new Date()
		return date.getFullYear()
	}

	return (
		<Container>
			<h2>Trayectoria durante {calculateYear()}</h2>
			<ResponsiveContainer width={'100%'} height={'100%'}>
				<LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis
						domain={[0, 5]}
						tickCount={6}
					/>
					<Tooltip
						contentStyle={{ backgroundColor: '#333', color: '#fff' }}
						itemStyle={{ color: '#fff' }}
					/>
					<Line type="monotone" dataKey="calificacion" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</Container>
	)
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
	
	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 1rem;
  }
`