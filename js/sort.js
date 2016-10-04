	// сортировка таблицы
    // использовать делегирование!
    // должно быть масштабируемо:
    // код работает без изменений при добавлении новых столбцов и строк

    var grid = document.getElementById('grid');
    var check = false;
                        
    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;
       var n_sort = e.target.getAttribute('id');
        switch (n_sort) {
            case 'file':
                //alert("im here");
                document.getElementById('d_size').style.visibility='hidden';
                document.getElementById('up_size').style.visibility='hidden';
                document.getElementById('d_date').style.visibility='hidden';
                document.getElementById('up_date').style.visibility='hidden';
                document.getElementById('file').style.backgroundColor='rgba(224, 130, 130, 0.57)';
                document.getElementById('size').style.backgroundColor='unset';
                document.getElementById('date').style.backgroundColor='unset';
                if (check==false) {
                    document.getElementById('d_file').style.visibility='hidden'; 
                    document.getElementById('up_file').style.visibility='visible';}
                else {document.getElementById('up_file').style.visibility='hidden';
                     document.getElementById('d_file').style.visibility='visible';}
                break;
            case 'size':
                document.getElementById('size').style.backgroundColor='rgba(224, 130, 130, 0.57)';
                document.getElementById('file').style.backgroundColor='unset';
                document.getElementById('date').style.backgroundColor='unset';
                document.getElementById('d_file').style.visibility='hidden'; 
                document.getElementById('up_file').style.visibility='hidden';
                document.getElementById('d_date').style.visibility='hidden';
                document.getElementById('up_date').style.visibility='hidden';
                if (check==false) {
                    document.getElementById('d_size').style.visibility='hidden'; 
                    document.getElementById('up_size').style.visibility='visible';}
                else {document.getElementById('up_size').style.visibility='hidden';
                     document.getElementById('d_size').style.visibility='visible';}
                break;
            case 'date':
                document.getElementById('date').style.backgroundColor='rgba(224, 130, 130, 0.57)';
                document.getElementById('file').style.backgroundColor='unset';
                document.getElementById('size').style.backgroundColor='unset';
                document.getElementById('d_size').style.visibility='hidden';
                document.getElementById('up_size').style.visibility='hidden';
                document.getElementById('d_file').style.visibility='hidden'; 
                document.getElementById('up_file').style.visibility='hidden';
                if (check==false) {
                    document.getElementById('d_date').style.visibility='hidden'; 
                    document.getElementById('up_date').style.visibility='visible';}
                else {document.getElementById('up_date').style.visibility='hidden';
                     document.getElementById('d_date').style.visibility='visible';}
                break;
        }
      // Если TH -- сортируем
      if (check == false) {sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));}
      else { sortGridRevert(e.target.cellIndex, e.target.getAttribute('data-type'));}
    };

    

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }
      

      // сортировать
      rowsArray.sort(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);
      check = true;
    }
    
    function sortGridRevert(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }
      

      // сортировать
      rowsArray.reverse(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);
      check = false;
    }