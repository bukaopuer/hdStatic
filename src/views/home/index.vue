<template>
  <div class="topWrap">
    <div class="topClass">
      <section>
        <div class="wrap" @click="go('/WorkStatic')">
          <div></div>
          <div class="detail">
            <div class="title">工作量统计</div>
            <div class="count">12345</div>
          </div>
        </div>
      </section>
      <section>
        <div class="wrap" @click="go('/CheckStatic')">
          <div></div>
          <div class="detail">
            <div class="title">检查类型统计</div>
            <div class="count">56634</div>
          </div>
        </div>
      </section>
      <section>
        <div class="wrap">
          <div></div>
          <div class="detail">
            <div class="title">处理方式统计</div>
            <div class="count">666</div>
          </div>
        </div>
      </section>
      <section>
        <div class="wrap">
          <div></div>
          <div class="detail">
            <div class="title">案件类别统计</div>
            <div class="count">16548</div>
          </div>
        </div>
      </section>
      <section>
        <div class="wrap">
          <div></div>
          <div class="detail">
            <div class="title">信访来源统计</div>
            <div class="count">43568</div>
          </div>
        </div>
      </section>
    </div>
    <div class="routerView">
      <transition-group  enter-active-class="animated fadeInDown" leave-active-class="animated zoomOutDown">
        <router-view v-if="path == '/CheckStatic'" key="CheckStatic" />
        <router-view v-if="path == '/WorkStatic'" key="WorkStatic" />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      path: ""
    };
  },
  computed: {},
  watch: {
    path(cur) {
      this.$router.push({
        path: cur
      });
    }
  },
  created() {},
  mounted() {},
  methods: {
    go(path) {
      this.path = path;
    }
  }
};
</script>
<style lang="scss" scoped>
.topWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .topClass {
    display: flex;
    justify-content: space-around;
    section {
      flex: 1;
      padding: 15px 25px;
      .wrap {
        height: 6rem;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 3px 3px 3px #ddd;
        padding: 6px 12px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        &:hover {
          box-shadow: 0 0px 10px red;
          transition: all 0.2s;
        }
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-end;
          .title {
            font-weight: 700;
            font-size: 2rem;
            color: rgba(0, 0, 0, 0.45);
            font-family: "Helvetica Neue";
          }
          .count {
            font-weight: 600;
            font-size: 1.6rem;
            color: #666;
          }
        }
      }
    }
  }
  .routerView {
    flex: 1;
  }
}
</style>