import React, { useMemo, useState, useEffect } from 'react'
import { Chart } from 'react-charts'
import useChartConfig from "../hooks/useChartConfig"

const DataChart = (params) => {
	const [sessionArray, setSessionArray] = useState([]);

	const series = useMemo(
		() => ({
			type: 'line'
		}),
		[]
	)

	function clickHandler() {
		console.log(sessionArray)
		if (sessionArray.length === 0) {
			setSessionArray(params.data)
		}
	}


	const data = useMemo(
		() => [
			{
				label: "Duration",
				datums: [
					{
						x: new Date("2020-8-20"),
						y: 20
					},
					{
						x: new Date("2020-8-21"),
						y: 20
					},
					{
						x: new Date("2020-8-22"),
						y: 30
					},
					{
						x: new Date("2020-8-23"),
						y: 20
					},
					{
						x: new Date("2020-8-24"),
						y: 30
					},
					{
						x: new Date("2020-8-25"),
						y: 20
					},
					{
						x: new Date("2020-8-27"),
						y: 20
					}
				]
			},
			{
				label: "Mindfulness",
				datums: [
					{
						x: new Date("2020-8-20"),
						y: 10
					},
					{
						x: new Date("2020-8-21"),
						y: 10
					},
					{
						x: new Date("2020-8-22"),
						y: 15
					},
					{
						x: new Date("2020-8-23"),
						y: 18
					},
					{
						x: new Date("2020-8-24"),
						y: 18
					},
					{
						x: new Date("2020-8-25"),
						y: 19
					},
					{
						x: new Date("2020-8-27"),
						y: 15
					}
				]
			},
			{
				label: "Attention",
				datums: [
					{
						x: new Date("2020-8-20"),
						y: 18
					},
					{
						x: new Date("2020-8-21"),
						y: 10
					},
					{
						x: new Date("2020-8-22"),
						y: 15
					},
					{
						x: new Date("2020-8-23"),
						y: 10
					},
					{
						x: new Date("2020-8-24"),
						y: 12
					},
					{
						x: new Date("2020-8-25"),
						y: 18
					},
					{
						x: new Date("2020-8-27"),
						y: 18
					}
				]
			}
		],
		[]
	)

	const axes = useMemo(
		() => [
			{ primary: true, position: 'bottom', type: 'time' },
			{ position: 'left', type: 'linear', stacked: false }
		],
		[]
	)


	return (
		<div className="app">
			<div className="row">
				<button
					type="button"

					onClick={clickHandler}
				>click</button>
				<div style={{ width: "98%", height: "500px" }}>
					<Chart data={data} series={series} axes={axes} tooltip />

				</div>
			</div>
		</div>
	)
}

export default DataChart