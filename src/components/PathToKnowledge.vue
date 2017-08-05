<template>
  <md-card class="md-accent path-to-knowledge">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Path to Knowledge</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-content>
      <md-layout md-column>
        <md-layout class="knowledge-categories">

          <!-- Ask Imam -->
          <md-layout class="knowledge-category ask-imam-category">
            <md-card>
              <md-card-media>
                <md-avatar class="md-large">
                  <md-image :md-src="ImamImage" alt="People" />
                </md-avatar>
              </md-card-media>

              <md-card-header>
                <div class="md-title">Ask Imam</div>
                <div class="md-subhead">Need to know anything? Ask a scholar to learn about the most debated subjects.</div>
              </md-card-header>
            </md-card>
          </md-layout>

          <!-- Community -->
          <md-layout class="knowledge-category community-category">
            <md-card>
              <md-card-media>
                <md-avatar class="md-large">
                  <md-image :md-src="MuslimBrother3Image" alt="People" />
                </md-avatar>
              </md-card-media>

              <md-card-header>
                <div class="md-title">Community</div>
                <div class="md-subhead">Get involved with the community and offer suggestions!</div>
              </md-card-header>
            </md-card>
          </md-layout>

          <!-- Discussion -->
          <md-layout class="knowledge-category discussion-category">
            <md-card>
              <md-card-media>
                <md-avatar class="md-large">
                  <md-image :md-src="MuslimSister2Image" alt="People" />
                </md-avatar>
              </md-card-media>

              <md-card-header>
                <div class="md-title">Discussion</div>
                <div class="md-subhead">Join the online discussions to further connect with your fellow brothers and sisters!</div>
              </md-card-header>
            </md-card>
          </md-layout>
        </md-layout>
      </md-layout>
    </md-card-content>
  </md-card>
</template>

<script>
  import ImamImage from '@/assets/imam.png'
  import MuslimBrother3Image from '@/assets/muslim-brother-3.png'
  import MuslimSister2Image from '@/assets/muslim-sister-2.png'

  export default {
    data: function () {
      return {
        ImamImage,
        MuslimBrother3Image,
        MuslimSister2Image
      }
    }
  }
</script>

<style lang="sass">
  .path-to-knowledge
    .knowledge-categories
      .knowledge-category
        text-align: center
        color: black
</style>
