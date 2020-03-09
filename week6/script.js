 Vue.component('round-detail', {
     data: function () {
         return {
             deleted: false
         }
     },
    template: `
        <div>
            <ul>
                <li>Round #: TBD/li>
                <li>Winner: TBD</li>
            </ul>
            <button>Delete round</button>
        </div>
        `,
    methods: {
        deleteRound: function () {
            this.deleted = true;
        }
    }
})
    

let app =  new Vue ({
        el: '#app',
        data: {

        },
        methods: {

        },

        computed: {

        }
    })