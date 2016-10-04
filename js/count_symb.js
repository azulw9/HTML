var max =20;
      function countChar(val) {
        var len = val.value.length;
        if (len > max) {
            var char = len-max;
          $('#charNum').text('Вы превысили лимит на ' + char + ' символов');
            document.getElementById('charNum').style.color='red';
        } else {
        var char = max - len;
        $('#charNum').text('Осталось ввести ' + char + ' символов');
            document.getElementById('charNum').style.color='#0006ff';
        }
      };
        function countChar1(val) {
            var max =40;
        var len = val.value.length;
        if (len > max) {
          var char = len-max;
          $('#charNumb').text('Вы превысили лимит на ' + char + ' символов');
            document.getElementById('charNumb').style.color='red';
        } else {
          var char = max - len;
        $('#charNumb').text('Осталось ввести ' + char + ' символов');
            document.getElementById('charNumb').style.color='#0006ff';
            
            
        }
      };