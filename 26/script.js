//Using javascript to control bluetooth devices
navigator.bluetooth.requestDevice({
    //accept all devices
    acceptAllDevices: true,
    //filters to show only devices with specific name
    filters: [{name: 'My Bluetooth Device'}]
})

//this way we get the access to different devices using bluetooth
//we can use various code to view battery percentages or other details
