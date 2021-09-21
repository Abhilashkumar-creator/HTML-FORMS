  function addRow()
            {
                 var fname = document.getElementById('fname').value;
                 var lname = document.getElementById('lname').value;
                 var address = document.getElementById('address').value;
                 var pincode = document.getElementById('Pincode').value;
                 var gender = document.getElementById('gender').value; 
                 var choiceoffood1 = document.getElementById('cof1').value;
                 var choiceoffood2 = document.getElementById('cof2').value;
                 var state = document.getElementById('State').value;
                 var country = document.getElementById('Country').value;
                 var table = document.getElementsByTagName('table')[0];
                 var newRow = table.insertRow(table.rows.length/2+1);
                  
                  
                  var cel1 = newRow.insertCell(0);
                  var cel2 = newRow.insertCell(1);
                  var cel3 = newRow.insertCell(2);
                  var cel4 = newRow.insertCell(3);
                  var cel5 = newRow.insertCell(4);
                  var cel6 = newRow.insertCell(5);
                  var cel7 = newRow.insertCell(6);
                  var cel8 = newRow.insertCell(7);
                  var cel9 = newRow.insertCell(8);
                  
                  
                  cel1.innerHTML = fname;
                  cel2.innerHTML = lname;
                  cel3.innerHTML = address;
                  cel4.innerHTML = pincode;
                  cel5.innerHTML = gender;
                  cel6.innerHTML = choiceoffood1;
                  cel7.innerHTML = choiceoffood2;
                  cel8.innerHTML = state;
                  cel9.innerHTML = country;
                  
                                   
            }

            
            