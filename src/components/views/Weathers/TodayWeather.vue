<template>
    <v-tabs-window-item value="today">
        <v-row no-gutters class="my-2">
            <v-col cols="12" sm="6" md="4" lg="4" v-if="todayWeather.hasData == true">
                <v-card class="ma-1 px-5 py-5 text--primary" variant="tonal" :flat="true">
                    <v-row no-gutters class="mb-5">
                        <v-col  class="align-center">
                            <div class="font-weight-bold">{{ todayWeather.dateTime }}</div>
                        </v-col>
                        <v-col  class="align-center">
                            <div class="font-weight-bold text-capitalize text-center">{{ todayWeather.description }}</div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="align-center">
                        <div class="temperature text-primary">{{ todayWeather.temperature }}<sup>o</sup>C</div>
                        <v-spacer></v-spacer>
                        <div class="align-center">
                            <v-img alt="weather" class="mr-2 shrink" height="" width="180" :src="todayWeather.icon" />
                        </div>
                    </v-row>

                    <v-row no-gutters class="mt-5 align-center">
                        <div>
                            <span class="font-weight-bold">Max: </span><span class="">{{ todayWeather.maxTemp
                                }}<sup>o</sup>C</span>
                            <span class="ml-5"><span class="font-weight-bold">Min:</span>
                                {{ todayWeather.minTemp }}<sup>o</sup>C</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn @click="todayWeather.showDetails = !todayWeather.showDetails"
                                class="ml-5 bg-surface-light text-lowercase" :flat="true" rounded="false"
                                :append-icon="icon = todayWeather.showDetails ? 'mdi-arrow-down-thick' : 'mdi-arrow-right-thick'">{{
                                    text = todayWeather.showDetails ? 'hide details':'show details' }}</v-btn>
                        </div>
                    </v-row>
                    <div v-show="todayWeather.showDetails">
                        <v-divider></v-divider>
                        <v-row no-gutters class="my-3 text-center">
                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-windy"></v-icon>
                                    </li>
                                    <li class="py-2">{{ todayWeather.windSpeed }} km/hr</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>
                            <div>

                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-water"></v-icon></li>
                                    <li class="py-2">{{ todayWeather.humidity }}%</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-arrow-split-horizontal"></v-icon>
                                    </li>
                                    <li class="py-2">{{ todayWeather.pressure }} hPa</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-partly-cloudy"></v-icon>
                                    </li>
                                    <li class="py-2">{{ todayWeather.sunrise }}</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-sunset"></v-icon>
                                    </li>
                                    <li class="py-2">{{ todayWeather.sunset }}</li>
                                </ul>
                            </div>

                        </v-row>
                    </div>
                </v-card>
            </v-col>


            <v-col cols="12" sm="12" md="12" lg="12" v-else>
                <v-card class="ma-1 text-uppercase text-bold align-center" text="No data found for this location"
                    variant="tonal">

                </v-card>
            </v-col>
        </v-row>

    </v-tabs-window-item>
</template>


<script>
export default {
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
        todayWeather() {
            return this.$store.getters.getTodayWeather
        },
    },
    mounted() {
        // console.log(this.currentCity.name)
        // this.$store.dispatch('getTodayWeather',this.currentCity.name);
    },
    created() {


    }
}
</script>
