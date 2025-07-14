# dragon_ball
Description
-------------------------------------------------------------------------
This is a simple web project that displays characters 
from the Dragon Ball universe using an API to fetch character 
information. The project uses HTML, CSS, and JavaScript to display 
a list of characters in card format. Data is fetched from the Dragon 
Ball API, and the page is styled using CSS.

Features
-------------------------------------------------------------------------
* Fetch Dragon Ball characters using an API.
* Display all characters on a single page.
* Character cards include name, race, gender, KI level, and an image.
* Button to navigate to the planets page.

Technologies
-------------------------------------------------------------------------
* HTML
* CSS
* JavaScript
* Fetch API (to retrieve data from the API)

Requirements
* A modern web browser (Chrome, Firefox, Edge, etc.)
* A local or remote server (like Live Server for VS Code)

Installation
-------------------------------------------------------------------------
1. Download or clone this repository:
    git clone https://github.com/NepyAnna/dragon_ball.git
2. Open the project in your code editor (e.g., VS Code).
3. Make sure all files are placed in the correct directories:
    * *.html — The main HTML files for both planets and characters pages.
    * js/*.js — JavaScript files for fetching and displaying characters.
    * styles/*.css — CSS files for styling the pages and cards.
How to run in Docker
1. **Build the Docker image:**
```bash
docker build -t dragon-image .
```
3. **Run the container:**
```bash
docker run -d -p dragon-image 8081:80 
```
4. **Open the project in a browser:**
   Go to http://localhost:8081

How to Run the Project
-------------------------------------------------------------------------
1. Install the Live Server extension in VS Code.
2. Open the index.html file.
3. Right-click index.html and select Open with Live Server.
4. The page will automatically open in your browser.

How It Works
-------------------------------------------------------------------------
1. Fetching data:
    * The *.js files use the Fetch API to request characters and planets data 
    from the Dragon Ball API.
    * Pagination is handled to load all characters and planets from multiple pages.
2. Displaying data:
    * Each character or planet is displayed in a card that includes their image, 
    name, description etc.
3. Styling:
    * The .css files contain styles for the layout of cards and the page's overall look.

Next Steps
-------------------------------------------------------------------------
* Improve CSS styling for better user experience.
* Optimize API requests.

Important Notes
-------------------------------------------------------------------------
* All character data is dynamically loaded from the API, so an internet 
connection is required.

Support
-------------------------------------------------------------------------
If you have any questions or issues with the project, feel free to reach 
out via the Issues section or contact me at _________@gmail.com.
