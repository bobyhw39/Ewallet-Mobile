import React from 'react'
import Native from 'react-native'

class SettingsScreen extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <Native.View>
                <Native.Text>
                    Settings Page here
                </Native.Text>
            </Native.View>
        );
    }
}
export default SettingsScreen;
