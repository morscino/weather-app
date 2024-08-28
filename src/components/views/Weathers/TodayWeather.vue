<template>
    <v-tabs-window-item value="today">
        <v-row no-gutters class="my-2 d-flex flex-row align-items-center">
            <v-col cols="12" sm="6" md="4" lg="4"  v-if="todayWeather.hasData == true">
                <v-card class="ma-1 pt-5 text--primary" variant="tonal" :flat="true">
                    <v-row no-gutters class="mb-5 d-flex flex-row text-center">
                        <v-col cols="6" class="align-center  ml-xs-8">
                            <div class="font-weight-bold">{{ todayWeather.dateTime }}</div>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <div class="font-weight-bold text-capitalize text-center">{{ todayWeather.description }}
                            </div>
                        </v-col>
                    </v-row>


                    <v-row no-gutters class="align-center d-flex flex-row text-center">
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="temperature text-primary">{{ todayWeather.temperature }}<sup>o</sup>C</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <div class="align-center fill-height">
                            <v-img cover height="100%" alt="weather" class="mx-auto  "  width="180" :src="todayWeather.icon" />
                        </div>
                        </v-col> 
                    </v-row> 

                    <v-row no-gutters class="my-5 ml-xs-8 text-center">
                        <v-col cols="6">
                            <div class="mt-2 ml-xs-3">
                                <span class="font-weight-bold">Max: </span><span class="">{{ todayWeather.maxTemp
                                    }}<sup>o</sup>C</span>
                                <span class="ml-5"><span class="font-weight-bold">Min:</span>
                                    {{ todayWeather.minTemp }}<sup>o</sup>C</span>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="">
                                <v-btn @click="todayWeather.showDetails = !todayWeather.showDetails"
                                    class="ml-5 bg-surface-light text-lowercase" :flat="true" rounded="false"
                                    :append-icon="icon = todayWeather.showDetails ? 'mdi-arrow-down-thick' : 'mdi-arrow-right-thick'"><span class="d-none d-sm-flex">{{
                                        text = todayWeather.showDetails ? 'hide details':'show details' }}</span></v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <div v-show="todayWeather.showDetails">
                        <v-divider class="px-5"></v-divider>
                        <v-row no-gutters class="my-3 text-center px-3">
                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-windy"></v-icon>
                                    </li>
                                    <li class="py-3 small-text">{{ todayWeather.windSpeed }} km/hr</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>
                            <div>

                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-water"></v-icon></li>
                                    <li class="py-3 small-text">{{ todayWeather.humidity }}%</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-arrow-split-horizontal"></v-icon>
                                    </li>
                                    <li class="py-3 small-text">{{ todayWeather.pressure }} hPa</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-partly-cloudy"></v-icon>
                                    </li>
                                    <li class="py-3 small-text">{{ todayWeather.sunrise }}</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-sunset"></v-icon>
                                    </li>
                                    <li class="py-3 small-text">{{ todayWeather.sunset }}</li>
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
    methods: {
        toggleShowDetails(id) {
            console.log(id)
            this.$store.dispatch('toggleShowDetails', id);
        },
    },
    computed: {
        todayWeather() {
            return this.$store.getters.getTodayWeather
        },
    },
}
</script>
