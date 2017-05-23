var serverData;
$(document).ready(()=>{
    $.ajax({
        type: 'GET',
        url: './api/files'
    })
    .done((data)=>{
        serverData =  data;
        loadYears(data);
    });

    $('#year').on('change',()=>{
        console.log(serverData);
        console.log(serverData[$('#year').val()]);
        loadMonths(serverData[$('#year').val()]);
    });

    $('#load').on('click',()=>{
        var file= $('#year').val()+"_"+$('#month').val()+".md";
        $.ajax({
            type: 'GET',
            url: './api/files/'+file
        })
            .done((data)=>{
                $('#data').html(marked(data.data));
                console.log(data);
            });
    });
});

function loadYears(years){
    var html = '<option>Select</option><option>';
    html+=Object.keys(years).join('</option><option>');
    html+='</option>'
    $('#year').html(html);
    console.log(html);
}

function loadMonths(months) {
    console.log(months);
    if(!!months){
        var html = '<option>Select</option><option>';
        html+=months.join('</option><option>');
        html+='</option>'
        $('#month').html(html);
        return;
    }
    $('#month').html('<option>Select</option>');
    $('#month').prop('disabled',true);
    return;
}