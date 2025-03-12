# Journey to Becoming Her


## Table of Contents

1. [Introduction](#podcast_lovers_hub)
2. [Features](#features)
3. [Technologies Used](#technologies_used)
4. [Installation](#installation)
5. [Customization](#customization)
6. [Styling](#styling)
7. [contributing](#contributing)
8. [Get In Touch](#get-in-touch)

# Podcast Lovers Hub 🎙️

Welcome to **Podcast Lovers Hub**, a React based web application that showcases a curated list of podcasts, their hosts, and why they are worth listening to. This project is designed to help users discover new podcasts and learn about their benefits.

---

## Features ✨

- **Responsive Design**: The app is fully responsive and works seamlessly on mobile, tablet, and desktop devices.
- **Dynamic Content**: Podcast data is dynamically rendered using reusable components.
- **Modern UI**: Clean and visually appealing user interface with hover effects and a modern color scheme.
- **Easy to Customize**: Add or remove podcasts by simply updating the data file.

---

## Technologies Used 🛠️

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility first CSS framework for styling components.
- **JavaScript**: For logic and functionality.
- **HTML**: For structuring the content.

---

## Installation 🚀

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ehmkayel/project_becoming_her.git
   cd project_becoming_her
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the App**:
   Visit `http://localhost:3000` in your browser to view the app.

---


## Customization 🎨

### Adding New Podcasts
To add a new podcast, update the `Podcasters` array in the `data.js` file. Follow this structure:

```javascript
const Podcasters = [
  {
    avatar: "image-url.jpg",
    podcastName: "Podcast Name",
    host: "Host Name",
    reason: "Why I love this podcast",
    benefit: "How it has helped me",
    favoriteEpisode: "Favorite episode title",
  },
  // Add more podcasts here
];

export default Podcasters;
```

### Styling
The app uses **Tailwind CSS** for styling. You can customize the colors, spacing, and other styles by editing the `tailwind.config.js` file or directly modifying the class names in the components.


## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'commit prefix: Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## Get in Touch

YIf you have any questions or suggestions, feel free to reach out:
 - Linkedin- [Morufat-Lamidi](https://linkedin.com/in/morufat-lamidi)
 - Tiktok- [Ehmkay](https://www.tiktok.com/@_ehmkay?)
 - Frontend Mentor - [@Ehmkayel](https://www.frontendmentor.io/profile/Ehmkayel)
 - Twitter - [@kamalehmk](https://www.twitter.com/kamalehmk)
 - Gmail- [Mail](mailto:lamidimorufat0@gmail.com);
---

Happy listening! 🎧

---
