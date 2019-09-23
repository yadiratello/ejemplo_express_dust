$(document).ready(function () {
    
    $.ajax({
        type: "get",
        url: "https://my.api.mockaroo.com/electrodomesticos.json?key=eac78930",
        dataType: "json",
        success: function (response) {
            $.each(response, function (indexInArray, valueOfElement) { 
                 var id = valueOfElement.id;
                 var desc = valueOfElement.description;
                 // console.log(id + ' - ' + desc);
                 var strRow = `<tr><td>${id}</td><td>${desc}</td></tr>`;
                 $('#dataElectro tbody').append(strRow);
                 // console.log(strRow);
            });
            
        }
    });
});
