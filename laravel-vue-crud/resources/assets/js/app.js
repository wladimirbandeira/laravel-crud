var urlUsers = 'https://jsonplaceholder.typecode.com/users';
new Vue ({
  el: '#main',
  created: Function(){
    this.getUsers();
  },
  data:{
      lists: []
  },
  methods:{
    getUsers: function(){
        axios.get(urlUsers).then(response => {
            this.lists = response.data
        });
    }
  }
});
