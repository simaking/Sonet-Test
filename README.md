# Sikt Student ID App

A React Native clone of the Sikt student ID application, faithfully recreating the design and functionality shown in the provided screenshot.

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
- Both buttons include proper touch handling and visual feedback

### 📱 App Metadata
- Dynamic timestamp: Updates automatically with current date/time
- Timezone display: "Europe/Oslo"
- Version number: "4.1.8" (matching the original)

## Technical Implementation

### 🛠️ Built With
- **React Native 0.72.6**: Cross-platform mobile development
- **TypeScript**: Type-safe development
- **React 18.2.0**: Modern React features
- **SafeAreaView**: Proper device compatibility

### 🎨 Design System
- **Colors**: Carefully matched hex values from the original design
- **Typography**: Consistent font weights and sizes
- **Layout**: Flexbox-based responsive design
- **Icons**: Emoji-based icons for cross-platform compatibility

### 📱 Platform Support
- ✅ iOS
- ✅ Android
- ✅ Responsive design for different screen sizes

## Getting Started

### Prerequisites
- Node.js (>= 16)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **For iOS** (macOS only):
   ```bash
   cd ios && pod install && cd ..
   npm run ios
   ```

3. **For Android**:
   ```bash
   npm run android
   ```

4. **Start Metro bundler**:
   ```bash
   npm start
   ```

## Project Structure

```
sikt-student-id/
├── App.tsx                 # Main application component
├── index.js               # Entry point
├── package.json           # Dependencies and scripts
├── app.json              # App configuration
├── metro.config.js       # Metro bundler config
├── babel.config.js       # Babel configuration
└── README.md             # Project documentation
```

## Key Components

### MainApp Component (`App.tsx`)
- **Header**: Sikt logo and menu button
- **ProfileCard**: Student information display
- **ValidityCard**: Semester and expiration info
- **ActionButtons**: Control and European student card buttons
- **Footer**: Metadata display with dynamic timestamp

## Functionality

### 🔍 Control Button
- Simulates card verification process
- Logs action for debugging
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

## Future Enhancements

- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capability
- **Offline Support**: Local data caching
- **Biometric Auth**: Fingerprint/Face ID integration
- **QR Code**: Digital verification codes
- **Accessibility**: Enhanced screen reader support

## Version History

- **4.1.8**: Initial implementation matching original design
- Future versions will maintain design consistency while adding features

## License

This project is a design study and educational implementation. All rights to the original Sikt design belong to their respective owners.