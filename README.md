# Blockchain.com Project

Live version: https://blockchaincom-weld.vercel.app/

## How to Run the Project Locally

### Clone or Download the Project

https://github.com/Javokhirkhon/blockchain.com

1. Clone the repository:

- git clone <repository-url>

- Or, download the project as a ZIP file and extract it.

### Install Dependencies

1. Navigate to the project folder:

- cd blockchain.com

2. Install required dependencies:

- npm install

### Development Version

1. To run the development server:

- npm run dev

### Production Version

1. Build the project:

- npm run build

2. Start the production server:

- npm run start

## Important Note

For convenience, the .env file has been pushed to the repository for testing purposes.

However, in real-world projects, this is not recommended. Environment variables should:

- Be configured on the server.
- Be kept private using .env.local, .env.development, or .env.production files locally.

## About the Project

This project is a simple cryptocurrency dashboard built using:

- Next.js 15 (latest version)
- TypeScript for type safety.
- Tailwind CSS for styling and responsiveness.

### Features

1. Home Page:

- A placeholder for introductory content.

2. Coins Listing Page:

- Fetches and displays a list of cryptocurrencies with their prices and 24-hour change data.

3. Coin Details Page:

- Shows detailed information about a specific cryptocurrency, including:
- Current price.
- 24-hour high and low prices.

## Project Structure

The project is organized as follows:

- src/app: Contains the main application routes and dynamic pages (/coins and /coins/[id]).
- src/components: For reusable UI components.
- src/lib: Utility functions, such as the fetchData helper.
- src/types: TypeScript definitions for API responses and other types.

Dynamic Pages

- /coins: Fetches live cryptocurrency data on each request.
- /coins/[id]: Fetches detailed data for a specific coin based on its ID.

Error Handling

- Configuration errors (e.g., missing API keys) throw explicit errors using throw new Error.
- API or HTTP-related errors display user-friendly error messages on the page.

## Tech Highlights

1. Built-in Fetch API:

- Next.js’s optimized fetch function is used for data fetching.
- Offers caching and revalidation options out of the box.

2. Loading State:

- Utilizes Next.js’s built-in loading.tsx for a generic loading screen.

3. Type Safety:

- Comprehensive TypeScript types ensure type safety and predictability.

4. Minimal Dependencies:

- No additional libraries were installed, as the project doesn’t require complex logic.

## Design Decisions

1. Data Fetching:

- The /coins and /coins/[id] routes fetch fresh data on every request, ensuring real-time accuracy.
- Revalidation is not used to align with the requirement of displaying the latest data on each request.

2. Environment Variables:

- Included in the project for testing purposes but should be managed securely in production.
