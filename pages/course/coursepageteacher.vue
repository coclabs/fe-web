<template>
    <v-app>
        <Navbarv1/>
        <v-main style="background-color: #efe5fd;" >
        
        <v-col cols="12" md="8" sm="6"  lg="8" class="px-8 mx-auto ">
          <v-card
          max-height="250"
            style="border: 2px solid #B388FF; "
            class=" pa-2 rounded-xl hidden-sm-and-down"
            
          >
           <v-list-item three-line>
      <v-list-item-content  class="ms-8 hidden-sm-and-down ">
         <v-list-item-title class="text-h4 mb-1">
         Courseroom
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6">
                 Python101
                 </v-list-item-subtitle>
        <div class="text-overline mb-2">
         
        </div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="240"
        class="mx-1"
      >
       <v-img  :src="require('~/assets/nodata.svg')" ></v-img></v-list-item-avatar>
    </v-list-item>
          </v-card>
         </v-col>
        <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
             <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
         
        </v-row>
       
      </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Navbarv1 from '../../components/Navbarv1.vue'
export default {
     data: () => ({
     items: [
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          category: 'Travel',
          keyword: 'Drinks',

        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
          title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          category: 'Technology',
          keyword: 'Phones',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
          title: 'How to Get Media Mentions for Your Business',
          category: 'Media',
          keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
          title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          category: 'Technology',
          keyword: 'Military',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Travel',
          keyword: 'Social',
        },
      ],
      search: '',
      links: [
        { title: 'Home', icon: 'mdi-home-city',route:'/indexteacher' },
          { title: 'createquestion', icon: 'mdi-plus-box',route:'/question/createquestion' },
          { title: 'showallquestion', icon: 'mdi-book',route:'/question/showallquestion' },
          { title: 'createassignment', icon: 'mdi-plus-box',route:'/question/createassignment'},
          { title: 'showallassignment', icon: 'mdi-book',route:'/question/showallassignment'},
      ],
    }),
     components: { Navbarv1, 
     },
     computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
}
</script>