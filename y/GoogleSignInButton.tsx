import React from 'react';
import { Button } from 'react-native';
import { onGoogleButtonPress } from './auth'; // Adjust the import path according to your project structure

const GoogleSignInButton: React.FC = () => {
    return (
    <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    );
}

export default GoogleSignInButton;