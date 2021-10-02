var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

// store is in charge of fetching and storing our data
module.exports = Reflux.createStore({
   listenables : [Actions],//if the method has the same name as action call it!
   getTopics: function(){ //fetches data and assigns to this.topics
        return Api.get('topics/defaults')
                  .then(function(json){
                     this.topics = json.data;
                     this.triggerChange();
                  }.bind(this));
   },
   triggerChange : function(){
     this.trigger('change', this.topics);//'trigger'-event,information to share
   }
});
