import $ from 'jquery';

var getData = (cb) => {
  $.get("/repos", (data) => {
    cb(null, data);
  })
}

export default getData;