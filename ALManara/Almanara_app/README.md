
```markdown
# Next.js Frontend Project

## Overview
This is a frontend project built using **Next.js** (v13.5.7) with the `app` directory structure. Follow the steps below to set up and run the project locally.

## Prerequisites
- Ensure **Node.js** is installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).
- Install **npm** (Node Package Manager) if not already installed. It typically comes with Node.js.

Additionally, ensure that the **Dash apps** are running on the specific ports defined in the project to ensure the frontend can fetch data and display results correctly.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project
1. **Run the Dash apps**: You need to run the Dash apps on the specific ports mentioned in the project for the frontend to work correctly. For example:
    - Economic Status Dash app: Port 8052
    - Social Conditions Dash app: Port 8051
    - Performance Dash app: Port 8050
    - Behavior Dash app: Port 8053
    - Tech Resources Dash app: Port 8054

   Ensure that each Dash app is running on its respective port before starting the frontend project.

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the project.

## Notes
- This project uses the **App Router** introduced in Next.js 13.
- For production build and deployment, run:
  ```bash
  npm run build
  ```

Feel free to contribute or raise issues if needed!
