$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".item3__upload-name").val(fileName);
  });