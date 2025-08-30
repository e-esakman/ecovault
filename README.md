# EcoVault - Climate Action Platform

EcoVault is a comprehensive climate action platform that gamifies environmental activities and connects users with local environmental organizations. The platform consists of both a React Native mobile app and a Progressive Web App (PWA).

## 🌍 Features

- **Points & Rewards System**: Earn points for eco-friendly actions like recycling, biking, and tree planting
- **Social Feed**: Share your environmental activities and connect with like-minded individuals
- **Local Organizations**: Discover and join environmental events in your area
- **Impact Tracking**: Monitor your weekly environmental impact with detailed statistics
- **Cross-Platform**: Available as both mobile app and web application

## Want to see the mvp of it 
- https://expo.dev/accounts/muffinlearns/projects/ecovault-mobile/builds/8de702b2-66a7-49d8-bef9-216ef65b5710
- Go to the link, click on the install, scan the QR on ur phone & it will install the apk.

## 📱 Mobile App (React Native)

The mobile app provides a native experience with full device integration.

### Setup Instructions

1. Navigate to the mobile app directory:
```bash
cd EcoVault-Mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Use Expo Go app to scan the QR code and run on your device

### Technologies Used
- React Native
- Expo
- React Navigation
- AsyncStorage for local data persistence

## 🌐 Web App (PWA)

The web application provides browser-based access with Progressive Web App features.

### Setup Instructions

1. Navigate to the website directory:
```bash
cd website
```

2. Serve the files using any web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or simply open index.html in your browser
```

3. Access the app at `http://localhost:8000`

### PWA Features
- Offline functionality with Service Worker
- Install to home screen capability
- Mobile-responsive design
- App-like experience in browsers

## 🚀 Project Structure

```
ecovault/
├── EcoVault-Mobile/          # React Native mobile app
│   ├── src/
│   │   ├── screens/          # App screens
│   │   ├── components/       # Reusable components
│   │   └── assets/           # Images and static files
│   ├── App.js               # Main app component
│   ├── package.json         # Dependencies
│   └── app.json            # Expo configuration
├── website/                 # Progressive Web App
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Styling
│   ├── script.js           # JavaScript functionality
│   ├── sw.js              # Service Worker
│   ├── manifest.json      # PWA manifest
│   └── image/             # Static images
└── README.md              # This file
```

## 🎯 Key Screens

### Mobile App Screens
- **Welcome Screen**: App introduction and onboarding
- **Dashboard**: Points tracking, weekly streaks, and quick actions
- **Social Feed**: Community posts and environmental activities
- **Upload Screen**: Share eco-activities with photos
- **Organization Screen**: Local environmental events and organizations
- **Login Screen**: User authentication

### Web App Features
- Responsive design that works on all devices
- Same core functionality as mobile app
- Progressive Web App capabilities
- Offline support

## 🌱 Environmental Actions

Users can earn points for various eco-friendly activities:
- ♻️ Recycling (+10 points)
- 🚲 Biking to work (+20 points)
- 🌳 Planting trees (+50 points)
- 🏖️ Beach cleanups
- 🌍 Carbon footprint reduction

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Repository**: https://github.com/e-esakman/ecovault
- **Live Demo**: [Deploy the website to see it in action]

---

Built with ❤️ for the environment 🌍
