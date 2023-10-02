<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row mb-3">
          <div class="col-12 col-md-4 mb-4 mb-md-0">
            <profile-card class="sticky-top top-3" />
          </div>
          <div class="col-12 col-md-8">
            <div id="instagram-card" class="card mb-4">
              <div class="card-body">
                <div class="w-100">
                  <h4 class="d-flex align-items-center fs-5">
                    <span class="me-2">
                      <i class="fab fa-instagram"></i>
                    </span>
                    Instagram
                  </h4>
                  <div class="row">
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Followers"
                        value="22,000"
                        :percentage="stats.money.percentage"
                        :detail="stats.money.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Profile Views"
                        value="220"
                        :percentage="stats.users.percentage"
                        :detail="stats.users.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Impressions"
                        value="22"
                        :percentage="stats.clients.percentage"
                        :percentageColor="stats.clients.percentageColor"
                        :detail="stats.clients.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Avg Engagement Rate"
                        value="22%"
                        :percentage="stats.sales.percentage"
                        :detail="stats.sales.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="card z-index-2">
                        <gradient-line-chart chart-id="ig-chart-line" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="card z-index-2">
                        <consumption-room-chart chart-id="ig-chart-donut" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="card z-index-2">
                        <categories-card />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="youtube-card" class="card">
              <div class="card-body">
                <div class="w-100">
                  <h4 class="d-flex align-items-center fs-5">
                    <span class="me-2">
                      <i class="fab fa-youtube"></i>
                    </span>
                    Youtube
                  </h4>
                  <div class="row">
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Followers"
                        value="22,000"
                        :percentage="stats.money.percentage"
                        :detail="stats.money.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Profile Views"
                        value="220"
                        :percentage="stats.users.percentage"
                        :detail="stats.users.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Impressions"
                        value="22"
                        :percentage="stats.clients.percentage"
                        :percentageColor="stats.clients.percentageColor"
                        :detail="stats.clients.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                    <div class="col-xl-3 col-md-6 col-12">
                      <card
                        title="Avg Engagement Rate"
                        value="22%"
                        :percentage="stats.sales.percentage"
                        :detail="stats.sales.detail"
                        custom-bg-color="bg-primary"
                        custom-text-color="text-white"
                      ></card>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="card z-index-2">
                        <gradient-line-chart chart-id="yt-chart-line" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="card z-index-2">
                        <consumption-room-chart chart-id="yt-chart-donut" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Sales by Country</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(sale, index) in sales" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div>
                            <img :src="sale.flag" alt="Country flag" />
                          </div>
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">Country:</p>
                            <h6 class="mb-0 text-sm">{{ sale.country }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Sales:</p>
                          <h6 class="mb-0 text-sm">{{ sale.sales }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Value:</p>
                          <h6 class="mb-0 text-sm">{{ sale.value }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">Bounce:</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import ConsumptionRoomChart from "@/examples/Charts/ConsumptionRoomChart.vue";
// import ConsumptionDayChart from "@/examples/Charts/ConsumptionDayChart.vue";
// import Carousel from "./components/Carousel.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import ProfileCard from "@/views/components/ProfileCard.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  name: "dashboard-default",
  data() {
    return {
      stats: {
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "ni ni-money-coins",
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      },
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    Card,
    GradientLineChart,
    CategoriesCard,
    ProfileCard,
    ConsumptionRoomChart,
    // ConsumptionDayChart
  },
};
</script>
