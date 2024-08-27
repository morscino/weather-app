export class helpers {

    static formatDateTime(timestamp) {
        const date = new Date(timestamp  * 1000)
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',hour12:true });
        return formattedDate
    }
    static formatTime(timestamp) {
        const date = new Date(timestamp  * 1000)
        return date.toLocaleTimeString('en-US', { hour12: true });
    }

    static formatTemperature(kelvin) {
        return Math.round(kelvin - 273.15)
    }

    static formatLocation(location) {
        if (location && location.includes(' ')) {
            const split = location.split(' ')
            return split[0]
        }

        if (location && location.includes('/')) {
            const split = location.split('/')
            return split[0]
        }
        return location
    }

    static formatWindSpeed(speed) {
        return Math.round((speed * 60 * 60) / 1000)
    }
}