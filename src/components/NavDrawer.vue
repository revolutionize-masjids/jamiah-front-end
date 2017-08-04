<!-- App-wide navigation drawer (sidebar) that slides from the left of the screen and could contain information such as "About Us" and committee member information. -->

<template>
  <md-sidenav class="md-left" ref="navDrawer">
    <md-toolbar class="md-account-header">
      <md-list class="md-transparent">
        <md-list-item class="md-avatar-list">
          <md-avatar class="md-large">
            <md-image :md-src="muslimBrotherImage" alt="People" />
          </md-avatar>

          <span style="flex: 1"></span>

          <md-avatar>
            <md-image :md-src="muslimBrother2Image" alt="People" />
          </md-avatar>

          <md-avatar>
            <md-image :md-src="muslimSisterImage" alt="People" />
          </md-avatar>
        </md-list-item>

        <md-list-item>
          <div class="md-list-text-container">
            <span>Abul Leis</span>
            <span>abul.leis@gmail.com</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <md-list>
      <md-list-item>
          <md-icon>work</md-icon>
          <span>Services</span>

          <md-list-expand>
          <md-list>
              <md-list-item class="md-inset">Marriage Ceremony (Nikkah)</md-list-item>
              <md-list-item class="md-inset">Funerals</md-list-item>
              <md-list-item class="md-inset">Volunteering</md-list-item>
          </md-list>
          </md-list-expand>
      </md-list-item>

      <md-list-item>
          <md-icon>business_center</md-icon>
          <span>Programs</span>

          <md-list-expand>
          <md-list>
              <md-list-item class="md-inset">Saturday School</md-list-item>
              <md-list-item class="md-inset">Sunday School</md-list-item>
              <md-list-item class="md-inset">Youth Activities</md-list-item>
              <md-list-item class="md-inset">Sister's Programs</md-list-item>
              <md-list-item class="md-inset">Adult Islamic Education</md-list-item>
          </md-list>
          </md-list-expand>
      </md-list-item>

      <md-list-item>
          <md-icon>event</md-icon>
          <span>Events</span>

          <md-list-expand>
          <md-list>
              <md-list-item class="md-inset">Weekly Jumu'ah</md-list-item>
              <md-list-item class="md-inset">Eid al-Fitr</md-list-item>
              <md-list-item class="md-inset">Eid al-Adha</md-list-item>
              <md-list-item class="md-inset">Lailat al-Mir'aj</md-list-item>
              <md-list-item class="md-inset">Shaab e-Baraat</md-list-item>
              <md-list-item class="md-inset">Ramadhan Iftaars</md-list-item>
              <md-list-item class="md-inset">Taraweeh</md-list-item>
              <md-list-item class="md-inset">Lailat al-Qadr</md-list-item>
          </md-list>
          </md-list-expand>
      </md-list-item>

      <md-list-item>
          <md-icon>group</md-icon>
          <span>Committee Members</span>

          <md-list-expand>
          <md-list>
              <md-list-item class="md-inset">Abul Leis</md-list-item>
              <md-list-item class="md-inset">Kamal Ansar</md-list-item>
          </md-list>
          </md-list-expand>
      </md-list-item>

      <md-list-item>
          <md-icon>favorite</md-icon>
          <span>Donate</span>
      </md-list-item>
    </md-list>

    <div class="phone-viewport">
      <md-list class="custom-list md-double-line">
        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Kamal Ansar</span>
            <p>Running late for adhan, tell someone else to do it</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/6" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>me, Jafar, Mamun</span>
            <p>Who is going to be hafiz for taraweeh?</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Afsor Choudhury</span>
            <p>When is 'Isha jama'at tomorrow?...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/8" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Farshed Adib</span>
            <p>When is 'Eid jama'at, Sunday or Saturday?</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
  </md-sidenav>
</template>

<script>
  // import assets (pictures)
  import muslimBrotherImage from '@/assets/muslim-brother.jpg'
  import muslimBrother2Image from '@/assets/muslim-brother-2.jpg'
  import muslimSisterImage from '@/assets/muslim-sister.jpg'

  export default {
    data: function () {
      return {
        // add asset reference properties
        muslimBrotherImage,
        muslimBrother2Image,
        muslimSisterImage
      }
    },
    methods: {
      // open this nav drawer
      open () {
        this.$refs.navDrawer.open()
      }
    }
  }
</script>

<style lang="sass"></style>
