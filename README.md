# Sikt Student ID App

A React Native clone of the Sikt student ID application built with **Expo** for easy mobile testing, faithfully recreating the design and functionality shown in the provided screenshot.

## 📱 Quick Start with Expo Go

### For Android Testing:

1. **Install Expo Go** on your Android device from Google Play Store
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Scan the QR code** with Expo Go app or your camera
5. **The app will load automatically** on your device!

### Alternative Commands:
```bash
# Start and open Android simulator
npm run android

# Start and open iOS simulator (macOS only)
npm run ios

# Start web version
npm run web
```

## Features

### ✨ Complete UI Recreation
- **Exact Color Scheme**: Matches the purple (#8b5cf6) and green (#22c55e) theme from the original
- **Typography & Spacing**: Precise font sizes, weights, and spacing
- **Layout Structure**: Faithful reproduction of card layouts and button positioning

### 🎓 Student Profile Section
- Circular profile photo display
- Student name with age: "Even Martin Abelseth Riksheim (23)"
- Birth date: "24.09.2001"
- Student number: "599264"
- Institution: "Norges teknisk-naturvitenskapelige universitet"
- Purple-themed card with proper icons and spacing

### ✅ Validity Proof Section
- Green validity card showing "Gyldig studentbevis"
- Current semester: "Vår 2025"
- Expiration date: "31.08.2025"
- Clean, centered layout with appropriate styling

### 🔘 Interactive Buttons
- **Kontroll Button**: Purple filled button for card verification
- **Europeisk studentbevis**: Purple outlined button for European student card
- Both buttons include proper touch handling and console logging

### 📱 App Metadata
- Dynamic timestamp: Updates automatically with current date/time
- Timezone display: "Europe/Oslo"
- Version number: "4.1.8" (matching the original)

## Technical Implementation

### 🛠️ Built With
- **Expo SDK 49**: Modern React Native development platform
- **React Native 0.72.6**: Cross-platform mobile development
- **React 18.2.0**: Modern React features
- **Expo Status Bar**: Cross-platform status bar management

### 🎨 Design System
- **Colors**: Carefully matched hex values from the original design
- **Typography**: Consistent font weights and sizes
- **Layout**: Flexbox-based responsive design
- **Icons**: Emoji-based icons for cross-platform compatibility

### 📱 Platform Support
- ✅ iOS (via Expo Go)
- ✅ Android (via Expo Go)
- ✅ Web browser
- ✅ Responsive design for different screen sizes

## Getting Started

### Prerequisites
- Node.js (>= 16)
- Expo CLI (install with `npm install -g @expo/cli`)
- Expo Go app on your mobile device

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sikt-student-id
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Test on your device**:
   - Install Expo Go from your app store
   - Scan the QR code displayed in the terminal
   - The app loads instantly on your device!

## Project Structure

```
sikt-student-id/
├── App.js                 # Main application component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── babel.config.js       # Babel configuration for Expo
├── assets/               # App icons and images (optional)
├── .gitignore           # Git exclusions
├── .watchmanconfig      # File watching configuration
└── README.md            # Project documentation
```

## Key Components

### MainApp Component (`App.js`)
- **Header**: Sikt logo and menu button
- **ProfileCard**: Student information display
- **ValidityCard**: Semester and expiration info
- **ActionButtons**: Control and European student card buttons
- **Footer**: Metadata display with dynamic timestamp

## Functionality

### 🔍 Control Button
- Simulates card verification process
- Logs action to console for debugging
- Ready for integration with actual verification APIs

### 🇪🇺 European Student Card Button
- Placeholder for European student card navigation
- Styled as outlined button to match original design
- Includes institutional icon

### 📅 Dynamic Footer
- Real-time timestamp generation
- Norwegian date format (DD.MM.YYYY)
- 24-hour time format
- CEST timezone indication

## Design Fidelity

This implementation achieves near-pixel-perfect recreation of the original design:

- ✅ Exact color matching
- ✅ Proper spacing and margins
- ✅ Correct typography hierarchy
- ✅ Accurate button styling
- ✅ Proper card layouts and borders
- ✅ Matching icons and visual elements

## Expo Go Benefits

### 🚀 Instant Testing
- **No Android Studio Required**: Test directly on your device
- **Live Reloading**: See changes instantly as you code
- **Real Device Testing**: Test on actual hardware, not just simulators
- **Cross-Platform**: Same code runs on iOS and Android

### 🔧 Easy Development
- **Hot Reloading**: Fast development cycles
- **Device Logs**: See console.log output in Expo DevTools
- **Network Debugging**: Built-in network request monitoring
- **Performance Monitoring**: Real-time performance metrics

## Troubleshooting

### Common Issues:
1. **QR Code Won't Scan**: Ensure both devices are on the same WiFi network
2. **App Won't Load**: Try running `expo r` to restart with cache cleared
3. **Dependencies Issue**: Run `npm install` and restart the development server

### Development Tips:
- Use `console.log()` for debugging - output appears in Expo DevTools
- Shake your device to open the developer menu
- Use `expo start --tunnel` if you have network connectivity issues

## Future Enhancements

- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capability
- **Offline Support**: Local data caching
- **Biometric Auth**: Fingerprint/Face ID integration
- **QR Code**: Digital verification codes
- **Accessibility**: Enhanced screen reader support

## Version History

- **4.1.8**: Expo compatibility update - Easy mobile testing with Expo Go
- Previous versions maintained design consistency while adding features

## License

This project is a design study and educational implementation. All rights to the original Sikt design belong to their respective owners.