import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export async function onGoogleButtonPress() {
    console.log("in the funciton");
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // const { idToken } = await GoogleSignin.signIn();
    // console.log(idToken);
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // console.log(googleCredential);
    // return auth().signInWithCredential(googleCredential);

    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("first");
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("second");
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("third");
          // play services not available or outdated
        } else {
            console.log(error.code);
          // some other error happened
        }
    }
}