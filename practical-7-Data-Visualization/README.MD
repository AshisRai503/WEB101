# WEB101 P7: React Data Visualization Dashboard

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 7 / Data Visualization

## Aim

Implement data visualization in a React application by creating an analytics dashboard with line charts, pie charts, bar charts, and area-style charts.

## Technologies Used

- React
- Vite
- Recharts
- Chart.js
- react-chartjs-2
- date-fns
- CSS grid layout

## Main Concepts Applied

- Data visualization
- Reusable chart components
- Responsive charts
- External data file imports
- Chart.js component registration
- Date formatting with date-fns

## Functional Requirements / Features

- Monthly sales line chart
- Product category pie chart
- Customer acquisition stacked bar chart
- Weekly visitors area-style line chart
- Responsive dashboard card layout

## Setup / How to Run

- Create a clean Vite React project.
- Install `recharts`, `chart.js`, `react-chartjs-2`, and `date-fns`.
- Create `src/components` for chart components.
- Create `src/data/salesData.js` for dashboard data.
- Run the development server using `npm run dev`.

## Implementation Summary

- Created separate chart components for each visualization.
- Used Recharts for monthly sales and product category charts.
- Used Chart.js through react-chartjs-2 for customer acquisition and weekly visitors charts.
- Formatted customer date labels using date-fns.
- Imported all chart components into `App.jsx` and arranged them inside dashboard cards.

## Testing / Output Evidence

- React project started without errors.
- Monthly Sales chart displayed sales, profit, and target trends.
- Product Category chart displayed sales distribution.
- Customer Acquisition chart displayed new and returning customers.
- Weekly Visitors chart displayed visitor trends.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- Chart.js documentation
- React documentation
- react-chartjs-2 documentation
- Recharts documentation
- Vite documentation
- syangche Data-Visualisation GitHub repository
