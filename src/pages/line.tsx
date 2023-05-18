import { line, scaleLinear, scaleTime, extent } from "d3"
import { eachMonthOfInterval, endOfMonth, format, parseISO, startOfMonth } from "date-fns"
import { motion } from "framer-motion"

const width = 200
const height = 100

interface Data {
    date: Date
    value: number
}
const data: Array<Data> = [
    { date: new Date(2021, 0, 1), value: 41 },
    { date: new Date(2021, 0, 22), value: 32 },
    { date: new Date(2021, 1, 3), value: 31 },
    { date: new Date(2021, 1, 24), value: 42 },
    { date: new Date(2021, 2, 5), value: 22 },
    { date: new Date(2021, 2, 26), value: 10 },
    { date: new Date(2021, 3, 7), value: 67 },
    { date: new Date(2021, 3, 18), value: 19 },
    { date: new Date(2021, 3, 29), value: 39 },
    { date: new Date(2021, 4, 1), value: 42 },
    { date: new Date(2021, 4, 21), value: 33 },
]

const margin = {
    top: 4,
    right: 4,
    bottom: 8,
    left: 8
}

const startDay = startOfMonth(data.at(0)?.date || new Date())

const lastDay = endOfMonth(data.at(-1)?.date || new Date())

const xScale = scaleTime()
    .domain([startDay, lastDay])
    .range([margin.left, width - margin.right])

const months = eachMonthOfInterval({ start: startDay, end: lastDay })

const yScale = scaleLinear()
    .domain(extent(data, d => d.value) as [number, number])
    .range([height - margin.bottom, margin.top])

const lineGenerator = line<Data>()
    .x((d: Data) => xScale(d.date))
    .y((d: Data) => yScale(d.value))

const result = lineGenerator(data)

export default function LinePlot() {
    return <main className="bg-gray-100 w-full min-h-screen p-4">
        <h1 className="text-2xl">Daily Interactions</h1>
        <div className="w-2/4 text-blue-800">
            <svg className="bg-white" viewBox={`0 0 ${width} ${height}`} >

                {months.map((month, index) => (
                    <g
                        key={format(month, 'dd-mm-yyyy')}
                        className="text-gray-600"
                    >
                        {index % 2 === 1 && (
                            <rect
                                x={xScale(month)}
                                width={xScale(endOfMonth(month)) - xScale(month)}
                                height={height - margin.bottom}
                                className="text-gray-100 fill-current"
                            />
                        )
                        }
                        <text
                            className="text-[4px]"
                            fill="currentColor"
                            textAnchor="middle"
                            y={height - 4}
                            x={xScale(month) + 0.5 * (xScale(endOfMonth(month)) - xScale(month))}
                        >{format(month, 'MMM')}
                        </text>
                    </g>
                ))}
                {yScale.ticks(8).map((tickValue, i) => (
                    <g
                        transform={`translate(0, ${yScale(tickValue)})`}
                        className="text-gray-400"
                        key={tickValue}>
                        <line
                            x1={margin.left}
                            x2={width - margin.right}
                            stroke="currentColor"
                            strokeDasharray={"1,3"}
                            strokeWidth={0.3} />
                        <text
                            className="text-[4px]"
                            alignmentBaseline="middle"
                        >
                            {tickValue}
                        </text>
                    </g>
                ))}
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    d={result || ""}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="butt"
                    strokeWidth={0.6}
                />
                {
                    data.map((d, index) => (
                        <motion.circle
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.05 * index, type: "spring" }}
                            key={d.value + d.date.getMinutes()}
                            fill="currentColor"
                            r="1.4"
                            cx={xScale(d.date)}
                            cy={yScale(d.value)}
                            stroke="white"
                            strokeWidth="0.4"
                        />
                    ))
                }
            </svg>
        </div>
    </main>
}


