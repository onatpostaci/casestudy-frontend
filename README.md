<!-- PROJECT LOGO -->
<div align="center">
<h3 align="center">Challenge of Full-Stack Internship</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#steps-for-running-the-client">Steps for running the Client</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In this challenge, there are three layers communicating in an order. Basically, we have a UI Layer (Client Side), a Logic Layer (Backend Side), and a Data Layer (MongoDB Cloud). UI Layer communicates with the Logic Layer, then Logic Layer has different services inside of it and it communicates with the Data Layer. Therefore, we can state that the most basic architectural pattern that we adopt for this challenge is Three-Tier Architecture. However, there are internal functionalities inside of the Logic Layer. As mentioned in the Challenge document, we have a Web Socket service that enables real-time communication between the client side and the server side. Therefore, in terms of this specific interaction, we have a Publish-Subscribe Architectural Pattern even though this pattern mostly relates with distributed systems because both services subscribe to themselves and publish messages to each other.

### Built With

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

There are several instructions on setting up the project locally.
To get a local copy up and running follow these simple example steps please:

### Steps for running the Server

1. Clone the repo

   ```sh
   git clone https://github.com/onatpostaci/casestudy-frontend.git

   ```

2. Install the necessary NPM packages

- npm

  ```sh
  npm install

  ```

3. Enter your public API URL (Example: 'http://localhost:3000') in `.env.local` file created in the project directory:
   ```env
   NEXT_PUBLIC_API_URL='ENTER YOUR PUBLIC API URL'
   ```
4. Start the Client

- npm

  ```sh
  npm run dev

  ```

Now, client should start, you can go to the client from the URL in the terminal.

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
