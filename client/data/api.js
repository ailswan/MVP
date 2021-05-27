import $ from 'jquery'

export var searchZillow = ({location, max = 5}, callback) => {
    $.get('/api/overview', {
      location: location
    })
    .done(items => {
      console.log(items);
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      console.log(responseJSON);
    });
};

