# ShareAbite

ShareAbite is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that enables restaurants to donate excess food to the needy. This project aims to reduce food waste and help those in need by connecting restaurants with local charities and shelters.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Restaurant Registration:** Restaurants can register and manage their profiles.
- **Food Donation:** Restaurants can list excess food available for donation.
- **Charity Registration:** Charities and shelters can register to receive food donations.
- **Food Request:** Charities can request food donations from registered restaurants.
- **Dashboard:** Both restaurants and charities have personalized dashboards to manage their activities.
- **Notifications:** Email notifications for new donations and requests.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/younglord088/ShareAbite.git
    cd ShareAbite
    ```

2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1. Start MongoDB:

    ```bash
    mongod
    ```

2. Start the server:

    ```bash
    cd server
    npm start
    ```

3. Start the client:

    ```bash
    cd ../client
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## Usage

- **For Restaurants:** Register an account, log in, and list your excess food items available for donation.
- **For Charities:** Register an account, log in, and browse available food donations. You can request the items you need.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include appropriate tests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Yash Panjwani - [your-email@example.com](mailto:yashmpanjwani@example.com)

Project Link: [https://github.com/yourusername/ShareAbite](https://github.com/younglord/ShareAbite)
