<template>
  <div class="card card-profile">
    <img src="../../assets/img/bg-profile.jpg" alt="Image placeholder" class="card-img-top" />
    <div class="row justify-content-center">
      <div class="col-4 col-lg-4 order-lg-2">
        <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
          <a href="javascript:;">
            <img
              src="../../assets/img/team-2.jpg"
              class="rounded-circle img-fluid border border-2 border-white"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="text-center mt-2">
        <h5>
          Mark Davis
          <span class="font-weight-light">, 35</span>
        </h5>
        <div class="h6 font-weight-300">
          <i class="ni location_pin mr-2"></i>Bucharest, Romania
        </div>
        <div class="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-2">
          <user-tag title="Instagram" color="bg-danger" />
          <user-tag title="TikTok" color="bg-danger" />
        </div>
        <p class="text-sm">
          Big Stremer
        </p>
      </div>
      <div class="row">
        <div class="col">
          <div class="d-flex justify-content-center">
            <div class="d-grid text-center">
              <span class="text-lg font-weight-bolder">22</span>
              <span class="text-sm opacity-8">Friends</span>
            </div>
            <div class="d-grid text-center mx-4">
              <span class="text-lg font-weight-bolder">10</span>
              <span class="text-sm opacity-8">Photos</span>
            </div>
            <div class="d-grid text-center">
              <span class="text-lg font-weight-bolder">89</span>
              <span class="text-sm opacity-8">Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-center border-0 p-0">
      <a href="" class="btn btn-sm btn-danger">
        <span class="me-2">
          <i class="fa fa-pencil"></i>
        </span>
        Edit Profile
      </a>
    </div>
  </div>
</template>

<script>
import UserTag from '@/components/UserTag.vue';

export default {
  name: "profile-card",
  components: {
    UserTag
  }
};
</script>