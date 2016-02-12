var factorialStore = {
  store: {},
  get: function(num){
    if(num == 1 || num == 0){ return 1; };

    if(this.store[num]){
      return this.store[num];
    }else{
      var newVal = this.get(num - 1) * num;
      this.store[num] = newVal;
      return newVal;
    };
  },
};

module.exports = factorialStore;
