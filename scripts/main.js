const app = new Vue({
  el: '#app',
  data: {
    title: 'Starter App',
    description:'Vue.js, Bulma, Sass, and Firebase (Firestore)',
  },
  methods: {
    greet: () => {
      console.log('hello Vue.js');
    },
    firebaseStatusReport: () => {
			if (db._databaseId.projectId) {
				console.log(`✅ connected to ${db._databaseId.projectId}`)
			} else {
				console.log(`⚠️ Not connected to a firestore project yet. Check your config`)
			}
    }
  },
  beforeMount() {
    this.greet();
    this.firebaseStatusReport();
  }
});
