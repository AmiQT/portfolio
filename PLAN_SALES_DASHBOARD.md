# Implementation Plan - Interactive Sales Analytics Dashboard

## Goal Description
Create an **Interactive Sales Analytics Dashboard** to showcase Data Analyst skills. This project will be a new page in the portfolio, featuring a React-based dashboard with interactive charts (using Recharts) and mock data. It aims to demonstrate skills in data visualization, frontend development, and business intelligence.

## User Review Required
> [!IMPORTANT]
> This plan involves adding **React** to the Astro project. This is a standard integration but adds a new framework dependency.

## Proposed Changes

### Dependencies
#### [NEW] React & Recharts
- Install `react`, `react-dom`, `@astrojs/react`
- Install `recharts` for visualization
- Install `lucide-react` for icons
- Update `astro.config.mjs` to include React integration.

### Components
#### [NEW] `src/components/dashboard/SalesDashboard.tsx`
- Main dashboard component.
- Contains mock data generator.
- Renders:
    - **KPI Cards**: Total Sales, Orders, Customers, Growth.
    - **Sales Trend Chart**: Line chart showing sales over time.
    - **Category Distribution**: Pie/Donut chart.
    - **Top Products**: Bar chart.
    - **Recent Transactions**: Table.
- Interactive elements: Time range filter (mocked), Category filter.

### Pages
#### [NEW] `src/pages/projects/sales-dashboard.astro`
- The landing page for this project.
- Includes the `SalesDashboard` component (client-side hydrated).
- Adds project description, tech stack used, and "Business Insights" section to explain the data story.

### Navigation
#### [MODIFY] `src/pages/role-data-analyst/projects.astro`
- Add a link/card for the new "Sales Analytics Dashboard" project.

## Verification Plan

### Automated Tests
- Build the project using `npm run build` to ensure no integration errors.

### Manual Verification
- Run `npm run dev`.
- Navigate to `/portfolio/projects/sales-dashboard`.
- Verify:
    - Dashboard loads correctly.
    - Charts render with animation.
    - Interactivity (hover, filters) works.
    - Responsive design (looks good on mobile).
