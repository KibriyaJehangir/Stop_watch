# ⏱️ Simple Stopwatch Web App

#### Video Demo: (https://www.youtube.com/watch?v=dwtKCrGw3Uo)
#### Live Demo: (https://kibriyajehangir.github.io/Stop_watch/)

---

A simple stopwatch built using HTML, CSS, and JavaScript. It displays time in `HH:MM:SS` format and features a single button that can start, stop, and restart the stopwatch. This project demonstrates basic DOM manipulation and interval timing in JavaScript.

---

## 🚀 Features

- Start, stop, and restart the stopwatch using a single button
- Time displayed in 2-digit hour:minute:second format
- Automatically rolls over from seconds to minutes and minutes to hours
- Visual indication of stopwatch state (running or stopped)
- No external libraries — fully built with vanilla JavaScript

---

## 🧠 How It Works

- The stopwatch display updates every second using `setInterval()`.
- When the button is clicked for the first time, the stopwatch starts.
- A second click pauses the timer and changes the button to "restart".
- A third click resets the timer to `00:00:00` and starts it again.
- Time is updated in the DOM with leading zeros for values less than 10.
- The display and button styles change to reflect whether the stopwatch is active or paused.

---

## 📁 File Structure

stopwatch/
│
├── index.html # Main HTML structure
├── style/
│ └── style.css # Styling for layout and appearance
└── script/
└── script.js # Stopwatch logic and behavior


---

## 🛠 Technologies Used

- HTML5 for structure
- CSS3 for styling
- JavaScript for functionality

---

## 📚 Educational Concepts

- DOM manipulation with `getElementById`
- JavaScript timing with `setInterval`
- Event-driven programming
- Conditional logic and UI updates
- Time formatting for digital clocks

---

## 👨‍💻 Author

**Kibriya Jehangir**

A student and passionate programmer learning by building simple and useful projects.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this project with proper attribution.
