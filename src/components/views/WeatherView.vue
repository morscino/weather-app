<template>
    <v-container :fluid="true" class="mt-10">
        <v-row no-gutters class="my-2 py-5">

            <v-text-field v-model="currentCity.name"  max-width="465" variant="outlined"
                :rules="[rules.required]" label="Current Location" class=""></v-text-field>
            <v-btn class="ml-3 bg-primary" @click="submitForm" :disabled="buttonEnabled" height="55">get
                forecast</v-btn>
        </v-row>

        <v-tabs v-model="model" align-tabs="left" color="primary">
            <v-tab class="text-capitalize font-weight-bold" text="Today" value="today"></v-tab>
            <v-tab class="text-capitalize font-weight-bold" text="Next 7 Days" value="next-7-days"></v-tab>
            <v-tab class="text-capitalize font-weight-bold" text="last 5 Days" value="last-5-days"></v-tab>
        </v-tabs>

        <v-tabs-window v-model="model">
            <TodayWeather />
            <NextSevenDays />
            <LastFiveDays />
        </v-tabs-window>
    </v-container>
</template>


<script>


import TodayWeather from './Weathers/TodayWeather.vue'
import NextSevenDays from './Weathers/NextSevenDaysWeather.vue'
import LastFiveDays from './Weathers/LastFiveDaysWeather.vue';


export default {
    name: 'TodeyWeather',
    components: {
        TodayWeather,
        NextSevenDays,
        LastFiveDays,
    },
    data() {
        return {
            showHide: 'Show',
            rules: {
                required: value => !!value || 'Location Field is required',
            },
            model: 'tab',
            formValues: {
                currentLocation: ''
            },

        }
    },
    methods: {
        submitForm() {
            this.$store.dispatch('getTodayWeather',this.currentCity.name);
            this.$store.dispatch('getNextSevenWeather',this.currentCity.name);
        },
        locationSuccessCallback(position) {
            // call endpoint to get name
            const coords = position.coords
            this.$store.dispatch('getCurrentCity',coords)
        },
        locationErrorCallback(err) {
            console.log(err)
        }
    },
    computed: {
        buttonEnabled() {
           // console.log(this.$store.state.currentCity)
            return !this.$store.state.currentCity.name
        },
        currentCity(){    
            return this.$store.state.currentCity
        },
    },
    mounted() {
        //this.$store.dispatch('getTodayWeather',this.currentCity.name);
    },
    created(){
        navigator.geolocation.getCurrentPosition(this.locationSuccessCallback, this.locationErrorCallback)
    }


}
</script>
<style>
ul {
    list-style-type: none;
}

.temperature {
    font-size: 5rem;
    font-weight: 550;
}

.v-field__input {
    min-height: 22px !important;
}
</style>
