var counter=0,keytimeout,previous,timer=1000,inner;
$('#phone button').bind("mousedown",function() {
  var $this=$(this),
      button=$this.data('value'),
      $input=$('#result'),
      val=$input.val();
    keytimeout=setTimeout(function () {
      val+=button;
      $input.val(val);
      keytimeout=null;
    },timer)
}).bind('mouseup',function () {
  clearTimeout(keytimeout);
  if ($(this).children('span').length === 0) {
    var $this=$(this),
        button=$this.data('value'),
        $input=$('#result'),
        val=$input.val();
    val+=button;
    $input.val(val);
    return false;
  }
  if (!keytimeout) {
    return false;
  }
  var $this=$(this),
      button=$this.data('value'),
      $input=$('#result'),
      val=$input.val();

  if (previous !== button) {
    reset();
  }else{
    val = val.substring(0, val.length - 1);
  }
  clearTimeout(inner);
  val+=t9(button);
  $input.val(val);
  counter++;
  previous=button;
  inner=setTimeout(reset,timer);
});

function t9(button) {
  return keys[button][counter % keys[button].length];
}

var keys = {
  '1': ['.', ',', '!'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4' : ["g","h","i"],
  '5' : ["j","k","l"],
  '6' : ["m","n","o"],
  '7' : ["p","q","r","s"],
  '8' : ["t","u","v"],
  '9' : ["w","x","y","z"]

};

function reset() {
  counter = 0;
  previous = null;
}
