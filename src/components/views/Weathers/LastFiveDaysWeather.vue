<template>
    <v-tabs-window-item value="last-5-days">
        <v-row no-gutters class="my-2">
            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1 px-5 py-5 bg-surface-light text--primary">
                    <v-row no-gutters class="mb-5">
                        <div class="font-weight-bold">Paris, France</div> <v-spacer></v-spacer>
                        <div class="font-weight-bold">Monday, 12 Sept 2024</div>
                    </v-row>

                    <v-row no-gutters class="align-center">
                        <div class="temperature text-primary">26<sup>o</sup>C</div> <v-spacer></v-spacer> <v-img
                            alt="weather" class="shrink mr-2" width="1"
                            src="https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png" />
                    </v-row>

                    <v-row no-gutters class="mt-5 align-center">
                        <div>
                            <span class="font-weight-bold">Max: </span><span class="">27<sup>o</sup>C</span>
                            <span class="ml-5"><span class="font-weight-bold">Min:</span> 27<sup>o</sup>C</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div v-if="showDetails == `hide-details-${anotherWeather.id}`">
                            show details <v-btn @click="toggleShowDetails(anotherWeather.id)"
                                class="ml-5 bg-surface-light" :flat="true" rounded="false"
                                icon="mdi-arrow-right-thick"></v-btn>
                        </div>
                        <div v-if="showDetails == `show-details-${anotherWeather.id}`">
                            hide details <v-btn @click="toggleShowDetails(anotherWeather.id)"
                                class="ml-5 bg-surface-light" :flat="true" rounded="false"
                                icon="mdi-arrow-down-thick"></v-btn>
                        </div>
                    </v-row>
                    <div v-show="showDetails">
                        <v-divider></v-divider>
                        <v-row no-gutters class="my-3 text-center">
                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-windy"></v-icon>
                                    </li>
                                    <li class="py-2">hshsh</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>
                            <div>

                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-water"></v-icon></li>
                                    <li class="py-2">hshsh</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-arrow-split-horizontal"></v-icon>
                                    </li>
                                    <li class="py-2">hshsh</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-partly-cloudy"></v-icon>
                                    </li>
                                    <li class="py-2">hshsh</li>
                                </ul>
                            </div>
                            <v-spacer></v-spacer>

                            <div>
                                <ul>
                                    <li><v-icon color="primary" size="35" icon="mdi-weather-sunset"></v-icon>
                                    </li>
                                    <li class="py-2">hshsh</li>
                                </ul>
                            </div>

                        </v-row>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1" title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                    variant="tonal">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1" title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                    variant="tonal">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1" title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                    variant="tonal">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1" title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                    variant="tonal">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4" lg="4">
                <v-card class="ma-1" title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                    variant="tonal">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-tabs-window-item>
</template>

<script>
export default {
    data() {
        return {
            anotherWeather: {
                id: 0
            }
        }
    }
}
</script>