import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const RealTimeBarChart = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (!chartRef.current) return

        const ctx = chartRef.current.getContext('2d')
        if (!ctx) return

        const currentYear = new Date().getFullYear()
        const alertChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fire Safety', 'Weather Incidents', 'Flood Incidents'],
                datasets: [{
                    label: `Number of Incidents in ${currentYear}`,
                    data: [3, 2, 4], // Placeholder values, will update dynamically
                    backgroundColor: ['crimson', 'gold', 'deepskyblue'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                    }
                }
            }
        })

        const fetchData = async () => {
            try {
                // Fetch disaster declaration data from FEMA
                const response = await fetch('https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=(state%20eq%20%27CA%27)')
                if (!response.ok) throw new Error('Network response was not ok')

                const data = await response.json()

                const currentYear = new Date().getFullYear()
                let fireCount = 0
                let stormCount = 0
                let earthquakeCount = 0
                let floodCount = 0

                data.DisasterDeclarationsSummaries.forEach((declaration: { declarationDate: string | number | Date; incidentType: string; }) => {
                    const declarationDate = new Date(declaration.declarationDate)
                    
                    // Check if the declaration is from the current year
                    if (declarationDate.getFullYear() === currentYear) {
                      // Increment counts based on incident type
                      if (declaration.incidentType === "Fire") {
                        fireCount++
                      } else if (
                            declaration.incidentType === "Storm" || 
                            declaration.incidentType === "Coastal Storm" || 
                            declaration.incidentType === "Severe Storm" || 
                            declaration.incidentType === "Hurricane"
                        ) {
                        stormCount++
                      } else if (declaration.incidentType === "Earthquake") {
                        earthquakeCount++
                      } else if (declaration.incidentType === "Flood") {
                        floodCount++
                      }
                    }
                  })

                  console.log('Fire = ' + fireCount)
                  console.log('Storm = ' + stormCount)
                  console.log('Flood = ' + floodCount)
                  console.log('Earthquake = ' + earthquakeCount)

                // Process data to determine alert levels
                const fireSafetyLevel = fireCount
                const stormLevel = stormCount
                const floodLevel = floodCount

                alertChart.data.datasets[0].data = [fireSafetyLevel, stormLevel, floodLevel]
                alertChart.update()
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData() // Initial fetch
        const interval = setInterval(fetchData, 60000)
        return () => {
            clearInterval(interval)
            alertChart.destroy()
        }
    }, [])

    return (
        <canvas ref={chartRef} width="300" height="200" />
    )
}

export default RealTimeBarChart
