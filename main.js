const app = new Vue ({

    el: "#root",
    data: {
        items : [
            {
                url: 'img/01.jpg',
                name: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },
            {
                url: 'img/02.jpg',
                name: "Svizzera",
                text: "Lorem ipsum."
            },
            {
                url: 'img/03.jpg',
                name: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                url: 'img/04.jpg',
                name: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
            {
                url: 'img/05.jpg',
                name: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            }
        ],
        
        active:0
    },

    methods: {

        previous() {
            this.active--;
            if (this.active < 0) {
                this.active = this.items.lenght -1;
            }
        },

        next() {
            this.active++;
            if (this.active == this.items.lenght) {
                this.active = 0;                
            }
        }

    },

    gotoSlide(index) {
      this.activeSlide = index;
    }
    
});