export const getDeviceNumberChart = (startDate, participantList) => {
    const dateSet = new Set([]);
    participantList.forEach(element => {
        dateSet.add(element.dateJoined)
    });
    const devicePerDate = {};
    devicePerDate[startDate] = 0;
    dateSet.forEach(date => {
        devicePerDate[date] = 0;
    })
    participantList.forEach(element => {
        devicePerDate[element.dateJoined]++;
    })
    const dpdArray = Object.keys(devicePerDate).map(key => {
        return {date: key, number: devicePerDate[key]}
    })
    return dpdArray;
}