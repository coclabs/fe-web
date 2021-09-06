<template>
    <v-app>
        <Navbarv1/>
        <v-main style="background-color: #efe5fd;">
          
          <v-container class="my-8">
            
            <div
      
      style="border-bottom: 1px solid #9334e6;"
      class="pa-2 text-left text-h4  "
    >
      invite students
    
         <div class="float-right">    
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
      
    >
     <template v-slot:activator="{ on, attrs }"
     class="mx-16 px-16 text-right  ">
        <v-btn
          color="deep-purple accent-1"
          dark
          v-bind="attrs"
          v-on="on"
          icon
          large
        >
        <v-icon large  >mdi-account-multiple-plus</v-icon>
         
        </v-btn>
      </template>
      
        <v-card class="rounded-lg"
  >
  
  <v-card-title class="text-h6 ">
         Invite students
        </v-card-title>
       
       <v-row
        align="center"
        justify="start"
        class="mx-auto my-auto"
       >
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          class="shrink"
        
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            <v-avatar left>
            <v-img 
             :src="selection.avatar">
            </v-img>
            </v-avatar>
            {{ selection.text }}
          </v-chip>
        </v-col>
       </v-row>

        <v-col
          v-if="!allSelected"
          cols="12"
        >
          <v-text-field
           color="#7776AC"
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-col>
      
    

    <v-divider v-if="!allSelected"></v-divider>
    
    <v-responsive
    class="overflow-y-auto"
    max-height="200"
  >
    <v-list subheader>
      <v-subheader>Search result</v-subheader>

      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.text"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <v-list-item-avatar>
            <v-img 
            :disabled="loading" :src="item.avatar">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
          <v-list-item-icon>
          <v-icon >
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
        </v-list-item>
      </template>
    </v-list>

    
     
     

      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        
        transition="fade-transition"
      >
      </v-lazy>
    
  </v-responsive>

    

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
            color="amber darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
      <v-btn
        :disabled="!selected.length"
        :loading="loading"
        color="deep-purple accent-1"
        text
         @click="next"
        
      >
        invite
      </v-btn>
    </v-card-actions>
        </v-card>
  </v-dialog>
         </div>
            </div>

            <v-list  color="#efe5fd" three-line  >
      <template  v-for="(item, index) in me">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  
  
  
          </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Navbarv1 from '../../components/Navbarv1.vue'
const srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        
      }
export default {
    data: () => ({
      items: [
        {
          text: 'Nature',
          icon: 'mdi-nature',
           avatar: srcs[1],
        },
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine',
           avatar: srcs[2]
        },
        {
          text: 'November',
          icon: 'mdi-calendar-range',
          avatar: srcs[3]
        },
        {
          text: 'Portland',
          icon: 'mdi-map-marker',
          avatar: srcs[4]
        },
        {
          text: 'Biking',
          icon: 'mdi-bike',
          avatar: srcs[5]
        },
        {
          text: 'Bebe',
          icon: 'mdi-bike',
          avatar: srcs[1]
        },
        {
          text: 'Bibi',
          icon: 'mdi-bike',
          avatar: srcs[2]
        },
        
        
      ],
      me: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        
      ],
      loading: false,
      search: '',
      selected: [],
      isActive: false,
       dialog: false,
    }),
     components: { Navbarv1, 
     },
    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
       
    },

    methods: {
      next () {
        this.loading = true
        this.dialog = false

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },
  }
</script>