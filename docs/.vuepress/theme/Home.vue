<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <div class="hero">
      <div class="talk-to-you">
        <p v-html="wordsOne"></p>
        <p v-html="wordsTwo"></p>
      </div>
      <div class="start" v-show="isHidden">
        <p
          class="description"
        >{{ data.subDescription || $description || 'Welcome to your VuePress site' }}</p>
        <p class="action" v-if="data.actionText && data.actionLink">
          <NavLink class="action-button" :item="actionLink" />
        </p>
      </div>
    </div>
    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from "./NavLink";
import Loading from "./Loading";

export default {
  components: { NavLink, Loading },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  },
  data() {
    return {
      loading: true,
      wordsOne: "",
      wordsTwo: "",
      isHidden: false,
      tasks: []
    };
  },
  methods: {
    printWords(htmlStr, key) {
      let index = 0,
        len = htmlStr.length;
      let timer = setInterval(() => {
        if (index >= len) {
          clearInterval(timer);
          return;
        }
        this[key] += htmlStr.charAt(index);
        index++;
      }, 100);
    },
    // 收集任务
    tapTask(task) {
      this.tasks.push(task);
    },
    // 一个接着一个执行
    callTask(final) {
      let index = 0;
      let next = ()=>{
        if(this.tasks.length===index) return final();
        let task = this.tasks[index++];
        task(next);
      }
      next();
    }
  },
  created() {
    this.tapTask(cb => {
      setTimeout(() => {
        this.loading = false;
        this.printWords(
          "一辈子很短，如白驹过隙，转瞬即逝。<br/>可这种心情很长，如高山大川，连绵不绝。",
          "wordsOne"
        );
        cb();
      }, 1500);
    });
    this.tapTask(cb => {
      setTimeout(() => {
        this.printWords(
          "没有一颗心，会因为追求梦想会因为追求梦想而受伤。当你真心渴望某样东西时，整个宇宙都会来帮忙。",
          "wordsTwo"
        );
         cb();
      }, 4000);
    });
    this.callTask(()=>{
      setTimeout(()=>{
          this.isHidden = true;
        },4800)
    })
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 1080px;
  margin: 0px auto;

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    .talk-to-you {
      margin: 0 auto;
      margin-top: 150px;
      width: 350px;

      p {
        text-align: left;
      }

      p:nth-child(2) {
        width: 320px;
      }
    }

    .start {
      transition: all 1s;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1rem;
      color: #ffffff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 30px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
